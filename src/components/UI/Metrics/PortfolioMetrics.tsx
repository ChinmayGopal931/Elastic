// App
import { useMemo, useState } from 'react';

// Utils
import { formatValue } from 'lib/helpers/helpers';

// Components
import { DropdownProps } from 'components/UI/Dropdown/Dropdown';
import Loader from 'components/UI/Loader/Loader';
import Rechart from 'components/UI/Rechart/Rechart';
import TimeFrames from 'components/UI/Timeframes/TimeFrames';
import Trend from 'components/UI/Trend/Trend';

// Assets
import ArrowGreen from 'assets/arrow-right-green.svg';
import ArrowRed from 'assets/arrow-right-red.svg';
import Chart from 'assets/no-chart.svg';
import { Button } from '../Button/Button';
import { useHistoricalStats } from 'state/factorVault/hooks';
import { useBoundStore } from 'state/store';

interface IMetricsProps {
  title: string;
  dropdown: DropdownProps;
  price?: string;
  changePercentage?: number;
  aum?: string;
  apy?: string;
  isLoading?: boolean;
  metricData?: {
    date: any;
    aum: number;
    pnl: number;
  }[];
}

const PortfolioMetrics = (props: IMetricsProps) => {
  const [isPNL, setIsPNL] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(7);
  const currentVault = useBoundStore((state) => state.currentVault);

  const v2Params = () => {
    switch (selectedTimeFrame) {
      case 7:
        return '7d';
      case 30:
        return '30d';
      case 90:
        return '365d';
      default:
        return '7d';
    }
  };

  const { data: historicalData } = useHistoricalStats(currentVault?.address!, v2Params());

  const aumV2Data = props.isLoading
    ? []
    : historicalData
        ?.map((item: any) => ({
          date: item.timestamp,
          value: parseFloat(item.aum),
        }))
        .reverse();

  const apyV2Data = props.isLoading
    ? []
    : historicalData
        ?.map((item: any) => ({
          date: item.timestamp,
          value: parseFloat(item.apy),
        }))
        .reverse();

  const filteredData = useMemo(() => {
    // take the last x days based on the selected timeframe
    const data = props.metricData?.slice(-selectedTimeFrame);
    return data;
  }, [props.metricData, selectedTimeFrame]);

  const percentage = useMemo(() => {
    if (filteredData && filteredData.length > 1) {
      const last = filteredData[filteredData.length - 1];
      const first = filteredData[0];

      const change = last.pnl - first.pnl;
      const percentage = (change / first.pnl) * 100;
      return percentage;
    }
    return 0;
  }, [filteredData]);

  const sharePriceData = props.isLoading
    ? []
    : filteredData?.map((item: any) => ({
        date: item.date.substr(0, 10),
        value: item.pnl,
      }));

  const aumData = props.isLoading
    ? []
    : filteredData?.map((item: any) => ({
        date: item.date.substr(0, 10),
        value: item.aum,
      }));

  const data = props.dropdown?.selectedLabel === 'AUM' ? aumData : sharePriceData;
  const v2Data = props.dropdown?.selectedLabel === 'AUM' ? aumV2Data : apyV2Data;

  if (props.metricData?.length === 0) {
    return (
      <div className="flex flex-col mt-6 bg-ui_surface h-full rounded-xl p-2 pt-4 desktop:p-5 min-h-[300px] shadow-lg items-center justify-center">
        <img src={Chart} alt="" className="h-24 w-h-24 opacity-80" />
        <h2 className="mt-4 text-2xl leading-8 tracking-wide desktop:text-3xl gradiant-color">
          No Available data
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow p-2 pt-4 shadow-xl dark:shadow-lg dark:bg-ui_surface rounded-xl desktop:p-5">
      <div className="flex flex-col items-center justify-between tablet:flex-row gap-y-5">
        <h2 className="text-2xl desktop:text-3xl leading-8 tracking-wide desktop:min-w-[300px] font-medium heading">
          {props.title}
        </h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center shadow-xl dark:shadow-lg dark:bg-ui_surface rounded-l-lg rounded-r-lg w-[156px] ">
            <Button
              variant="chart-btn"
              className={`rounded-l-lg  ${
                isPNL
                  ? ' bg-body_light_dark text-white dark:bg-border dark:text-white font-bold'
                  : 'bg-white text-rich_black dark:bg-background dark:text-white font-bold'
              }`}
              onClick={() => {
                setIsPNL(true);
                props.dropdown.setSelectedOption('PNL');
              }}
            >
              PNL
            </Button>
            <Button
              variant="chart-btn"
              className={`rounded-r-lg ${
                !isPNL
                  ? ' bg-body_light_dark text-white dark:bg-border dark:text-white font-bold'
                  : 'bg-white text-rich_black dark:bg-background dark:text-white font-bold'
              }`}
              onClick={() => {
                setIsPNL(false);
                props.dropdown.setSelectedOption('AUM');
              }}
            >
              AUM
            </Button>
          </div>
        </div>
        <div className="flex justify-center w-full gap-y-5 desktop:items-center desktop:justify-end gap-x-2">
          <TimeFrames
            selectedDate={selectedTimeFrame}
            onSelectedDate={(date: number) => setSelectedTimeFrame(date)}
          />
        </div>
      </div>
      {!filteredData && props.isLoading ? (
        <div className="flex flex-1 w-full mt-4 ">
          <div className="m-auto desktop:h-[410px] flex items-center justify-center p-40">
            <Loader height={420} padding={150} />
          </div>
        </div>
      ) : props.price ? (
        <div className="flex flex-col">
          <div className="flex flex-row items-center desktop:justify-start">
            <div className="flex items-center justify-center p-4 mt-4 mr-2 dark:bg-ui_surface shadow-xl dark:shadow-sm rounded-2xl">
              <img src={percentage > 0 ? ArrowGreen : ArrowRed} alt="" className="w-6 h-6 " />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-end">
                <h6 className="pt-5 mr-2 text-6xl font-normal tracking-wider font-roboto_normal heading">
                  {props.dropdown.selectedLabel === 'AUM'
                    ? `${props?.aum ? formatValue(+props?.aum, false, 'USD') : 0}`
                    : `${
                        currentVault?.vaultType === 'genesis'
                          ? formatValue(+props?.price, false, 'USD')
                          : props.apy
                          ? props.apy
                          : 0
                      }`}
                </h6>
                <div className="pb-1 text-md">
                  {props.dropdown.selectedLabel !== 'AUM' &&
                    currentVault?.vaultType === 'genesis' && (
                      <Trend changePercentage={percentage} />
                    )}
                </div>
              </div>
              <div className="mt-1 ml-1 font-semibold gradiant-color">
                {props.dropdown.selectedLabel !== 'AUM' && currentVault?.vaultType !== 'genesis'
                  ? 'PNL'
                  : 'AUM'}
              </div>
            </div>
          </div>
          <Rechart
            data={data?.length ? data : v2Data}
            type={isPNL ? 'TVL' : 'Price'}
            height={500}
          />
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioMetrics;
