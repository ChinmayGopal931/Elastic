import { Button } from 'components/UI/Button/Button';
import Card from 'components/Studio/Card';
import DropDownInfo from 'components/DropDownInfo';
import AutoFunction from 'components/AutoFunction';
import { useState } from 'react';
import CurrencyInput from 'components/UI/CurrencyInput/CurrencyInput';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import AssetIcon from 'assets/main-logo-blue.svg';

interface Props {}

const CARDS = [
  {
    value: '$00.00',
    title: 'Total Staked',
  },
  {
    value: '3.5%',
    title: 'APY',
    color: '#5BC983',
  },
  {
    value: '00.00 XXXX',
    title: 'Expected Rewards',
  },
];

const Swap = (props: Props) => {
  const [time, setTime] = useState(0);
  const [autoDeposit, setAutoDeposit] = useState(false);

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
      <CurrencyInput {...currencyProp} addButton />
      <div className="mt-5">
        <DropDownInfo
          placeHolder="Type something"
          selectedValue=""
          setValue={() => {}}
          left="00.00"
          right="Balance: 00.00"
        />
      </div>
      <div className="mt-5">
        <AutoFunction
          type="Stake"
          time={time}
          setTime={setTime}
          autoDeposit={autoDeposit}
          setAutoDeposit={setAutoDeposit}
        />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} color={item.color} />;
        })}
      </div>
      <Button variant="write-btn">Exchange</Button>
    </div>
  );
};

export default Swap;
