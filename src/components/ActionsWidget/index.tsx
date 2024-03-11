import React, { useState } from 'react';
import None from './None';
import TabsHeader from '../TabsWidget/TabsHeader';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Swap from './Swap';
import Leverage from './Leverage';
import Borrow from './Borrow';
import Compound from './Compound';
import Repay from './Repay';
import Lending from './Lending';
import Harvest from './Harvest';
import YieldFarming from './YieldFarming';
import Staking from './Staking';
import LiquidityProvision from './LiquidityProvision';
import Insurance from './Insurance';
import StopLoss from './StopLoss';
import TakeProfit from './TakeProfit';
import PerformanceBasedShifts from './PerformanceBasedShits';
import Rebalance from './Rebalance';
import Minting from './Minting';
import Burning from './Burning';
import Choose from './Choose';

interface Props {
  type: string;
  setAction: (action: string) => void;
}

function ActionWidget(props: Props) {
  const [values, setValues] = useState({
    time: 0,
    percentage: 0,
    autoDeposit: false,
  });

  const getContent = () => {
    switch (props.type) {
      case 'None':
        return <None />;
        break;
      case 'Choose':
        return <Choose action={props.type} setAction={props.setAction} />;
        break;
      case 'Deposit':
        return (
          <Deposit
            setTime={(time) => setValues({ ...values, time })}
            setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
            time={values.time}
            autoDeposit={values.autoDeposit}
          />
        );
        break;
      case 'Withdraw':
        return (
          <Withdraw
            setTime={(time) => setValues({ ...values, time })}
            setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
            setPercentage={(percentage) => setValues({ ...values, percentage })}
            percentage={values.percentage}
            time={values.time}
            autoDeposit={values.autoDeposit}
          />
        );
        break;
      case 'Swap':
        return (
          <Swap
            setTime={(time) => setValues({ ...values, time })}
            setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
            setPercentage={(percentage) => setValues({ ...values, percentage })}
            percentage={values.percentage}
            time={values.time}
            autoDeposit={values.autoDeposit}
          />
        );
        break;
      case 'Leverage':
        return (
          <Leverage
            setTime={(time) => setValues({ ...values, time })}
            setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
            setPercentage={(percentage) => setValues({ ...values, percentage })}
            percentage={values.percentage}
            time={values.time}
            autoDeposit={values.autoDeposit}
          />
        );
        break;
      case 'Borrow':
        return (
          <Borrow
            setTime={(time) => setValues({ ...values, time })}
            setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
            setPercentage={(percentage) => setValues({ ...values, percentage })}
            percentage={values.percentage}
            time={values.time}
            autoDeposit={values.autoDeposit}
          />
        );
        break;
      case 'Compound':
        return <Compound />;
        break;
      case 'Repay':
        return <Repay />;
        break;
      case 'Lending':
        return <Lending />;
        break;
      case 'Harvest':
        return <Harvest />;
        break;
      case 'Farming':
        return <YieldFarming />;
        break;
      case 'Staking':
        return <Staking />;
        break;
      case 'Liquidity Provision':
        return <LiquidityProvision />;
        break;
      case 'Insurance':
        return <Insurance />;
        break;
      case 'Stop Loss':
        return <StopLoss />;
        break;
      case 'Take Profit':
        return <TakeProfit />;
        break;
      case 'Performance Based Shifts':
        return <PerformanceBasedShifts />;
        break;
      case 'Rebalance':
        return <Rebalance />;
        break;
      case 'Minting':
        return <Minting />;
        break;
      case 'Burning':
        return <Burning />;
        break;
      default:
        return <None />;
        break;
    }
  };
  return (
    <div
      className={`w-full flex flex-col justify-center items-center py-6 px-4 shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface rounded-xl relative z-10 desktop:w-full`}
    >
      {props.type !== 'none' && (
        <div className="flex flex-row w-full justify-center gap-2 mb-4">
          <div
            className={`w-6/12 h-[44px] font-bold text-center rounded-lg border-none px-4 py-3 cursor-pointer tracking-widest gradiant-color text-lg font-roboto_normal tracking-[0.75px] transition-all duration-200`}
          >
            {props.type}
            <div className="w-full bg-border flex items-center justify-center h-[4px] mt-3 rounded-sm">
              <div className="w-5/12 bg-primary_brand_01 h-[4px]  rounded-sm" />
            </div>
          </div>
        </div>
      )}
      {getContent()}
    </div>
  );
}

export default ActionWidget;
