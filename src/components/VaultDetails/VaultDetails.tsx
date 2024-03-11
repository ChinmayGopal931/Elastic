// App
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

// Components
import Overview from './Overview/Overview';
import Assets from './Assets/Assets';
import Policies from './Policies/Policies';
import Header from './Header';
import Discloser from 'components/UI/Discloser/Discloser';
import Risk from 'components/VaultDetails/Risk/Risk';
import { useBoundStore } from 'state/store';

export type Tab = {
  id: string;
  title: string;
  isActive: boolean;
  component: JSX.Element;
};

export interface VaultDetailsProps {
  tabs: Tab[];
}

const VaultDetails = (props: VaultDetailsProps) => {
  const isMobileView = useMediaQuery('(max-width:1000px)');
  const [currentTab, setCurrentTab] = useState(props.tabs[0]);
  const currentVault = useBoundStore((state) => state.currentVault);

  const createContent = () => {
    switch (currentTab.id) {
      case 'overview':
        return <Overview />;
      case 'assets':
        return <Assets />;
      case 'polices':
        if (currentVault?.vaultType === 'genesis') {
          return <Policies />;
        }
        return null;
      case 'risk':
        return <Risk />;
      default:
        return currentTab.component;
    }
  };

  return (
    <div className="flex flex-col items-start justify-start my-4">
      {isMobileView ? (
        <div className="w-full">
          {props.tabs?.map((tab) => {
            return <Discloser key={tab.id} tab={tab} />;
          })}
        </div>
      ) : (
        <>
          <Header currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={props.tabs} />
          <div className="flex flex-col flex-grow justify-start items-start desktop:min-h-[300px] w-full">
            {createContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default VaultDetails;
