import React from 'react';
import Block from './Block';
import Sushi from 'assets/studio/SushiLogo.svg';
import MixerCard from './MixerCard';

const Mixer = (props: any) => {
  // const buildingBlocks = [
  //   {
  //     icon: "download",
  //     title: "Deposit",
  //     description: "Deposit your assets into the mixer",
  //     functions: ["deposit"],
  //   },
  //   {
  //     icon: "download",
  //     title: "Mint",
  //     description: "Deposit your assets into the mixer",
  //     functions: ["mint"],
  //   },
  //   {
  //     icon: "download",
  //     title: "Stake",
  //     description: "Deposit your assets into the mixer",
  //     functions: ["stake"],
  //   },
  //   {
  //     icon: "swap",
  //     title: "Swap",
  //     description: "Swap your assets for other assets",
  //     functions: ["swap"],
  //   },
  //   {
  //     icon: "upload",
  //     title: "Withdraw",
  //     description: "Withdraw your assets from the mixer",
  //     functions: ["withdraw"],
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center">
      <Block icon={props.icon} title={props.heading}>
        <div className="flex items-center gap-10 p-10 bg-white dark:bg-ui_surface rounded-xl justify-center shadow-xl dark:shadow-lg">
          {props.strategyVisualization.map((item: any, index: number) => {
            let INNER_ITEM: any = [];
            item.forEach((innerItem: any) => {
              INNER_ITEM.push(
                <MixerCard
                  onClick={innerItem.onClick}
                  right={innerItem.right}
                  leftBottom={innerItem.leftBottom}
                  leftTopText={innerItem.leftTopText}
                  leftImage={innerItem.leftImage}
                  rightImage={innerItem.rightImage}
                  rightText={innerItem.rightText}
                  ring={innerItem.ring}
                />
              );
            });
            return (
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-5">{INNER_ITEM}</div>
                {index !== props.strategyVisualization.length - 1 && (
                  <div className="text-2xl">{'>'}</div>
                )}
              </div>
            );
          })}
        </div>
      </Block>
    </div>
  );
};

export default Mixer;
