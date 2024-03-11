import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import Dropdown from "components/UI/Dropdown/Dropdown";
import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";
import DropDownInfo from "components/DropDownInfo";

interface Props {}

const CARDS = [
  {
    value: "$00.00",
    title: "Interest Earned",
  },
  {
    value: "USDC, ETH",
    title: "Lent Assets",
  },
  {
    value: "$00.00",
    title: "Total Lending",
  },
];

const Lending = (props: Props) => {
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
      <div className="mt-5">
        <DropDownInfo
          placeHolder="Choose Lending Place"
          selectedValue=""
          setValue={() => {}}
          left="00.00"
          right="Total Lending"
        />
      </div>
      <div className="mt-5">
        <CurrencyInput {...currencyProp} addButton />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Lend</Button>
    </div>
  );
};

export default Lending;
