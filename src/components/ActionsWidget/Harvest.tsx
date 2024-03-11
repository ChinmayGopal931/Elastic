import { Button } from "components/UI/Button/Button";
import Card from "components/Studio/Card";
import DropDownInfo from "components/DropDownInfo";
import AutoFunction from "components/AutoFunction";
import { useState } from "react";

interface Props {}

const CARDS = [
  {
    value: "$00.00",
    title: "Total Harvested",
  },
  {
    value: "USDC, ETH",
    title: "Assets Harvested",
  },
  {
    value: "1 Week",
    title: "Next Harvest",
  },
];

const Harvest = (props: Props) => {
  const [time, setTime] = useState(0);
  const [autoDeposit, setAutoDeposit] = useState(false);
  return (
    <div className="w-full">
      <div className="mt-5">
        <DropDownInfo
          placeHolder="Harvest From"
          selectedValue=""
          setValue={() => {}}
          left="00.00"
          right="Balance: 00.00"
        />
      </div>
      <div className="mt-5">
        <AutoFunction
          type="Harvest"
          time={time}
          setTime={setTime}
          autoDeposit={autoDeposit}
          setAutoDeposit={setAutoDeposit}
        />
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return <Card title={item.value} description={item.title} />;
        })}
      </div>
      <Button variant="write-btn">Harvest</Button>
    </div>
  );
};

export default Harvest;
