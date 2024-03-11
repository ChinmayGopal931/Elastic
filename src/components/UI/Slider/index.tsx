import React from 'react';
import ReactSlider from 'react-slider';

interface Props {
  setValue: (value: number) => void;
  value: number;
  showValue?: boolean;
  step?: number;
  min?: number;
  max?: number;
}

function Slider({
  value = 0,
  setValue,
  showValue = false,
  step = 1,
  min = 0,
  max = 100,
}: Props) {
  return (
    <div className="flex items-center w-full">
      <ReactSlider
        step={step}
        value={value}
        min={min}
        max={max}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props) => <div {...props} />}
        onChange={setValue}
      />
      {showValue && (
        <div className="gradiant-border-tag ml-5">
          <div className="min-w-[14px] text-xs text-center bg-white dark:bg-background body-medium-15 py-1 w-[60px] rounded-lg flex flex-row justify-evenly items-center">
            {value}%
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
