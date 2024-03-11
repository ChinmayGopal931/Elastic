import { Token } from 'state/vault/types';
import SymbolLogo from '../SymbolLogo/SymbolLogo';
import VaultAddress from '../VaultAddress/VaultAddress';

export interface AssetProps {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
  logo: string;
}

const AssetCard = (props: Token) => {
  return (
    <div className="flex flex-col justify-center items-start rounded-box-shadow w-[320px] pt-5 pl-5 ">
      <div className="flex flex-row justify-start items-end w-full px-1">
        <SymbolLogo height={20} width={20} symbol={props?.symbol} />

        <p className="mx-2 body-medium-14 font-semibold">{props.name}</p>
        <p className="text-xs text-slate_gray flex-grow">{props.symbol}</p>
        <p className="font-medium mr-3 text-heading_dark"></p>
      </div>
      <div className="pl-[6px] mt-4 !text-pewter_blue">
        <VaultAddress address={props.address} isTrunced={true} />
      </div>
    </div>
  );
};

export default AssetCard;
