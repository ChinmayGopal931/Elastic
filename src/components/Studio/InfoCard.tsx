import React from 'react';

interface Props {
  leftText?: string;
  rightDescription?: string;
  rightImage?: any;
}

function InfoCard({ leftText, rightImage, rightDescription }: Props) {
  return (
    <div
      className={`bg-white dark:bg-studio_cards rounded-xl w-full flex justify-between items-center cursor-pointer py-6 px-20`}
    >
      <p className="text-body_light_dark text-4xl">{leftText}</p>
      <div className="flex flex-col items-center gap-3">
        {rightImage && <img src={rightImage} className="w-[45px] h-[45px]" />}
        <p className="text-body_light_dark text-xs">{rightDescription}</p>
      </div>
    </div>
  );
}

export default InfoCard;
