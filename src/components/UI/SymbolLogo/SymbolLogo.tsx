import GRAIL from 'assets/tokens/GRAIL.svg';
import ETH from 'assets/tokens/ETH.svg';
import USDC from 'assets/tokens/USDC.svg';
import WETH from 'assets/tokens/WETH.svg';
import VELA from 'assets/tokens/VELA.svg';
import GMX from 'assets/tokens/GMX.svg';
import JONES from 'assets/tokens/JONES.svg';
import WBTC from 'assets/tokens/WBTC.svg';
import RNDTX from 'assets/tokens/RNDTX.svg';
import PLS from 'assets/tokens/PLS.svg';
import DPX from 'assets/tokens/DPX.svg';
import FCTR from 'assets/tokens/FCTR.svg';
import ARDI from 'assets/tokens/ARDI.svg';
import ARBLX from 'assets/tokens/ARBLX.svg';
import RDNT from 'assets/tokens/RADIANT.svg';
import LODE from 'assets/tokens/LODE.svg';
import TND from 'assets/tokens/TND.svg';
import ARBDX from 'assets/tokens/ARBDX.svg';
import ARB from 'assets/tokens/ARB.svg';
import MUX from 'assets/tokens/MUX.svg';
import MUXLP from 'assets/tokens/MUXLP.svg';
import DARB from 'assets/tokens/DARB.svg';
import GNS from 'assets/tokens/GNS.svg';
import YARB from 'assets/tokens/YARB.svg';
import SARB from 'assets/tokens/SARB.svg';
import SGLP from 'assets/tokens/SGLP.svg';
import JOE from 'assets/tokens/JOE.svg';
import SJOE from 'assets/tokens/SJOE.svg';
import GLP from 'assets/tokens/GLP.svg';
import RUSDC from 'assets/tokens/RUSDC.svg';
import PLVGLP from 'assets/tokens/PLVGLP.svg';
import WSTETH from 'assets/tokens/WSTETH.svg';
import PENDLE from 'assets/tokens/PENDLE.svg';
import STETH from 'assets/tokens/STETH.svg';
import PTSTETH from 'assets/tokens/PTSTETH.svg';
import PTWSTETH from 'assets/tokens/PTWSTETH.svg';
import SILO from 'assets/tokens/SILO.svg';
import LUSDC from 'assets/tokens/LUSDC.svg';
import SUSDCARB from 'assets/tokens/SUSDCARB.svg';
import SUSDCGMX from 'assets/tokens/SUSDCGMX.svg';
import IUSDC from 'assets/tokens/IUSDC.svg';

import PENDLELPT from 'assets/tokens/PENDLELPT.svg';
import RETH from 'assets/tokens/RETH.svg';
import VLP from 'assets/tokens/VLP.svg';

import ESVELA from 'assets/tokens/ESVELA.svg';
import PTRETH from 'assets/tokens/PTRETH.svg';

interface TokenImages {
  [key: string]: string;
}

const tokenImages: TokenImages = {
  GRAIL,
  ETH,
  WETH,
  WBTC,
  JONES,
  VELA,
  GMX,
  RNDTX,
  USDC,
  PLS,
  DPX,
  FCTR,
  ARDI,
  DARB,
  GNS,
  ARBLX,
  RDNT,
  LODE,
  TND,
  ARBDX,
  RUSDC,
  YARB,
  SARB,
  SILO,
  ARB,
  SGLP,
  GLP,
  JOE,
  SJOE,
  MUXLP,
  MUX,
  PLVGLP,
  WSTETH,
  PENDLE,
  STETH,
  PTSTETH,
  PTWSTETH,
  LUSDC,
  IUSDC,
  SUSDCARB,
  SUSDCGMX,
  PENDLELPT,
  RETH,
  PTRETH,
  VLP,
  ESVELA,
};

export interface SymbolLogoProps {
  symbol: string;
  height?: number;
  width?: number;
}

export const generatePath = (props: string) => {
  const assetsPath = props !== 'fROUND' ? tokenImages[props] : tokenImages['GRAIL'];
  if (!assetsPath) return tokenImages['FCTRLOGO'];
  return assetsPath;
};

const SymbolLogo = (props: SymbolLogoProps) => {
  const { symbol, width, height } = props;
  return (
    <div className="flex">
      <img
        alt={symbol}
        src={generatePath(symbol)}
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
      />
    </div>
  );
};

export default SymbolLogo;
