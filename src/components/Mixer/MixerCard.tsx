import React from 'react';
import Ring from 'assets/studio/Plus.svg';

interface Props {
  onClick?: () => void;
  leftImage?: string;
  leftTopText?: string;
  leftBottom?: string;
  rightImage?: string;
  rightText?: string;
  right?: boolean;
  ring?: boolean;

  handleOpenCard?: () => void;
}

function MixerCard(props: Props) {
  return (
    <div
      className="bg-white dark:bg-ui_surface rounded-xl flex items-center gap-5 p-3 justify-center shadow-xl cursor-pointer"
      onClick={() => {
        props.onClick ? props.onClick() : '';
      }}
    >
      {props.ring ? (
        <img src={Ring} className="mx-6 my-3" />
      ) : (
        <>
          <div className="flex items-center flex-col gap-2">
            <img src={props.leftImage} />
            <p className="text-primary_brand_01 text-xl">{props.leftTopText}</p>
            <p className="text-body_dark_dark">{props.leftBottom}</p>
          </div>
          {props.right && <div className="text-body_dark_dark">{'>'}</div>}
          <div className="flex items-center flex-col gap-2">
            <img src={props.rightImage} />
            <p className="text-body_dark_dark">{props.rightText}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default MixerCard;
