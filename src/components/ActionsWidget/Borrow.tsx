import AssetIcon from "assets/main-logo-blue.svg";
import BorrowWidget from "components/BorrowWidget";
import Card from "components/Studio/Card";
import { Button } from "components/UI/Button/Button";
import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";

interface Props {
  time: number;
  percentage: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  setAutoDeposit: (value: boolean) => void;
  setPercentage: (value: number) => void;
}

const CARDS_1 = [
  {
    value: "1%",
    title: "Max Slippage",
  },
  {
    value: "High",
    title: "Swap Gas Fee",
  },
];
const CARDS = [
  {
    value: "Moderate",
    title: "Price Impact",
  },
  {
    value: "1%",
    title: "Max Slippage",
  },
  {
    value: "High",
    title: "Swap Gas Fee",
  },
];

const Borrow = (props: Props) => {
  const currencyProp = {
    icon: AssetIcon,
    balance: BigDecimal.ZERO,
    inputValue: "00.00",
    currentAsset: {
      name: "ETH",
      symbol: "ETH",
      logo: "ETH",
      decimals: 18,
      address: "",
    },
    isDisabled: false,
    symbol: "ETH",
    setInputValue: () => {},
  };

  return (
    <div className="w-full">
      <CurrencyInput {...currencyProp} addButton />
      <div className="mt-5">
        <BorrowWidget />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS_1.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Borrow</Button>
    </div>
  );
};

export default Borrow;
