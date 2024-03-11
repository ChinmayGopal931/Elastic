// App
import { useState } from 'react';
import { useNetwork } from 'wagmi';
import { arbitrum } from 'wagmi/chains';

// Utils
import { protocols, supportedChains } from 'lib/constants';
import { supportedTokens } from 'lib/constants/tokens';

// Vaults
import { INDEX_VAULTS_ARR } from 'vaults/index/index';

// Components
import Header from './Header';
import SearchVaults from 'components/Discover/SearchVaults/SearchVaults';

const DefaultView = (props: any) => {
  const { currentTab } = props;
  const { chain } = useNetwork();
  const chainId = supportedChains[chain?.id as number];
  const tokens = supportedTokens[chainId?.id || arbitrum.id];

  const getVaults = () => {
    switch (currentTab.id) {
      case 'index':
        return INDEX_VAULTS_ARR[chainId?.id || arbitrum.id];
      default:
        return INDEX_VAULTS_ARR[chainId?.id || arbitrum.id];
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-start items-start desktop:min-h-[300px] w-full">
      <div className="flex flex-row w-full">
        <SearchVaults vaults={getVaults()} tokens={tokens} protocols={protocols} />
      </div>
    </div>
  );
};

const VaultsFilter = () => {
  const tabs = [
    { id: 'yield', title: 'Yield Vaults' },
    { id: 'index', title: 'Index Vaults' },
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex flex-col flex-grow shadow-xl dark:shadow-lg dark:bg-ui_surface rounded-xl ">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs} />
        <DefaultView currentTab={currentTab} />
      </div>
    </div>
  );
};

export default VaultsFilter;
