import CurrencyInput from "components/UI/CurrencyInput/CurrencyInput";
import { BigDecimal } from "lib/helpers/BigDecimal";
import AssetIcon from "assets/main-logo-blue.svg";
import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import BorrowWidget from "components/BorrowWidget";
import FrequencyWidget from "components/FrequencyWidget";
import ListItem from "components/ListItem";
import CustomSwitch from "components/UI/CustomSwitch/CustomSwitch";
import { useState } from "react";

interface Props {}

const CARDS = [
  {
    value: "14%",
    title: "Expected APY",
  },
  {
    value: "1%",
    title: "Max Slippage",
  },
  {
    value: "Week",
    title: "Frequency",
  },
];

const Compound = (props: Props) => {
  const [auto, autoCompounding] = useState(false);
  return (
    <div className="w-full">
      <div className="mt-5">
        <FrequencyWidget />
      </div>
      <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex pt-4 px-4 pb-4 box-border justify-between mt-5 items-center">
        <p>Auto Compounding</p>
        <CustomSwitch checked={auto} onChange={autoCompounding} />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Compound</Button>
    </div>
  );
};

export default Compound;
