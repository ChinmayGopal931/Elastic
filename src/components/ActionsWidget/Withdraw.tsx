import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";
import { Button } from "components/UI/Button/Button";
import AutoFunction from "components/AutoFunction";

interface Props {
  time: number;
  percentage: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  setAutoDeposit: (value: boolean) => void;
  setPercentage: (value: number) => void;
}

const Withdraw = (props: Props) => {
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
      <CurrencyInput
        {...currencyProp}
        showPercentage
        percentage={props.percentage}
        setPercentage={props.setPercentage}
      />
      <AutoFunction {...props} type="Withdraw" />
      <Button variant="write-btn">WIthdraw</Button>
    </div>
  );
};

export default Withdraw;
