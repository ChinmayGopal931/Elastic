import { Cell, Label, Pie, PieChart, Tooltip } from 'recharts';
import CustomTooltip from 'components/UI/Rechart/CustomTooltip';
import { AllocationBaseTable } from 'components/VaultDetails/AllocationTable';
import { COLORS, formatValue } from 'lib/helpers/helpers';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import ListItem from 'components/ListItem';
import { useMemo } from 'react';
import { AssetsAndParams } from 'types/VaultForm';
import { VaultStat } from 'state/vault/types';

interface Props {
  data: AssetsAndParams;
}

function ChoosenAssets({ data }: Props) {
  const chartColumn = useMemo(
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
        /* TODO: After getting the proper design, change this to allocation if needed */
        accessor: (properties: any) => {
          return <p className="heading text-sm ">{formatValue(properties?.amount, true, '')}</p>;
        },
      },
    ],
    []
  );

  return (
    <div className="flex flex-col bg-white dark:bg-ui_surface p-6 rounded-lg w-full">
      <h2 className="text-xl mb-4 text-center desktop:text-left leading-6 tracking-wider font-semibold heading">
        Chosen Assets
      </h2>
      <div className="flex mobile:flex-col desktop:flex-row mobile:gap-10 items-center">
        <div className="w-full">
          {data.assets.map((item) => {
            return (
              <ListItem
                left={
                  <div className="flex items-center">
                    <SymbolLogo symbol="FCTRLOGO" height={30} width={30} />
                    <p className="px-2 text-heading_light dark:text-white">{item.name}</p>
                    <p className="text-xs muted-text">{item.symbol}</p>
                  </div>
                }
                right={
                  <div className="gradiant-border-tag">
                    <div className="min-w-[14px] text-xs text-center bg-white dark:bg-ui_surface heading py-1 px-5 rounded-lg flex flex-row justify-evenly items-center">
                      {item.amount ? item.amount : '0'}%
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-end justify-center">
            <PieChart width={200} height={175}>
              <Pie
                data={data.assets}
                startAngle={360}
                endAngle={0}
                innerRadius={65}
                outerRadius={80}
                paddingAngle={-10}
                dataKey="amount"
                textAnchor="middle"
                cornerRadius={10}
              >
                {data.assets.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
                <Label position="center" fill="#FCFCFC" fontSize={16} />
              </Pie>
              <Tooltip content={<CustomTooltip type={'Percentage'} />} />
            </PieChart>
          </div>
          <div className="flex-col">
            <p className="text-heading_dark text-xl tracking-wider">
              <AllocationBaseTable
                tableName="Assets"
                // @ts-ignore
                options={{ columns: chartColumn, data: data.assets }}
                data={data.assets}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosenAssets;
