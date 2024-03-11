import CurrencyInput from 'components/UI/CurrencyInput/CurrencyInput';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import AssetIcon from 'assets/main-logo-blue.svg';
import SwapRing from 'assets/studio/SwapRing.svg';
import { Button } from 'components/UI/Button/Button';
import { useEffect, useState } from 'react';

import { HexAddress, getQuoteOrder, placeOrder } from 'lib/constants/utils';
import { BigNumber, ethers } from 'ethers';

import { useTokenApproval } from 'hooks/useTokenApproval';
import { useAccount } from 'wagmi';
import { useGetTokenAllowance } from 'hooks/useGetTokenAllowance';
import { ApproveButton } from 'components/UI/ApproveButton/ApproveButton';
import TradingViewChart from 'components/ActionsWidget/TradingView';
import axios from 'axios';

interface Props {
  time: number;
  percentage: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  setAutoDeposit: (value: boolean) => void;
  setPercentage: (value: number) => void;
  allTokens: any;
  setInputToken: (value: any) => void;
  inputToken: any;
  setOutputToken: (value: any) => void;
  outputToken: any;
}

const oneInchv5 = '0x1111111254EEB25477B68fb85Ed929f73A960582';

const Swap = (props: Props) => {
  const currencyProp = {
    icon: AssetIcon,
    balance: BigDecimal.ZERO,
    inputValue: '00.00',
    currentAsset: {
      name: 'DAI',
      symbol: 'DAI',
      logo: 'DAI',
      decimals: 18,
      address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    },
    isDisabled: false,
    symbol: 'DAI',
    setInputValue: () => {},
    allTokens: props.allTokens,
    setToken: props.setInputToken,
    token: 'DAI',
  };

  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, address } = useAccount();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState<any>(null);

  const [needToApprove, setNeedToApprove] = useState(false);
  const [depositAmount, setDepositAmount] = useState<BigNumber>();

  const [isLoadingMetric, setIsLoadingMetric] = useState(false);
  const [orderStatus, setOrderStatus] = useState('');
  const [auctionPrice, setAuctionPrice] = useState('');

  const [quoteAmount, setQuoteAmount] = useState<String>();

  const handleDropdownChange = (option: string) => {
    //setSelectedOption(option);
  };
  const [dropdownOptions, setDropdownOptions] = useState([
    {
      title: 'TVL',
    },
  ]);

  const [metricsTheme, setMetricsTheme] = useState({
    type: 'metrics',
  });

  const [toToke, setToToke] = useState<String>();
  const metricData = data?.presets
    ? [
        {
          date: Date.now(),
          value: ethers.utils.formatUnits(data.presets.fast.auctionStartAmount),
        },
        {
          date: Date.now() + data.presets.fast.points[0].delay,
          value: ethers.utils.formatUnits(
            BigNumber.from(data.presets.fast.auctionStartAmount).sub(
              BigNumber.from(data.presets.fast.points[0].coefficient)
            )
          ),
        },
      ]
    : [
        {
          date: new Date(),
          value: '0',
        },
      ];

  const {
    write: handleApproveAsset,
    status: approveStatus,
    txnStatus: approveTxnStatus,
    error: approveError,
    isLoading: approveLoading,
  } = useTokenApproval({
    addressERC20: '0x000',
    value: depositAmount || BigNumber.from(0),
    enabled: needToApprove,
    spender: oneInchv5 as HexAddress,
  });

  const { data: allowance, refetch: refetchAllowance } = useGetTokenAllowance({
    tokenAddress: '0x000' as HexAddress,
    owner: address as HexAddress,
    spender: oneInchv5 as HexAddress,
  });

  const handleApproveToken = async (isUnlimited: boolean) => {
    handleApproveAsset?.();
  };

  const handleClick = async () => {
    try {
      console.log('eee');
      const response = await axios.get('http://localhost:3001/createOrder');
      console.log('Order created:', response.data.order);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const [usdcAmount, setUsdcAmount] = useState('');
  const [solAmount, setSolAmount] = useState('');
  const [timeUnit, setTimeUnit] = useState('minute');
  const [numberOfOrders, setNumberOfOrders] = useState<any>(2);
  const [pricingStrategyEnabled, setPricingStrategyEnabled] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  return (
    <div className="w-full display flex flex col g-10">
      <div className="w-100 mr-10">
        <TradingViewChart />
      </div>

      {/* <div className="flex flex-col items-center">
        <CurrencyInput {...currencyProp} />
        <img
          src={SwapRing}
          className="w-[112px] h-[112px]"
          style={{ marginTop: -40, marginBottom: -50, zIndex: 1 }}
        />
        <CurrencyInput {...currencyPropOut} />
      </div> */}

      <div className="bg-gray-800 p-4 rounded-xl text-white max-w-md mx-auto ">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="usdcAmount">
            I want to allocate
          </label>
          <div className="flex">
            <input
              type="text"
              id="usdcAmount"
              value={usdcAmount}
              onChange={(e) => setUsdcAmount(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-l-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
            />
            <span className="px-3 py-2 bg-gray-700 border border-l-0 border-gray-600 rounded-r-md">
              USDC
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="solAmount">
            To buy
          </label>
          <div className="flex">
            <input
              type="text"
              id="solAmount"
              value={solAmount}
              onChange={(e) => setSolAmount(e.target.value)}
              className="w-full p-2 bg-gray-700 rounded-l-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
            />
            <span className="px-3 py-2 bg-gray-700 border border-l-0 border-gray-600 rounded-r-md">
              SOL
            </span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="timeUnit">
            Every
          </label>
          <select
            id="timeUnit"
            value={timeUnit}
            onChange={(e) => setTimeUnit(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded-md border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="minute">minute</option>
            <option value="hour">hour</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="numberOfOrders">
            Over
          </label>
          <input
            type="number"
            id="numberOfOrders"
            value={numberOfOrders}
            onChange={(e) => setNumberOfOrders(e.target.value)}
            className="w-full p-2 bg-gray-700 rounded-md border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="pricingStrategy" className="flex items-center">
            <input
              type="checkbox"
              id="pricingStrategy"
              checked={pricingStrategyEnabled}
              onChange={(e) => setPricingStrategyEnabled(e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-700 rounded border-gray-600 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm">Enable Pricing Strategy</span>
          </label>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
            Start DCA
          </button>
        </div>

        {pricingStrategyEnabled && (
          <>
            <div className="flex gap-2 items-center mb-4">
              <input
                type="text"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Min Price"
                className="w-1/2 p-2 bg-gray-700 rounded-md border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                disabled={!pricingStrategyEnabled}
              />
              <span>~</span>
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Max Price"
                className="w-1/2 p-2 bg-gray-700 rounded-md border border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                disabled={!pricingStrategyEnabled}
              />
            </div>

            <div className="mb-4">
              <span>Current buy SOL rate</span>
              {/* Insert logic to fetch and display current SOL rate */}
              <div>-</div>
            </div>

            <div className="mb-4">
              <p className="text-sm mb-4">
                DCA will only be executed if the price falls within the range of your pricing
                strategy.
              </p>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
                onClick={async () => {
                  console.log('diemdiemi');
                  await handleClick();
                }}
              >
                Start DCA
              </button>
            </div>
          </>
        )}

        {/* Add additional controls and displays as needed */}
      </div>

      {needToApprove && isConnected && (
        <ApproveButton
          disabled={!!address}
          handleOnApprove={handleApproveToken}
          isLoading={approveLoading}
        />
      )}
    </div>
  );
};

export default Swap;
