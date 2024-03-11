import CurrencyInput from 'components/UI/CurrencyInput/CurrencyInput';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import AssetIcon from 'assets/main-logo-blue.svg';
import SwapRing from 'assets/studio/SwapRing.svg';
import { Button } from 'components/UI/Button/Button';
import AutoFunction from 'components/AutoFunction';
import Card from 'components/Studio/Card';
import LeverageWidget from 'components/LeverageWidget';

interface Props {
  time: number;
  percentage: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  setAutoDeposit: (value: boolean) => void;
  setPercentage: (value: number) => void;
}

const CARDS = [
  {
    value: 'Moderate',
    title: 'Price Impact',
  },
  {
    value: '1%',
    title: 'Max Slippage',
  },
  {
    value: 'High',
    title: 'Swap Gas Fee',
  },
];

const Leverage = (props: Props) => {
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
    <div className="w-full">
      <div className="flex flex-col items-center">
        <CurrencyInput {...currencyProp} />
        <img
          src={SwapRing}
          className="w-[112px] h-[112px]"
          style={{ marginTop: -40, marginBottom: -50, zIndex: 1 }}
        />
        <CurrencyInput {...currencyProp} />
      </div>
      <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex flex-col pt-4 px-4 pb-4 box-border mt-5">
        <LeverageWidget />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Leverage</Button>
    </div>
  );
};

export default Leverage;
