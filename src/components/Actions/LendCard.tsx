// Types
import { LendAction } from './types';

// Components
import Divider from 'components/StrategyVisualizer/Divider';
import ActionHeader from './UI/ActionHeader';
import ProtocolBox from './UI/ProtocolBox';
import TokenBox from './UI/TokenBox';

const LendCard = (props: LendAction) => {
  const { action, description, fromToken, toToken, protocol } = props;
  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center w-full gap-3 ">
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

export default LendCard;
