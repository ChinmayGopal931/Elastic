import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";
import CustomSwitch from "components/UI/CustomSwitch/CustomSwitch";
import Slider from "components/UI/Slider";
import Card from "components/Studio/Card";
import { Button } from "components/UI/Button/Button";
import AutoFunction from "components/AutoFunction";

interface Props {
  time: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  setAutoDeposit: (value: boolean) => void;
}

const Deposit = (props: Props) => {
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
      <CurrencyInput {...currencyProp} />
      <AutoFunction {...props} type="Deposit" />
      <Button variant="write-btn">Deposit</Button>
    </div>
  );
};

export default Deposit;
