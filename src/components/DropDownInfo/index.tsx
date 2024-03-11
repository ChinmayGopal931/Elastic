import React from "react";
import Dropdown from "components/UI/Dropdown/Dropdown";
import Slider from "components/UI/Slider";

interface Props {
  placeHolder?: string;
  selectedValue?: string;
  setValue: (value: string) => void;
  setTrigger?: (value: number) => void;
  trigger?: number;
  right?: string;
  left?: string;
  renderSlider?: boolean;
}

const PERCENTAGE = [10, 25, 50, 75, 100];

const DropDownInfo = ({
  placeHolder,
  selectedValue,
  setValue,
  right,
  left,
  renderSlider,
  setTrigger,
  trigger,
}: Props) => {
  return (
    <div className="mt-5">
      <div className="rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface w-full flex flex-col pt-4 px-4 pb-4 box-border">
        <Dropdown
          bordered
          width="100%"
          placeHolder={placeHolder}
          options={[]}
          theme={{ type: "asset" }}
          selectedLabel={selectedValue ? selectedValue : ""}
          setSelectedOption={setValue}
        />
        {renderSlider ? (
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-2/12 justify-center gap-1">
              <div className="gradiant-border-tag w-full">
                <div className="min-w-[14px] text-xs text-center bg-white dark:bg-background body-medium-15 py-1 rounded-lg flex flex-row justify-evenly items-center">
                  {trigger}%
                </div>
              </div>
              <span className="text-xs text-center">Rol Trigger</span>
            </div>
            <div className="w-9/12">
              <Slider
                setValue={(value) => {
                  setTrigger ? setTrigger(value) : {};
                }}
                value={trigger ? trigger : 0}
              />
              <div className="flex justify-between">
                {PERCENTAGE.map((item, index) => {
                  return <p className="muted-text text-xs">{item}%</p>;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-between mt-3 items-center">
            <h2 className="muted-text">{left}</h2>
            <p className="muted-text">{right}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownInfo;
