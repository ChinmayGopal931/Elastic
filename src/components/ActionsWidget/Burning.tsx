import { Button } from "components/UI/Button/Button";
import DropDownInfo from "components/DropDownInfo";
import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";

interface Props {}

const Burning = (props: Props) => {
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
      <DropDownInfo
        placeHolder="Choose Tokens"
        selectedValue=""
        setValue={() => {}}
        left="00.00"
        right="Balance: 00.00"
      />
      <div className="mt-5">
        <CurrencyInput {...currencyProp} addButton />
      </div>
      <Button variant="write-btn">Burn</Button>
    </div>
  );
};

export default Burning;
