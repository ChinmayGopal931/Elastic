import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import DropDownInfo from "components/DropDownInfo";
import AutoFunction from "components/AutoFunction";
import { useState } from "react";
import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";
import CustomSwitch from "components/UI/CustomSwitch/CustomSwitch";

interface Props {}

const CARDS = [
  {
    value: "$00.00",
    title: "Total Insured",
  },
  {
    value: "3.5%",
    title: "Premium Rate",
  },
  {
    value: "XXX",
    title: "Policy Terms",
  },
];

const PerformanceBasedShifts = (props: Props) => {
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

  const [autoRebalance, setAutoRebalance] = useState(false);

  return (
    <div className="w-full">
      {/* @ts-ignore */}
      <DropDownInfo
        placeHolder="Choose Assets"
        selectedValue=""
        setValue={() => {}}
        left="00.00"
        right="Trigger Price"
        renderSlider
      />
      <div className="mt-5">
        <CurrencyInput {...currencyProp} addButton />
      </div>
      <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex pt-4 px-4 pb-4 box-border justify-between mt-5 items-center">
        <p>Auto Rebalance</p>
        <CustomSwitch checked={autoRebalance} onChange={setAutoRebalance} />
      </div>
      <Button variant="write-btn">Set Shift Trigger</Button>
    </div>
  );
};

export default PerformanceBasedShifts;
