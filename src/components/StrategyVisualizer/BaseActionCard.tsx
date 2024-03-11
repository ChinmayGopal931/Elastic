// App
import { useState } from 'react';
import { motion } from 'framer-motion';
import { SupportedActions } from 'lib/constants';

// Components
import ActionIcon from '../UI/Icons/ActionIcon';
import DepositCard from 'components/Actions/DepositCard';
import { Action } from 'components/Actions/types';
import StakeCard from 'components/Actions/StakeCard';
import HarvestCard from 'components/Actions/HarvestCard';
import SwapCard from 'components/Actions/SwapCard';
import LeverageCard from 'components/Actions/LeverageCard';
import BorrowCard from 'components/Actions/BorrowCard';
import LendCard from 'components/Actions/LendCard';
import LPCard from 'components/Actions/LPCard';
import MintCard from 'components/Actions/MintCard';
import WithdrawCard from 'components/Actions/WithdrawCard';

interface Props {
  action: Action;
  isActive?: boolean;
}

function BaseActionCard(props: Props) {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const activeStyles = props.isActive ? 'bg-blue-200 shadow-lg' : '';

  const handleOpenCard = () => {
    setIsCardOpen(!isCardOpen);
  };

  const generateActionCard = (action: Action) => {
    switch (action.action) {
      case SupportedActions.STAKE:
        return <StakeCard {...action} />;
      case SupportedActions.DEPOSIT:
        return <DepositCard {...action} />;
      case SupportedActions.HARVEST:
        return <HarvestCard {...action} />;
      case SupportedActions.SWAP:
        return <SwapCard {...action} />;
      case SupportedActions.LEVERAGE:
        return <LeverageCard {...action} />;
      case SupportedActions.BORROW:
        return <BorrowCard {...action} />;
      case SupportedActions.LEND:
        return <LendCard {...action} />;
      case SupportedActions.LP:
        return <LPCard {...action} />;
      case SupportedActions.MINT:
        return <MintCard {...action} />;
      case SupportedActions.WITHDRAW:
        return <WithdrawCard {...action} />;
      default:
        return null;
    }
  };

  return (
    <motion.div layout className={activeStyles} onClick={handleOpenCard}>
      {isCardOpen ? (
        <div className="flex flex-col cursor-pointer ring-2 p-4 shadow-xl dark:shadow-lg rounded-xl items-center justify-center gap-2">
          <ActionIcon action={props.action.action} />
        </div>
      ) : (
        <div className="bg-white dark:bg-ui_surface rounded-xl ring-2 flex items-center gap-5 p-3 justify-center shadow-xl dark:shadow-lg cursor-pointer w-[330px]">
          <div className="flex items-center flex-col gap-2 w-full justify-center">
            {generateActionCard(props.action)}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default BaseActionCard;
