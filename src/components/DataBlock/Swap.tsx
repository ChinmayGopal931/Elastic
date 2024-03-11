import React from 'react';
import MultiSelectAndSearch from 'components/UI/MultiSelectAndSearch';
import CurrencyInput from 'components/UI/CurrencyInput/CurrencyInput';
import PlusGradient from 'assets/icons/plus_gradient.svg';
import Slider from 'components/UI/Slider';
import { Button } from 'components/UI/Button/Button';
import Card from 'components/Studio/Card';
import DataSlot from 'components/Studio/DataSlot';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import AssetIcon from 'assets/main-logo-blue.svg';
import SymbolLogo from '../UI/SymbolLogo/SymbolLogo';

import WithdrawIcon from 'assets/studio/withdraw.svg';
import SwapIcon from 'assets/studio/Icons/swap.svg';
import SwapRight from 'assets/studio/swap-right.svg';
import CurrencyPicker from 'components/CurrencyPicker';

const DATA = [
  { label: 'Last Swap', value: '1D Ago' },
  { label: 'Total Swaps', value: '$XXXX' },
  { label: 'Total Deposits', value: '$XXXX' },
  { label: 'Total AUM', value: '$XXXX' },
];

const TOP_CARDS = [
  { color: '#F57069', title: 'Estimated APY', value: '-14%' },
  {
    title: 'Total Swapped',
    value: '$XXXX',
  },
  {
    title: 'Total AUM',
    value: '$XXXX',
  },
];
const BOTTOM_CARDS = [
  {
    title: 'Last Swap',
    value: '14%',
  },
  {
    title: 'Total Interest Earned',
    value: '14%',
  },
  {
    title: 'Gas Fee',
    value: '14%',
  },
  {
    title: 'Next Swap',
    value: '1 Week',
  },
];

const Swap = () => {
  const currencyProp = {
    icon: AssetIcon,
    balance: BigDecimal.ZERO,
    inputValue: '00.00',
    currentAsset: {
      name: 'ETH',
      symbol: 'ETH',
      logo: 'ETH',
      decimals: 18,
      address: '',
    },
    isDisabled: false,
    symbol: 'ETH',
    setInputValue: () => {},
  };

  return (
    <>
      <DataSlot
        icon={SwapIcon}
        headingCurrency="ETH"
        headingValue="XX.XX"
        data={DATA}
        leftHeadingCurrency="USDT"
        leftHeadingValue="XX.XX"
      />
      <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-8 mt-5">
        <div className="flex justify-between items-center">
          <CurrencyPicker leftText="From" currency="ETH" currencyLogo="ETH" />
          <img src={SwapRight} className="w-[100px] h-[100px]" />
          <CurrencyPicker
            leftText="From"
            currency="FCTR"
            currencyLogo="FCTR"
            bottomRightText="Balance: 00.00"
          />
        </div>
        <div className="flex justify-between my-5 gap-5">
          {TOP_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} color={item.color} />;
          })}
        </div>
        <div className="flex justify-between my-5 gap-5">
          {BOTTOM_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Swap;
