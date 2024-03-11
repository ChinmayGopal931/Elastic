// Types
import { StakeAction } from './types';

// Components
import Divider from 'components/StrategyVisualizer/Divider';
import ActionHeader from './UI/ActionHeader';
import ProtocolBox from './UI/ProtocolBox';
import TokenBox from './UI/TokenBox';
import { Token } from 'lib/constants/tokens';

const StakeCard = (props: StakeAction) => {
  const { action, description, fromToken, toToken, protocol, rewardTokens } = props;

  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center w-full gap-3 ">
        <ActionHeader action={action} description={description} />
        <div className="flex flex-col items-center justify-center gap-3">
          {fromToken?.map((token: Token, index: number) => <TokenBox key={index} token={token} />)}
        </div>
        <Divider direction="down" />
        <ProtocolBox protocol={protocol} />
        <Divider direction="down" />
        <div className="flex flex-col items-center justify-center gap-3">
          {toToken?.map((token: Token, index: number) => <TokenBox key={index} token={token} />)}
        </div>
      </div>
    </div>
  );
};

export default StakeCard;
