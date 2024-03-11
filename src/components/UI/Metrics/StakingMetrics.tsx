// App
import { useMemo, useState } from 'react';
import config from 'config';

// Utils
import { formatValue } from 'lib/helpers/helpers';
import { HexAddress } from 'lib/constants';

// Hooks
import { useBoundStore } from 'state/store';

// Components
import Dropdown, { DropdownProps } from 'components/UI/Dropdown/Dropdown';
import Rechart from 'components/UI/Rechart/Rechart';
import TimeFrames from 'components/UI/Timeframes/TimeFrames';
import Trend from 'components/UI/Trend/Trend';
import Loader from 'components/UI/Loader/Loader';

// Assets
import ArrowGreen from 'assets/arrow-right-green.svg';
import ArrowRed from 'assets/arrow-right-red.svg';
import Chart from 'assets/no-chart.svg';

interface IMetricsProps {
  title: string;
  dropdown: DropdownProps;
  price?: string;
  changePercentage?: number;
  tvl?: string;
}

const StakingMetrics = (props: IMetricsProps) => {
  const [isTVL, setIsTVL] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(7);
  const currentVaultAddress = useBoundStore((state) => state.currentVault);

  //dummy data
  const metricData: any = [];
  const isLoading = false;

  const filteredData = useMemo(() => {
    // take the last x days based on the selected timeframe
    const data = metricData?.slice(-selectedTimeFrame);
    return data;
  }, [metricData, selectedTimeFrame]);

  const percentage = useMemo(() => {
    if (filteredData && filteredData.length > 1) {
      const last = filteredData[filteredData.length - 1];
      const first = filteredData[0];

      const change = last.pricePerShare - first.pricePerShare;
      const percentage = (change / first.pricePerShare) * 100;
      return percentage;
    }
    return 0;
  }, [filteredData]);

  const sharePriceData = isLoading
    ? []
    : filteredData?.map((item: any) => ({
        date: item.date.substr(0, 10),
        value: item.pricePerShare,
      }));

  if (metricData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[683px] p-2 pt-4 shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface rounded-xl desktop:p-5">
        <img src={Chart} alt="" className="h-24 w-h-24 opacity-80" />
        <h2 className="mt-4 text-2xl leading-8 tracking-wide desktop:text-3xl gradiant-color">
          No Available Data
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full p-2 pt-4 mt-6 shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface rounded-xl desktop:p-5">
      <div className="flex flex-col items-center justify-between tablet:flex-row gap-y-5">
        <h2 className="text-2xl desktop:text-3xl leading-8 tracking-wide desktop:min-w-[300px] font-medium">
          {props.title}
        </h2>
        <div className="flex justify-center w-full gap-y-5 desktop:items-center desktop:justify-end gap-x-2">
          <TimeFrames
            selectedDate={selectedTimeFrame}
            onSelectedDate={(date: number) => setSelectedTimeFrame(date)}
          />
        </div>
      </div>
      {!filteredData && isLoading ? (
        <div className="flex flex-1 w-full mt-4 ">
          <div className="m-auto desktop:h-[410px] flex items-center justify-center p-40">
            <Loader height={420} padding={150} />
          </div>
        </div>
      ) : props.price ? (
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-center desktop:justify-start">
            <div className="flex items-center justify-center p-4 mt-4 mr-2 dark:bg-ui_surface rounded-2xl">
              <img src={percentage > 0 ? ArrowGreen : ArrowRed} alt="" className="w-6 h-6 " />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row items-end">
                <h6 className="pt-5 mr-2 text-6xl font-normal tracking-wider font-roboto_normal heading">
                  {props.dropdown.selectedLabel === 'TVL'
                    ? `${props?.tvl ? formatValue(+props?.tvl, false, 'USD') : 0}`
                    : `${props?.price ? formatValue(+props?.price, false, 'USD') : 0}`}
                </h6>
                <div className="pb-1 text-md">
                  {props.dropdown.selectedLabel !== 'TVL' && (
                    <Trend changePercentage={percentage} />
                  )}
                </div>
              </div>
              <div className="mt-1 ml-1 font-semibold gradiant-color">
                {props.dropdown.selectedLabel}
              </div>
            </div>
          </div>
          <Rechart data={sharePriceData} height={500} />
        </div>
      ) : (
        <Rechart data={sharePriceData} height={500} />
      )}
    </div>
  );
};

export default StakingMetrics;
