import { BigDecimal } from 'lib/helpers/BigDecimal';
import LoadingText from '../LoadingText/LoadingText';

interface SharesConverterProps {
  sharePrice: BigDecimal;
  symbol: string;
  isLoading?: boolean;
}
const SharesConverter = (props: SharesConverterProps) => {
  if (typeof props.sharePrice === 'string') return null;
  if (props.sharePrice.exact.toNumber() === 0 && !props.isLoading) return null;
  return (
    <div className="flex self-center py-2">
      <div className="cursor-pointer text-body_light_dark">
        1 Share ={' '}
        {props.isLoading ? (
          <LoadingText />
        ) : (
          `${props.sharePrice?.toFixed(3).toString()} ${props.symbol} ~   `
        )}
      </div>
    </div>
  );
};

export default SharesConverter;
