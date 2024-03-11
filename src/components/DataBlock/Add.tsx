import React from "react";
import PlusGradient from "assets/icons/plus_gradient.svg";
import Card from "components/Studio/Card";
import ChartPieSliceContainer from "assets/studio/BottomContainer/ChartPieSlice.svg";
import Grains from "assets/studio/BottomContainer/Grains.svg";
import Table from "assets/studio/BottomContainer/Table.svg";
import Palette from "assets/studio/BottomContainer/Palette.svg";
import Coins from "assets/studio/BottomContainer/Coins.svg";

const BOTTOM_CONTAINER = [
  {
    label: "Asset Management",
    image: ChartPieSliceContainer,
  },
  {
    label: "Farming",
    image: Grains,
  },
  {
    label: "Risk Management",
    image: Table,
  },
  {
    label: "Flexible Strategy Adjustments",
    image: Palette,
  },
  {
    label: "Token Operation",
    image: Coins,
  },
];

interface Props {
  onClick: () => void;
}

const AddBlock = ({ onClick }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={PlusGradient} className="w-[30px] h-[30px] text-center my-5" />
      <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface flex justify-between p-10 gap-5">
        {BOTTOM_CONTAINER.map((item) => {
          return (
            <Card
              icon={item.image}
              description={item.label}
              onClick={() => onClick()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddBlock;
