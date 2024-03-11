import downArrow from 'assets/arrow-down.svg';
import Skeleton from 'components/UI/LoadingText/Skeleton';
import { useEffect, useState } from 'react';
import { TableOptions, useTable } from 'react-table';

interface Props<D extends object> {
  options: TableOptions<D>;
  sort?: boolean;
  children?: React.ReactNode;
  tableName?: string;
}

function DetailBaseTable<D extends object = {}>(
  props: Props<D> & { currentPage: number; pageSize: number; onPageChange: (page: number) => void }
) {
  const [selected, setSelected] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const [sortedData, setSortedData] = useState(props.options.data);

  function handleSort(accessorKey: any) {
    setSelected((v) => {
      if (v === accessorKey) return '';

      if (selected === accessorKey.toLowerCase()) setIsAscending(!isAscending); //sorting logic
      else setIsAscending(true);

      return accessorKey.toLowerCase();
    });
  }

  useEffect(() => {
    if (selected !== '') {
      const data = [...props.options.data];

      if (isAscending) {
        //Sorting logic
        data.sort((a: any, b: any) => (a[selected] > b[selected] ? 1 : -1));
      } else {
        data.sort((a: any, b: any) => (a[selected] < b[selected] ? 1 : -1));
      }

      setSortedData(data);
    } else {
      setSortedData(props.options.data);
    }
  }, [props.options.data, selected, isAscending]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<D>({
    ...props?.options,
    data: sortedData?.length == 0 ? props?.options?.data || [] : sortedData ? sortedData : [],
  });

  useEffect(() => {
    const start = props.currentPage * props.pageSize;
    const end = start + props.pageSize;
    const page = props.options.data.slice(start, end);
    setSortedData(page);
  }, [props.options.data, props.currentPage, props.pageSize]);

  return (
    <>
      <div className="flex-grow bg-transparent flex flex-col overflow-auto h-full w-full bg-gray-200 dark:bg-ui_surface_opc rounded-2xl shadow-xl dark:shadow-lg">
        {props.tableName && (
          <p className="text-2xl heading text-left py-6 pl-2 bg-transparent white">
            {props.tableName}
          </p>
        )}
        <table {...getTableProps()} className="w-full border-spacing-y-0 border-x-white ">
          <thead>
            {headerGroups.map((headerGroup: any) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={`bg-info dark:bg-sec_brand_01 rounded-l-md`}
              >
                {headerGroup.headers.map((column: any, index: number) => (
                  <th
                    {...column.getHeaderProps()}
                    className={`body-medium-12 text-white text-left px-5 py-5 cursor-pointer border-sec_brand_01`}
                    onClick={() => handleSort(column.Header)}
                  >
                    {column.render('Header')}
                    {column.id === selected && (
                      <img className="px-1" src={downArrow} alt="change-arrow" />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: any) => {
                prepareRow(row);

                return (
                  <tr
                    {...row.getRowProps()}
                    className="bg-white dark:bg-ui_surface_opc hover:opacity-80 transition-all duration-100 ease-in-out cursor-pointer"
                  >
                    {row.cells.map((cell: any) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={`border border-gray-400 desktop:text-3xs mobile:text-[10px] text-left cursor-default mobile:pl-4 desktop:px-4 py-5 body-regular-15 `}
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr>
                {headerGroups[0].headers.map((column: any) => (
                  <td
                    key={column.id}
                    className={`border-none desktop:text-3xs mobile:text-[10px] text-left cursor-default mobile:pl-4 desktop:px-4 py-5 rounded-l-2xl ${
                      column === headerGroups[0].headers[headerGroups[0].headers.length - 1] &&
                      'rounded-r-2xl'
                    }`}
                  >
                    <Skeleton />
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {props.children}
    </>
  );
}

export { DetailBaseTable };
