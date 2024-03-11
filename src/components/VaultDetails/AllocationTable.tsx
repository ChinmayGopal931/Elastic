import { useEffect, useState } from 'react';
import { TableOptions, useTable } from 'react-table';

interface Props<D extends object> {
  options: TableOptions<D>;
  sort?: boolean;
  children?: React.ReactNode;
  tableName: string;
  data?: any;
}

function AllocationBaseTable<D extends object = {}>(props: Props<D>) {
  const [selected, setSelected] = useState('');
  const [sortedData, setSortedData] = useState(props.options.data);

  function handleSort(headerGroup: any) {
    setSelected((v) => {
      if (v === headerGroup) {
        return '';
      }
      return headerGroup;
    });
  }

  useEffect(() => {
    if (selected !== '') {
      const data = [...props.options.data];
      data.sort((a: any, b: any) => a[selected] - b[selected]);
      return setSortedData(data);
    } else {
      return setSortedData(props.options.data);
    }
  }, [props.options.data, selected]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<D>({
    ...props.options,
    data: sortedData.length == 0 ? props.options.data : sortedData,
  });

  return (
    <div className="flex flex-row mt-0 justify-center">
      <table {...getTableProps()} className="w-1/2 border-spacing-y-1 flex justify-center">
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}></tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row: any) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className={`border-none text-3xs text-left cursor-default px-1 py-2 heading ${
                        index === 0 && 'rounded-l-2xl'
                      } ${index === row.cells.length - 1 && 'rounded-r-2xl'}`}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {props.children}
    </div>
  );
}

export { AllocationBaseTable };
