import React from 'react';
import Help from 'assets/Help.svg';
import Tooltip from 'rc-tooltip';

interface Props {
  heading?: string;
  tooltipContent: any;
}

function HoverableTooltip({ heading, tooltipContent }: Props) {
  return (
    <div className="flex items-center">
      <h4 className="heading text-base">{heading}</h4>
      <Tooltip
        placement="rightTop"
        trigger={['hover']}
        overlay={<span className="text-xs">{tooltipContent}</span>}
      >
        <img className="ml-1 cursor-pointer" src={Help} />
      </Tooltip>
    </div>
  );
}

export default HoverableTooltip;
