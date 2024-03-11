import React from 'react';
import Deposit from 'assets/actions/deposit.svg';
import Withdraw from 'assets/actions/withdraw.svg';
import Stake from 'assets/actions/stake.svg';
import Harvest from 'assets/actions/harvest.svg';
import Swap from 'assets/actions/swap.svg';
import Leverage from 'assets/actions/leverage.svg';
import Borrow from 'assets/actions/borrow.svg';
import Lend from 'assets/actions/lend.svg';
import Mint from 'assets/actions/mint.svg';
import LP from 'assets/actions/LP.svg';
import { SupportedActions } from 'lib/constants';

type ActionIconProps = {
  action: SupportedActions;
};

const ActionIcon = ({ action }: ActionIconProps) => {
  const createImage = () => {
    switch (action) {
      case 'deposit':
        return Deposit;
      case 'withdraw':
        return Withdraw;
      case 'harvest':
        return Harvest;
      case 'stake':
        return Stake;
      case 'swap':
        return Swap;
      case 'leverage':
        return Leverage;
      case 'borrow':
        return Borrow;
      case 'lend':
        return Lend;
      case 'mint':
        return Mint;
      case 'LP':
        return LP;
      default:
        break;
    }
  };

  function capitalizeFirstLetter(action: string) {
    return action.charAt(0).toUpperCase() + action.slice(1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-[60px] gap-1">
      <p className="body-medium-15">{capitalizeFirstLetter(action)}</p>
      <img src={createImage()} alt="" className="w-8 h-8" />
    </div>
  );
};

export default ActionIcon;
