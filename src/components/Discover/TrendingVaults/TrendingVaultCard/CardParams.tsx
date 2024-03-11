import React from 'react';

type Props = {
  cardParams: any;
};

const CardParams = (props: Props) => {
  const { cardParams } = props;
  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      {cardParams?.map((item: any, index: number) => {
        return (
          <div
            className="flex flex-col items-center justify-center mb-4 bg-white dark:bg-studio_cards rounded-xl h-[64px] w-[96px] gap-1"
            key={index}
          >
            <p className="heading text-base">{item?.value}</p>
            <p className="text-xs text-primary_brand_01">{item?.key}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardParams;
