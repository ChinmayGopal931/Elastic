import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import React from 'react';

type Props = {
  assets: any;
};

const TopAssets = (props: Props) => {
  const { assets } = props;
  return (
    <div className="flex flex-row items-center ml-8 gap-1">
      <p className="body-medium-12">Assets: </p>
      {assets?.map((asset: any, index: number) => {
        if (index > 2) return null;
        return (
          <div className="flex flex-row items-center" key={index}>
            <SymbolLogo height={18} width={16} symbol={asset?.symbol} />
          </div>
        );
      })}
    </div>
  );
};

export default TopAssets;
