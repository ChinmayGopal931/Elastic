import { useState } from 'react';

// Components
import Delegate from 'components/Staking/Delegate/Delegate';
import Quit from 'components/Staking/Quit/Quit';
import Stake from 'components/Staking/Stake/Stake';
import Deposit from 'components/Vault/Deposit/Deposit';
import DepositFV from 'components/Vault/Deposit/DepositFV';
import Withdraw from 'components/Vault/Withdraw/Withdraw';
import WithdrawFV from 'components/Vault/Withdraw/WithdrawFV';
import { useBoundStore } from 'state/store';
import TabsHeader from './TabsHeader';
import Unstake from 'components/Staking/Unstake/Unstake';

type Tabs = {
  id: string;
  title: string;
  isActive: boolean;
};
interface TabsWidgetProps {
  tabs: Tabs[];
}

const TabsWidget = (props: TabsWidgetProps) => {
  const [currentTab, setCurrentTab] = useState(props.tabs[0]);
  const currentVault = useBoundStore((state) => state.currentVault);

  const createContent = () => {
    switch (currentTab.id) {
      case 'stake':
        return <Stake />;
      case 'quit':
        return <Quit />;
      case 'delegate':
        return <Delegate />;
      case 'unstake':
        return <Unstake />;
      case 'deposit':
        if (currentVault?.vaultType !== 'genesis') {
          return <DepositFV />;
        }
        return <Deposit />;
      case 'deposit-vault':
        return <Deposit />;
      case 'withdraw-vault':
        if (currentVault?.vaultType !== 'genesis') {
          return <WithdrawFV />;
        }
        return <Withdraw />;
      default:
        return <Deposit />;
    }
  };

  return (
    <div
      className={`w-full flex flex-col justify-center items-center py-6 px-4 shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface rounded-xl relative z-10 desktop:w-[432px]  ${
        currentVault?.vaultType !== 'genesis' ? 'h-fit' : 'h-[670px]'
      }`}
    >
      <TabsHeader currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={props.tabs} />
      <div className="flex flex-col items-center justify-start flex-grow w-full">
        {createContent()}
      </div>
    </div>
  );
};

export default TabsWidget;
