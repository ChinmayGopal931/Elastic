import downArrow from 'assets/downtrend.svg';
import upArrow from 'assets/uptrend.svg';
import { formatValue } from 'lib/helpers/helpers';

export interface TrendProps {
  changePercentage: number;
  isArrow?: boolean;
}

const Trend = (props: TrendProps) => {
  const textColor =
    +props.changePercentage > 0
      ? 'text-success tracking-wider text-[14px] font-bold'
      : 'text-error tracking-wide text-[14px] font-bold';

  return (
    <div className="flex flex-row font-bold">
      <p className={+props.changePercentage !== 0 ? textColor : 'tracking-wider'}>
        {formatValue(props?.changePercentage, true, '')}
      </p>
    </div>
  );
};

export default Trend;
