import Slider from "components/UI/Slider";
import React, { useState } from "react";
import Card from "components/Studio/Card";

const CARDS = [
  {
    value: "Moderate",
    title: "Price Impact",
    color: "#F5945F",
  },
  {
    value: "1%",
    title: "Max Slippage",
  },
  {
    value: "High",
    title: "Swap Gas Fee",
    color: "#FD7972",
  },
];
const BorrowWidget = () => {
  const [value, setValue] = useState(0);
  const LEVERAGE_VALUE = [2, 5, 10, 15, 25, 30, 35, 40, 45, 50];

  return (
    <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex flex-col pt-4 px-4 pb-4 box-border">
      <div className="flex justify-between items-center">
        <h3>Borrow</h3>
        <div className="gradiant-border-tag ml-5">
          <div className="min-w-[14px] text-xs text-center bg-white dark:bg-background body-medium-15 py-1 w-[60px] rounded-lg flex flex-row justify-evenly items-center">
            {value}X
          </div>
        </div>
      </div>
      <Slider setValue={setValue} value={value} />
      <div className="flex justify-between">
        {LEVERAGE_VALUE.map((item, index) => {
          return <p className="muted-text text-xs">{item}X</p>;
        })}
      </div>
      <div className="flex justify-between my-5 gap-4">
        {CARDS.map((item) => {
          return (
            <Card
              title={item.value}
              description={item.title}
              color={item.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BorrowWidget;
