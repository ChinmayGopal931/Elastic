import ActionHeader from './UI/ActionHeader';
import ProtocolIcon from 'components/UI/Icons/ProtocolIcon';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import Divider from 'components/StrategyVisualizer/Divider';
import { SwapAction } from './types';
import TokenBox from './UI/TokenBox';
import ProtocolBox from './UI/ProtocolBox';

const SwapCard = (props: SwapAction) => {
  const { action, description, fromToken, toToken, protocol } = props;
  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center w-full gap-3">
        <ActionHeader action={action} description={description} />
        <TokenBox token={fromToken} />
        <Divider direction="down" />
        <ProtocolBox protocol={protocol} />
        <Divider direction="down" />
        <TokenBox token={toToken} />
      </div>
    </div>
  );
};

export default SwapCard;
