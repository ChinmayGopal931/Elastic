import { useEffect, useState } from 'react';

// Utils
import { formatValue } from 'lib/helpers/helpers';
import ReactGA from 'react-ga4';

// Hooks
import { useBoundStore } from 'state/store';
import { useNetwork } from 'wagmi';

// Components
import LayoutHeader from 'components/UI/LayoutHeader/LayoutHeader';

import Swap from 'components/ActionsWidget/Swap';
import Staking from 'components/ActionsWidget/Staking';
import VaultMetrics from 'components/UI/Metrics/VaultMetrics';
import { getLst, getTokenList } from 'lib/constants/utils';
import TabsHeader from 'components/TabsWidget/TabsHeader';
import { useNavigate } from 'react-router-dom';
import Cross from 'components/ActionsWidget/Cross';

const Discover = () => {
  const [allTokens, setAllTokens] = useState([]);
  const [lst, setLst] = useState<[]>();
  const [ethLst, setEthtLst] = useState<[]>();
  const [l2Lst, setL2Lst] = useState<[]>();

  const { chain } = useNetwork();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'Discover page',
    });
  }, [chain?.id]);

  const navigate = useNavigate();

  useEffect(() => {
    // Define your asynchronous function
    const fetchData = async (chain: number) => {
      try {
        // Your asynchronous logic goes here
        const result = await getTokenList(chain);

        setAllTokens(Object.values(result));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the asynchronous function only once when the component mounts
    if (allTokens.length == 0 && chain?.id) fetchData(chain?.id);

    // The empty dependency array [] ensures that this effect runs only once.
  }, []);

  const [values, setValues] = useState({
    time: 0,
    percentage: 0,
    autoDeposit: false,
  });
  const [inputToken, setInputToken] = useState('ETH');
  const [outputToken, setOutputToken] = useState('ETH');

  const [selectedOption, setSelectedOption] = useState('ETH');
  const [isLoadingMetric, setIsLoadingMetric] = useState(false);

  const handleDropdownChange = (option: string) => {
    setSelectedOption(option);
  };
  const [dropdownOptions, setDropdownOptions] = useState([
    {
      title: 'TVL',
    },
  ]);

  const [metricsTheme, setMetricsTheme] = useState({
    type: 'metrics',
  });

  const [currentTab, setCurrentTab] = useState<String>('Swap');

  let b = [
    {
      apy: 3.98,
      tokenAddress: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      tokenDecimals: 18,
      tokenName: 'Wrapped ETH',
      tokenSymbol: 'wstETH',
    },
  ];

  let test = lst?.length ? lst : b;

  return (
    <div className="gap-6 page-container ">
      <div className={` flex flex-col justify-center items-center `}>
        <div className={` flex flex-col justify-center items-center mb-10`}>
          {/* <Staking /> */}

          {currentTab == 'Swap' && (
            <div className={`mt-8`}>
              <Swap
                setTime={(time) => setValues({ ...values, time })}
                setAutoDeposit={(autoDeposit) => setValues({ ...values, autoDeposit })}
                setPercentage={(percentage) => setValues({ ...values, percentage })}
                percentage={values.percentage}
                time={values.time}
                autoDeposit={values.autoDeposit}
                allTokens={allTokens || []}
                setInputToken={setInputToken}
                setOutputToken={setOutputToken}
                inputToken={inputToken}
                outputToken={outputToken}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Discover;
