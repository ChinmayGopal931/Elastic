import Slider from "components/UI/Slider";
import React, { useState } from "react";
import Card from "components/Studio/Card";

const FrequencyWidget = () => {
  const [value, setValue] = useState<string>("Daily");
  const FREQUENCY_VALUES = [
    "Daily",
    "Weekly",
    "Bi-Weekly",
    "Monthly",
    "Bi-Monthly",
  ];

  return (
    <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex flex-col pt-4 px-4 pb-4 box-border">
      <div className="flex justify-between items-center">
        <h3>Frequency</h3>
        <div className="gradiant-border-tag ml-5">
          <div className="min-w-[14px] text-xs text-center bg-white dark:bg-background body-medium-15 py-2 px-2 rounded-lg flex flex-row justify-evenly items-center">
            {value}
          </div>
        </div>
      </div>
      <Slider
        min={0}
        max={4}
        setValue={(value) => {
          setValue(FREQUENCY_VALUES[value]);
        }}
        value={FREQUENCY_VALUES.indexOf(value)}
      />
      <div className="flex justify-between">
        {FREQUENCY_VALUES.map((item, index) => {
          return <p className="muted-text text-xs">{item}</p>;
        })}
      </div>
    </div>
  );
};

export default FrequencyWidget;
