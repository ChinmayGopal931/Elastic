import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import DropDownInfo from "components/DropDownInfo";
import AutoFunction from "components/AutoFunction";
import { useState } from "react";
import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";

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

const Rebalance = (props: Props) => {
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
      {/* @ts-ignore */}
      <DropDownInfo
        placeHolder="Choose Building Block"
        selectedValue=""
        setValue={() => {}}
        left="XXX%"
        right="Current Allocation"
      />
      <div className="mt-5">
        <CurrencyInput {...currencyProp} addButton />
      </div>
      <Button variant="write-btn">Rebalance</Button>
    </div>
  );
};

export default Rebalance;
