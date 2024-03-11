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

const DATA = [
  { label: 'Last Withdraw', value: '1D Ago' },
  { label: 'Total Withdrawals', value: '$XXXX' },
  { label: 'Withdraw History', value: '$XXXX' },
  { label: 'Remaining Assets', value: '$XXXX' },
];

const TOP_CARDS = [
  { color: '#F57069', title: 'Estimated APY', value: '-14%' },
  {
    title: 'Total Deposits',
    value: '$XXXX',
  },
  {
    title: 'Total AUM',
    value: '$XXXX',
  },
];
const BOTTOM_CARDS = [
  {
    title: 'Last Withdrawal',
    value: '14%',
  },
  {
    title: 'Total Interest Earned',
    value: '14%',
  },
  {
    title: 'Transaction Fee',
    value: '14%',
  },
  {
    title: 'Next Withdrawal',
    value: '1 Week',
  },
];

const Deposit = () => {
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
      <DataSlot icon={WithdrawIcon} headingCurrency="USDT" headingValue="XX.XX" data={DATA} />
      <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-8 mt-5">
        <div className="flex justify-between gap-5">
          <div className="flex justify-between bg-cards py-4 px-4 rounded-xl w-6/12">
            <div>
              <p className="text-body_light_dark text-4xl">$XXXX</p>
              <p className="mt-5 text-body_dark_dark">To Withdrawal</p>
            </div>
            <div className="flex w-[100px] h-[40px] flex-row gap-3 px-3 text-center bg-white dark:bg-ui_surface_opc border-primary_brand_01 border-2 border-solid rounded-xl items-center">
              <SymbolLogo symbol="FCTR" height={25} width={25} />
              <p>ETH</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-cards rounded-xl w-6/12 cursor-pointer">
            <img src={PlusGradient} className="w-[50px] h-[50px] " />
          </div>
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

export default Deposit;

{
  /* <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-8 mt-5 flex flex-col">
        <MultiSelectAndSearch
          data={VAULTS}
          placeholder="Search assets"
          onChange={(value, newValue: any) => {}}
        />
        <div className="flex justify-between mt-5 gap-10">
          <div className="w-6/12">
            <CurrencyInput {...inputProps} />
          </div>
          <div className="bg-white dark:bg-ui_surface rounded-xl shadow-xl dark:shadow-lg flex items-center justify-center w-6/12 cursor-pointer">
            <img src={PlusGradient} />
          </div>
        </div>
        <p className="my-5">Leverage Slider</p>
        <div>
          <Slider value={leverage} setValue={setLeverage} />
          <div className="flex justify-between">
            {LEVERAGE.map((item) => {
              return <p className="text-xs text-body_dark_dark">{item}X</p>;
            })}
          </div>
        </div>
        <div className="flex justify-between mt-10">
          {Leverage_Info.map((item) => {
            return <Card title={item.value} description={item.label} />;
          })}
        </div>
        <Button variant="next-btn" className="w-[160px] self-center mt-5">
          Action
        </Button>
      </div> */
}
