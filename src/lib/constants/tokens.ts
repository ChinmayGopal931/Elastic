// Utils
import { arbitrum, arbitrumGoerli, hardhat } from 'wagmi/chains';
import config from 'config';
import { HexAddress } from './utils';

// Images
import FCTR from 'assets/tokens/FCTR.svg';

export type Token = {
  name: string;
  symbol: string;
  decimals: number;
  address: HexAddress;
};

export type MappedTokens = {
  [key: number]: {
    [key: string]: Token;
  };
};

export const supportedTokensAddresses: Record<string, { [key: string]: HexAddress }> = {
  [arbitrum.id]: {
    DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    ETH: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    FCTR: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    USDT: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    MUX: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    MUXLP: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    SMLP: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    SUSDCARB: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    SUSDC: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    LUSDC: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    LODE: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    IUSDC: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    SUSDCGMX: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    PNP: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
  },
  [arbitrumGoerli.id]: {
    DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    ETH: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    FCTR: '0xEED9d7A388267556169d2F73fF457befedeF1e0a',
    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    USDT: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
  },
  [hardhat.id]: {
    ETH: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9', // TODO: Need to add real contract address
    DAI: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', // TODO: Need to add real contract address
    BFR: '0x1a5b0aaf478bf1fda7b934c76e7692d722982a6d',
    DPX: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
    GMX: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    GNS: '0x18c11fd286c5ec11c3b683caa813b77f5163a122',
    GRAIL: '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8',
    JONES: '0x10393c20975cf177a3513071bc110f7962cd67da',
    LYRA: '0x079504b86d38119f859c4194765029f692b7b7aa',
    LODE: '0xF19547f9ED24aA66b03c3a552D181Ae334FBb8DB',
    PLS: '0x51318b7d00db7acc4026c88c3952b66278b6a67f',
    RDNT: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    TND: '0xC47D9753F3b32aA9548a7C3F30b6aEc3B2d2798C',
    USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    VELA: '0x088cd8f5ef3652623c22d48b1605dcfe860cd704',
    VSTA: '0xa684cd057951541187f288294a1e1c2646aa2d24',
    Y2K: '0x65c936f008bc34fe819bce9fa5afd9dc2d49977f',
    FCTR: '0x6dD963C510c2D2f09d5eDdB48Ede45FeD063Eb36',
    SARB: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F',
    ARB: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    SILO: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    RUSDC: '0x48a29E756CC1C097388f3B2f3b570ED270423b3d',
    PTWSTETH: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    PTSTETH: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    WSTETH: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    WETH: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    PENDLE: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F', // TODO: Need to add real contract address
    GLP: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',
    PLVGLP: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
    SGLP: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',
    SMLP: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D',
    JOE: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf', // TODO: Need to add real contract address
    SJOE: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    MUX: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    MUXLP: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    ESVELA: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    TUSDC: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    PXGMX: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    VLP: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    SUSDC: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    RETH: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    PTRETH: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
    PENDLELPT: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D', // TODO: Need to add real contract address
  },
};

export const supportedTokens: MappedTokens = {
  [arbitrum.id]: {
    DAI: {
      name: 'DAI',
      symbol: 'DAI',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].DAI,
    },
    USDC: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      address: supportedTokensAddresses[arbitrum.id].USDC,
    },
    SUSDC: {
      name: 'sUSDC',
      symbol: 'SUSDC',
      decimals: 6,
      address: supportedTokensAddresses[arbitrum.id].SUSDC,
    },
    USDT: {
      name: 'USDT',
      symbol: 'USDT',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].USDT,
    },
    ETH: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].ETH,
    },
    PLS: {
      name: 'Plutus',
      symbol: 'PLS',
      decimals: 18,
      address: '0x51318b7d00db7acc4026c88c3952b66278b6a67f',
    },
    GRAIL: {
      name: 'Camelot',
      symbol: 'GRAIL',
      decimals: 18,
      address: '0x3d9907f9a368ad0a51be60f7da3b97cf0982d8',
    },
    GMX: {
      name: 'GMX',
      symbol: 'GMX',
      decimals: 18,
      address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    },
    DPX: {
      name: 'Dopex',
      symbol: 'DPX',
      decimals: 18,
      address: '0xeec2be5c91ae7f8a338e1e5f3b5de49d07afdc81',
    },
    JONES: {
      name: 'Jones DAO',
      symbol: 'JONES',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    MUX: {
      name: 'MUX',
      symbol: 'MUX',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    SMLP: {
      name: 'sMLP',
      symbol: 'SMLP',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    SGLP: {
      name: 'sGLP',
      symbol: 'SGLP',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    MUXLP: {
      name: 'MUXLP',
      symbol: 'MUXLP',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    SUSDCARB: {
      name: 'sUSDC-ARB',
      symbol: 'SUSDCARB',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    SUSDCGMX: {
      name: 'sUSDC-GMX',
      symbol: 'SUSDCGMX',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    LUSDC: {
      name: 'LUSDC',
      symbol: 'LUSDC',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    IUSDC: {
      name: 'IUSDC',
      symbol: 'IUSDC',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    LODE: {
      name: 'Lode',
      symbol: 'LODE',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    SILO: {
      name: 'SILO',
      symbol: 'SILO',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    JOE: {
      name: 'JOE',
      symbol: 'JOE',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    PTRETH: {
      name: 'PT rETH',
      symbol: 'PTRETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    RETH: {
      name: 'rETH',
      symbol: 'RETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    PENDLE: {
      name: 'PENDLE',
      symbol: 'PENDLE',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    PENDLELPT: {
      name: 'PENDLE-LPT',
      symbol: 'PENDLELPT',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    WETH: {
      name: 'wETH',
      symbol: 'WETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    WSTETH: {
      name: 'wstETH',
      symbol: 'WSTETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    PTSTETH: {
      name: 'PT stETH',
      symbol: 'PTSTETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    PTWSTETH: {
      name: 'PT wstETH',
      symbol: 'PTWSTETH',
      decimals: 18,
      address: '0x10393c20975cf177a3513071bc110f7962cd67da',
    },
    VLP: {
      name: 'VLP',
      symbol: 'VLP',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].VLP,
    },
    VELA: {
      name: 'VELA',
      symbol: 'VELA',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].ESVELA,
    },
    ESVELA: {
      name: 'esVELA',
      symbol: 'ESVELA',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].ESVELA,
    },
    PNP: {
      name: 'PNP',
      symbol: 'PNP',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].PNP,
    },
  },
  [arbitrumGoerli.id]: {
    FCTR: {
      name: 'Factor',
      symbol: 'FCTR',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].FCTR,
    },
    DAI: {
      name: 'DAI',
      symbol: 'DAI',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].DAI,
    },
    USDC: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].USDC,
    },
    USDT: {
      name: 'USDT',
      symbol: 'USDT',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].USDT,
    },
    ETH: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: supportedTokensAddresses[arbitrum.id].ETH,
    },
  },
  [hardhat.id]: {
    ETH: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].ETH,
    },
    DAI: {
      name: 'DAI',
      symbol: 'DAI',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].DAI,
    },
    ESVELA: {
      name: 'esVELA',
      symbol: 'ESVELA',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].ESVELA,
    },
    SUSDC: {
      name: 'sUSDC',
      symbol: 'SUSDC',
      decimals: 6,
      address: supportedTokensAddresses[hardhat.id].SUSDC,
    },
    VLP: {
      name: 'VLP',
      symbol: 'VLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].VLP,
    },
    TUSDC: {
      name: 'tUSDC',
      symbol: 'TUSDC',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].TUSDC,
    },
    BFR: {
      name: 'Buffer',
      symbol: 'BFR',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].BFR,
    },
    PENDLE: {
      name: 'PENDLE',
      symbol: 'PENDLE',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PENDLE,
    },
    PXGMX: {
      name: 'PXGMX',
      symbol: 'PXGMX',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PXGMX,
    },
    WETH: {
      name: 'wETH',
      symbol: 'WETH',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].WETH,
    },
    WSTETH: {
      name: 'wsETH',
      symbol: 'WSTETH',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].WSTETH,
    },
    PTWSTETH: {
      name: 'PT wsETH',
      symbol: 'PTWSTETH',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PTWSTETH,
    },
    PTSTETH: {
      name: 'PT stETH',
      symbol: 'PTSTETH',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PTSTETH,
    },
    DPX: {
      name: 'Dopex',
      symbol: 'DPX',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].DPX,
    },
    GMX: {
      name: 'GMX',
      symbol: 'GMX',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].GMX,
    },
    GNS: {
      name: 'Genesis',
      symbol: 'GNS',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].GNS,
    },
    GRAIL: {
      name: 'Camelot',
      symbol: 'GRAIL',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].GRAIL,
    },
    JONES: {
      name: 'Jones DAO',
      symbol: 'JONES',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].JONES,
    },
    LYRA: {
      name: 'Lyra',
      symbol: 'LYRA',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].LYRA,
    },
    LODE: {
      name: 'Lode',
      symbol: 'LODE',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].LODE,
    },
    PLS: {
      name: 'Plutus',
      symbol: 'PLS',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PLS,
    },
    RDNT: {
      name: 'Radiant',
      symbol: 'RDNT',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].RDNT,
    },
    TND: {
      name: 'Tundra',
      symbol: 'TND',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].TND,
    },
    USDC: {
      name: 'USDC',
      symbol: 'USDC',
      decimals: 6,
      address: supportedTokensAddresses[hardhat.id].USDC,
    },
    VELA: {
      name: 'VELA',
      symbol: 'VELA',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].VELA,
    },
    VSTA: {
      name: 'Vista',
      symbol: 'VSTA',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].VSTA,
    },
    Y2K: {
      name: 'Y2K',
      symbol: 'Y2K',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].Y2K,
    },
    FCTR: {
      name: 'Factor',
      symbol: 'FCTR',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].FCTR,
    },
    SARB: {
      name: 'sARB',
      symbol: 'SARB',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].SARB,
    },
    ARB: {
      name: 'ARB',
      symbol: 'ARB',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].ARB,
    },
    SILO: {
      name: 'SILO',
      symbol: 'SILO',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].SILO,
    },
    RUSDC: {
      name: 'rUSDC',
      symbol: 'RUSDC',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].RUSDC,
    },
    GLP: {
      name: 'GLP',
      symbol: 'GLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].GLP,
    },
    PLVGLP: {
      name: 'plvGLP',
      symbol: 'PLVGLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].PLVGLP,
    },
    SGLP: {
      name: 'sGLP',
      symbol: 'SGLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].SGLP,
    },
    SMLP: {
      name: 'sMLP',
      symbol: 'SMLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].SMLP,
    },
    JOE: {
      name: 'JOE',
      symbol: 'JOE',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].JOE,
    },
    SJOE: {
      name: 'sJOE',
      symbol: 'SJOE',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].SJOE,
    },
    MUX: {
      name: 'MUX',
      symbol: 'MUX',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].MUX,
    },
    MUXLP: {
      name: 'MUXLP',
      symbol: 'MUXLP',
      decimals: 18,
      address: supportedTokensAddresses[hardhat.id].MUXLP,
    },
  },
};

// TOOD: need to add the rest of the tokens
export const factorToken = {
  address: config().addresses.factorToken as HexAddress,
  decimals: 18,
  logo: FCTR,
  name: 'FACTOR',
  symbol: 'FCTR',
};
