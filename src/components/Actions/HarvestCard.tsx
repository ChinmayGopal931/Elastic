import ActionHeader from './UI/ActionHeader';
import { HarvestAction } from './types';
import Divider from 'components/StrategyVisualizer/Divider';
import TokenBox from './UI/TokenBox';
import ProtocolBox from './UI/ProtocolBox';
import FrequencyBox from './UI/FrequencyBox';
import { Token } from 'lib/constants/tokens';

const HarvestCard = (props: HarvestAction) => {
  const { action, description, rewardTokens, protocol, frequency = '3x daily' } = props;

  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center  gap-3 w-[350px]">
        <ActionHeader action={action} description={description} />
        <ProtocolBox protocol={protocol} />
        <FrequencyBox frequency={frequency} />
        <Divider direction="down" />
        <div className="flex flex-col items-center justify-center gap-3">
          {rewardTokens?.map((token: Token) => <TokenBox key={token?.symbol} token={token} />)}
        </div>
      </div>
    </div>
  );
};

export default HarvestCard;
