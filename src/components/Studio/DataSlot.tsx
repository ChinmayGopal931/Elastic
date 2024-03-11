import React from 'react';
import More from 'assets/studio/More.svg';

interface Props {
  data: Array<{ label: string; value: any }>;
  leftHeadingValue?: string;
  leftHeadingCurrency?: string;
  headingValue: string;
  headingCurrency: string;
  icon?: any;
  leftIcon?: any;
  middleText?: string;
}

function DataSlot({
  leftHeadingValue,
  leftHeadingCurrency,
  data,
  headingValue,
  headingCurrency,
  icon,
  middleText,
  leftIcon,
}: Props) {
  return (
    <div className="flex justify-between gap-10 items-center mt-5 mx-5">
      <div className="flex items-center gap-2">
        {leftIcon && <img src={leftIcon} />}
        <p className="text-md">
          {leftHeadingValue}{' '}
          <span className="text-xs text-body_dark_dark">{leftHeadingCurrency}</span>
        </p>
        {icon ? <img src={icon} /> : <span>{middleText}</span>}
        <p className="text-md">
          {headingValue} <span className="text-xs text-body_dark_dark">{headingCurrency}</span>
        </p>
      </div>
      <div className="flex gap-10">
        {data.map((item) => {
          return (
            <div className="flex items-center flex-col gap-2">
              <p className="text-primary_brand_01">{item.value}</p>
              <p className="text-xs text-body_dark_dark">{item.label}</p>
            </div>
          );
        })}
      </div>
      <img src={More} />
    </div>
  );
}

export default DataSlot;
