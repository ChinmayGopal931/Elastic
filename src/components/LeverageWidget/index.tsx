import Slider from 'components/UI/Slider';
import React, { useState } from 'react';

const LeverageWidget = () => {
  const [value, setValue] = useState(0);
  const LEVERAGE_VALUE = [2, 5, 10, 15, 25, 30, 35, 40, 45, 50];
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Leverage</h3>
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
    </>
  );
};

export default LeverageWidget;
