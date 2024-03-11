// App
import { useMemo } from 'react';
import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';

// Lib
import { COLORS, formatValue } from 'lib/helpers/helpers';
import { VaultStat } from 'state/vault/types';

// Components
import CustomTooltip from 'components/UI/Rechart/CustomTooltip';
import { AllocationBaseTable } from 'components/VaultDetails/AllocationTable';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';

// Styles
import 'react-tooltip/dist/react-tooltip.css';
import { useDarkMode } from 'usehooks-ts';

export interface AssetAllocationProps {
  assets: any;
  totalAmount: any;
}

const AssetAllocation = ({ assets, totalAmount }: AssetAllocationProps) => {
  const { isDarkMode } = useDarkMode();
  const columns = useMemo(
    () => [
      {
        Header: 'Asset',
        accessor: (properties: VaultStat) => {
          return (
            <div className="flex flex-row items-end">
              <SymbolLogo symbol={properties?.symbol} height={20} width={20} />
            </div>
          );
        },
      },
      {
        Header: 'Allocation',
        accessor: (properties: VaultStat) => {
          return (
            <p className="heading text-sm ">{formatValue(properties?.allocation, true, '')}</p>
          );
        },
      },
    ],
    []
  );

  return (
    <div className="p-6 desktop:ml-6 bg-white dark:bg-ui_surface rounded-lg shadow-xl dark:shadow-lg  justify-center desktop:w-[334px] w-full">
      <p className="text-xl heading justify-center mb-4 text-center">Allocation</p>

      {assets && assets.length > 0 ? (
        <div className="flex flex-end justify-center">
          <PieChart width={200} height={175}>
            <Pie
              data={assets}
              startAngle={360}
              endAngle={0}
              innerRadius={65}
              outerRadius={80}
              paddingAngle={-10}
              dataKey="value"
              textAnchor="middle"
              cornerRadius={10}
            >
              {assets.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
              ))}
              <Label
                value={totalAmount}
                position="center"
                fill={isDarkMode ? '#FCFCFC' : '#010328'}
                fontSize={16}
                fontWeight={600}
              />
            </Pie>
            <Tooltip content={<CustomTooltip type={'Percentage'} />} />
          </PieChart>
        </div>
      ) : (
        <div role="status" className="max-w-sm animate-pulse ">
          <div className="h-20 bg-gray-900 rounded-full dark:bg-gray-900 w-20"></div>
        </div>
      )}

      <div className="flex-col mt-4">
        <p className="heading text-xl tracking-wider mt-0">
          <AllocationBaseTable
            tableName="Assets"
            options={{ columns: columns, data: assets }}
            data={assets}
          />
        </p>
      </div>
    </div>
  );
};

export default AssetAllocation;
