import React from "react";
import CustomSwitch from "components/UI/CustomSwitch/CustomSwitch";
import Slider from "components/UI/Slider";
import Card from "components/Studio/Card";

interface Props {
  type: string;
  time: number;
  setTime: (value: number) => void;
  autoDeposit: boolean;
  showCards?: boolean;
  setAutoDeposit: (value: boolean) => void;
}

const TIME_DIST = ["Daily", "Weekly", "Bi-Weekly", "Monthly", "Bi-Monthly"];

const depositCards = [
  {
    value: "14%",
    label: "Estimated APY",
  },
  {
    value: "1%",
    label: "Max Slippage",
  },
  {
    value: "1 Week",
    label: "Lock Up Time",
  },
];

const AutoFunction = ({
  type,
  time,
  setTime,
  autoDeposit,
  setAutoDeposit,
  showCards,
}: Props) => {
  return (
    <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex flex-col pt-4 px-5 pb-4 box-border mt-5">
      <div className="flex justify-between items-center">
        <span>Auto {type}</span>
        <CustomSwitch checked={autoDeposit} onChange={setAutoDeposit} />
      </div>
      <div>
        <Slider value={time} setValue={setTime} min={0} max={4} />
        <div className="flex justify-between">
          {TIME_DIST.map((item) => {
            return <span className="text-xs muted-text">{item}</span>;
          })}
        </div>
      </div>
      {showCards && (
        <div className="flex justify-between mt-5 gap-5">
          {depositCards.map((item, index) => {
            return (
              <Card key={index} title={item.value} description={item.label} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AutoFunction;
