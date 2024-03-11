import React from 'react';
import SymbolLogo from '../UI/SymbolLogo/SymbolLogo';

interface Props {
  currencyLogo: string;
  leftText: string;
  bottomRightText?: string;
  currency: string;
}

const CurrencyPicker = ({ leftText, currencyLogo, currency, bottomRightText }: Props) => {
  return (
    <div className="flex justify-between bg-cards py-4 px-4 rounded-xl w-6/12">
      <div>
        <p className="text-body_light_dark text-4xl">$XXXX</p>
        <p className="mt-5 text-body_dark_dark">{leftText}</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex w-[100px] h-[40px] flex-row gap-3 px-3 text-center bg-white dark:bg-ui_surface_opc border-primary_brand_01 border-2 border-solid rounded-xl items-center">
          <SymbolLogo symbol={currencyLogo} height={25} width={25} />
          <p>{currency}</p>
        </div>
        {bottomRightText && <p className="text-body_light_dark">{bottomRightText}</p>}
      </div>
    </div>
  );
};

export default CurrencyPicker;
