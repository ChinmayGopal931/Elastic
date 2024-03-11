import React from 'react';
import AddBlock from './Add';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Swap from './Swap';
import Leverage from './Leverage';
import Stake from './Stake';

interface Props {
  type?: string;
}

const DataBlock = ({ type }: Props) => {
  const getContent = () => {
    switch (type) {
      case 'select-block':
        return <AddBlock onClick={() => {}} />;
        break;
      case 'deposit':
        return <Deposit />;
        break;
      case 'withdraw':
        return <Withdraw />;
        break;
      case 'swap':
        return <Swap />;
        break;
      case 'stake':
        return <Stake />;
        break;
      case 'leverage':
        return <Leverage />;
        break;
      default:
        return <Stake />;
        break;
    }
  };

  return <div className="w-full">{getContent()}</div>;
};

export default DataBlock;
