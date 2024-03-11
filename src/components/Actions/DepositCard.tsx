import { DepositAction } from './types';
import ActionHeader from './UI/ActionHeader';
import Divider from 'components/StrategyVisualizer/Divider';
import ProtocolBox from './UI/ProtocolBox';
import TokenBox from './UI/TokenBox';
import { Token } from 'lib/constants/tokens';

const DepositCard = (props: DepositAction) => {
  const { action, description, fromToken, protocol, rewardTokens } = props;
  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center w-full gap-3 max-w-[350px]">
        <ActionHeader action={action} description={description} />
        <div className="flex flex-col items-center justify-center gap-3">
          {fromToken?.map((token: Token) => <TokenBox key={token?.symbol} token={token} />)}
        </div>
        <Divider direction="down" />
        <ProtocolBox protocol={protocol} />
        <Divider direction="down" />
        <div className="flex flex-col items-center justify-center gap-3">
          {rewardTokens?.map((token: Token) => <TokenBox key={token?.symbol} token={token} />)}
        </div>
      </div>
    </div>
  );
};

export default DepositCard;
