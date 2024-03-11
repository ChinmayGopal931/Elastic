// App
import { useMemo } from 'react';

// Hooks
import { DetailBaseTable } from 'components/UI/BaseTable/BaseTable';
import { useBoundStore } from 'state/store';

// Components
import HoverableTooltip from 'components/HoverableTooltip';
import { RiskParams } from 'state/vault/types';

import Link from 'assets/icons/external.svg';

const Risk = () => {
  const currentVault = useBoundStore((state) => state.currentVault);
  const data: Array<RiskParams> = currentVault?.parameters?.risk || [];

  const columns = useMemo(
    () => [
      {
        Header: 'Parameter',
        accessor: (properties: RiskParams) => {
          return (
            <div className="flex flex-row items-center">
              <p className="text-sm body-medium-15 ">{properties.name}</p>
              <HoverableTooltip tooltipContent={properties.tooltip} key={properties.name} />
            </div>
          );
        },
      },
      {
        Header: 'Value',
        accessor: (properties: RiskParams) => {
          if (properties.name === 'Audit Link')
            return (
              <div className="flex flex-row items-center gap-2">
                <a
                  href={properties.value}
                  className={`font-semibold leading-5 tracking-wide font-open_sans text-sm tablet:text-md underline text-gray-500`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Audit
                </a>
                <img src={Link} alt="" className="" />
              </div>
            );
          return <p className="text-sm body-medium-15 ">{properties.value}</p>;
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

export default Risk;
