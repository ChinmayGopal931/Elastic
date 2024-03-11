import React from 'react';
import { Protocol } from 'lib/constants';
import FactorDAO from 'assets/protocols/factordao.svg';
import Silo from 'assets/protocols/silo.svg';
import Mux from 'assets/protocols/mux.svg';
import GMX from 'assets/protocols/gmx.svg';
import TraderJOE from 'assets/protocols/traderjoe.svg';
import Radiant from 'assets/protocols/radiant.svg';
import Plutus from 'assets/protocols/plutus.svg';
import Pendle from 'assets/protocols/pendle.svg';
import Tender from 'assets/protocols/tender.svg';
import Lodestar from 'assets/protocols/lodestar.svg';
import Perennial from 'assets/protocols/perennial.svg';
import Vela from 'assets/protocols/vela.svg';
import Dolomite from 'assets/protocols/dolomite.svg';
import Buffer from 'assets/protocols/buffer.svg';
import PoolShark from 'assets/protocols/poolshark.svg';
import Rodeo from 'assets/protocols/rodeo.svg';
import RosyWhale from 'assets/protocols/rosywhale.svg';
import Chronos from 'assets/protocols/chronos.svg';
import Mugen from 'assets/protocols/mugen.svg';
import Olive from 'assets/protocols/olive.svg';
import Redacted from 'assets/protocols/redacted.svg';
import TimeSwap from 'assets/protocols/timeswap.svg';
import Y2K from 'assets/protocols/y2k.svg';
import BlockchainTraders from 'assets/protocols/blockchaintraders.svg';
import Camelot from 'assets/protocols/camelot.svg';
import Uniswap from 'assets/protocols/uniswap.svg';
import Sushiswap from 'assets/protocols/sushiswap.svg';
import Balancer from 'assets/protocols/balancer.svg';
import Pirex from 'assets/protocols/pirex.svg';
interface Props {
  protocol: Protocol;
  height?: number;
  width?: number;
}

const ProtocolIcon = (props: Props) => {
  const { protocol, height = 24, width = 24 } = props;

  const createImage = () => {
    switch (protocol.id) {
      case 'factordao':
        return FactorDAO;
      case 'silo':
        return Silo;
      case 'camelot':
        return Camelot;
      case 'balancer':
        return Balancer;
      case 'uniswapV2':
        return Uniswap;
      case 'sushiswap':
        return Sushiswap;
      case 'muxp':
        return Mux;
      case 'gmx':
        return GMX;
      case 'traderjoe':
        return TraderJOE;
      case 'radiant':
        return Radiant;
      case 'plutus':
        return Plutus;
      case 'pendle':
        return Pendle;
      case 'tender':
        return Tender;
      case 'lodestar':
        return Lodestar;
      case 'perennial':
        return Perennial;
      case 'vela':
        return Vela;
      case 'dolomite':
        return Dolomite;
      case 'buffer':
        return Buffer;
      case 'poolshark':
        return PoolShark;
      case 'rodeo':
        return Rodeo;
      case 'rosywhale':
        return RosyWhale;
      case 'chronos':
        return Chronos;
      case 'mugen':
        return Mugen;
      case 'olive':
        return Olive;
      case 'redacted':
        return Redacted;
      case 'timeswap':
        return TimeSwap;
      case 'y2k':
        return Y2K;
      case 'blockchaintraders':
        return BlockchainTraders;
      case 'pirex':
        return Pirex;
      default:
        return FactorDAO;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img
        src={createImage()}
        alt=""
        style={{
          height: `${height}px`,
          width: `${width}px`,
        }}
      />
    </div>
  );
};

export default ProtocolIcon;
