import { WithdrawAction } from './types';
import ProtocolIcon from 'components/UI/Icons/ProtocolIcon';
import ActionHeader from './UI/ActionHeader';
import Divider from 'components/StrategyVisualizer/Divider';
import ProtocolBox from './UI/ProtocolBox';
import AmountBox from './UI/AmountBox';

const WithdrawCard = (props: WithdrawAction) => {
  const { action, description, protocol, amount, symbol, vaultName } = props;
  return (
    <div className="flex w-full pb-4">
      <div className="flex flex-col justify-between items-center w-full gap-3 max-w-[350px]">
        <ActionHeader action={action} description={description} />
        <ProtocolBox protocol={protocol} />
        <Divider direction="down" />
        <div className="flex flex-col items-center gap-2 p-2 ring-2 rounded-xl">
          <p className="body-medium-14">{vaultName}</p>
        </div>
        <Divider direction="down" />
        <AmountBox amount={amount} symbol={symbol} />
      </div>
    </div>
  );
};

export default WithdrawCard;
