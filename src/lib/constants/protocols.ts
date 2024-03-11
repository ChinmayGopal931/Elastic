import { HexAddress } from './utils';

export type SupportedProtocols =
  | 'silo'
  | 'mux'
  | 'gmx'
  | 'traderjoe'
  | 'radiant'
  | 'plutus'
  | 'pendle'
  | 'tender'
  | 'lodestar'
  | 'perennial'
  | 'vela'
  | 'dolomite'
  | 'buffer'
  | 'poolshark'
  | 'rodeo'
  | 'rosywhale'
  | 'chronos'
  | 'mugen'
  | 'olive'
  | 'redacted'
  | 'timeswap'
  | 'y2k'
  | 'camelot'
  | 'uniswapV2'
  | 'balancer'
  | 'pirex'
  | 'penpie'
  | 'blockchaintraders';

export type Protocol = {
  id: string;
  name: string;
  address: HexAddress;
};

export const protocols: Record<SupportedProtocols, Protocol> = {
  silo: {
    id: 'silo',
    name: 'Silo Finance',
    address: '0x00000',
  },
  pirex: {
    id: 'pirex',
    name: 'Pirex',
    address: '0x00000',
  },
  uniswapV2: {
    id: 'uniswapV2',
    name: 'Uniswap V2',
    address: '0x00000',
  },
  balancer: {
    id: 'balancer',
    name: 'Balancer',
    address: '0x00000',
  },
  mux: {
    id: 'muxp',
    name: 'Mux Protocol',
    address: '0x00000',
  },
  gmx: {
    id: 'gmx',
    name: 'GMX Protocol',
    address: '0x00000',
  },
  traderjoe: {
    id: 'traderjoe',
    name: 'Trader Joe',
    address: '0x00000',
  },
  radiant: {
    id: 'radiant',
    name: 'Radiant Finance',
    address: '0x00000',
  },
  plutus: {
    id: 'plutus',
    name: 'PlutusDAO',
    address: '0x00000',
  },
  pendle: {
    id: 'pendle',
    name: 'Pendle Finance',
    address: '0x00000',
  },
  tender: {
    id: 'tender',
    name: 'Tender Finance',
    address: '0x00000',
  },
  lodestar: {
    id: 'lodestar',
    name: 'Lodestar Finance',
    address: '0x00000',
  },
  perennial: {
    id: 'perennial',
    name: 'Perennial Finance',
    address: '0x00000',
  },
  vela: {
    id: 'vela',
    name: 'Vela Protocol',
    address: '0x00000',
  },
  dolomite: {
    id: 'dolomite',
    name: 'Dolomite DEX',
    address: '0x00000',
  },
  buffer: {
    id: 'buffer',
    name: 'Buffer Finance',
    address: '0x00000',
  },
  poolshark: {
    id: 'poolshark',
    name: 'PoolShark Finance',
    address: '0x00000',
  },
  rodeo: {
    id: 'rodeo',
    name: 'Rodeo DeFi',
    address: '0x00000',
  },
  rosywhale: {
    id: 'rosywhale',
    name: 'RosyWhale Protocol',
    address: '0x00000',
  },
  chronos: {
    id: 'chronos',
    name: 'Chronos DeFi',
    address: '0x00000',
  },
  mugen: {
    id: 'mugen',
    name: 'Mugen Finance',
    address: '0x00000',
  },
  olive: {
    id: 'olive',
    name: 'Olive Finance',
    address: '0x00000',
  },
  redacted: {
    id: 'redacted',
    name: 'Redacted Protocol',
    address: '0x00000',
  },
  timeswap: {
    id: 'timeswap',
    name: 'TimeSwap DeFi',
    address: '0x00000',
  },
  y2k: {
    id: 'y2k',
    name: 'Y2K Finance',
    address: '0x00000',
  },
  blockchaintraders: {
    id: 'blockchaintraders',
    name: 'Blockchain Traders',
    address: '0x00000',
  },
  camelot: {
    id: 'camelot',
    name: 'Camelot DEX',
    address: '0x00000',
  },
  penpie: {
    id: 'penpie',
    name: 'Penpie',
    address: '0x00000',
  },
};
