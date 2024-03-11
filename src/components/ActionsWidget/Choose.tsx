import React from 'react';

import Deposit from 'assets/studio/Icons/deposit.svg';
import Withdraw from 'assets/studio/Icons/withdraw.svg';
import Swap from 'assets/studio/Icons/swap.svg';
import Leverage from 'assets/studio/Icons/leverage.svg';
import Harvest from 'assets/studio/Icons/harvest.svg';
import Stake from 'assets/studio/Icons/stake.svg';
import Card from 'components/Studio/Card';
import { Button } from 'components/UI/Button/Button';

const OPTIONS = [
  {
    label: 'Deposit',
    icon: Deposit,
  },
  {
    label: 'Withdrawal',
    icon: Withdraw,
  },
  {
    label: 'Swap',
    icon: Swap,
  },
  {
    label: 'Leverage',
    icon: Leverage,
  },
  {
    label: 'Harvest',
    icon: Harvest,
  },
  {
    label: 'Stake',
    icon: Stake,
  },
];

interface Props {
  setAction: (action: string) => void;
  action: string;
}

const Choose = ({ action, setAction }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 my-4">
        {OPTIONS.map((item) => {
          return <Card icon={item.icon} title={item.label} onClick={() => setAction(item.label)} />;
        })}
      </div>
    </div>
  );
};

export default Choose;
