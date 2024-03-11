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
import { useBoundStore } from 'state/store';

interface IMetricsProps {
  title: string;
  dropdown: DropdownProps;
  price?: string;
  changePercentage?: number;
  tvl?: string;
  apy?: string;
  isLoading?: boolean;
  metricData?: {
    date: any;
    value: string;
  }[];
}

const VaultMetrics = (props: IMetricsProps) => {
  const [isTVL, setIsTVL] = useState(false);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(7);
  const currentVault = useBoundStore((state) => state.currentVault);

  // const filteredData = useMemo(() => {
  //   // take the last x days based on the selected timeframe
  //   const data = props.metricData?.slice(-selectedTimeFrame);
  //   return data;
  // }, [props.metricData, selectedTimeFrame]);

  const filteredData = props.metricData;

  const data = props.metricData;

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
        <h2 className="text-md ">{props.title}</h2>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center shadow-xl dark:shadow-lg dark:bg-ui_surface rounded-l-lg rounded-r-lg w-[156px] ">
            {/* <Button
              variant="chart-btn"
              className={`rounded-r-lg ${
                isTVL
                  ? ' bg-body_light_dark text-white dark:bg-border dark:text-white font-bold'
                  : 'bg-white text-rich_black dark:bg-background dark:text-white font-bold'
              }`}
              onClick={() => {
                setIsTVL(true);
                props.dropdown.setSelectedOption('TVL');
              }}
            >
              TVL
            </Button> */}
          </div>
        </div>
        {/* <div className="flex justify-center w-full gap-y-5 desktop:items-center desktop:justify-end gap-x-2">
          <TimeFrames
            selectedDate={selectedTimeFrame}
            onSelectedDate={(date: number) => setSelectedTimeFrame(date)}
          />
        </div> */}
      </div>
      {!filteredData && props.isLoading ? (
        <div className="flex flex-1 w-full mt-4 ">
          <div className="m-auto desktop:h-[410px] flex items-center justify-center p-40">
            <Loader height={420} padding={150} />
          </div>
        </div>
      ) : props.price ? (
        <div className="flex flex-col">
          <Rechart data={data} type={isTVL ? 'TVL' : 'Price'} height={500} />
        </div>
      ) : null}
    </div>
  );
};

export default VaultMetrics;
