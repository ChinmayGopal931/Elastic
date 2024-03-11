// App
import { useMemo } from 'react';

// Hooks
import { DetailBaseTable } from '../../UI/BaseTable/BaseTable';

export type Policy = {
  [key: string]: string;
};

const Policies = () => {
  const data = useMemo(
    () => [
      {
        category: 'Rebalancing',
        property: 'Every 30 days, \n or if weights diverge x% from target',
      },
      {
        category: 'Fee Calculation',
        property: 'High watermark',
      },
      {
        category: 'Swaps',
        property: 'Automatic upon deposit and withdraw',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Category',
        accessor: (properties: any) => {
          return <p className="mx-2 body-medium-14 font-semibold text-sm">{properties.category}</p>;
        },
      },
      {
        Header: 'Property',
        accessor: (properties: any) => {
          return <p className="body-medium-14 ">{properties.property}</p>;
        },
      },
    ],
    [data]
  );

  return (
    <div className="flex flex-col w-full">
      <DetailBaseTable
        options={{ columns, data }}
        sort
        currentPage={1}
        pageSize={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default Policies;
