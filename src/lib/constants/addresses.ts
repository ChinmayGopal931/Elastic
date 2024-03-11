import { arbitrum, arbitrumGoerli, hardhat } from 'wagmi/chains';
import { HexAddress } from './utils';

export const stakingAddresses: Record<string, { [key: string]: string }> = {
  [arbitrum.id]: {
    ambassador: '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844',
    liquidity_provider: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    builder: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
  },
  [arbitrumGoerli.id]: {
    ambassador: '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844',
    liquidity_provider: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
    builder: '0x0e3cC2c4FB9252d17d07C67135E48536071735D9',
  },
};

export interface TokenAddress {
  [key: string]: string;
}

export function getTokenAddress(symbol: string): string {
  const tokenAddress: TokenAddress = {
    bfr: '0x1a5b0aaf478bf1fda7b934c76e7692d722982a6d',
    dpx: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
    gmx: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    gns: '0x18c11fd286c5ec11c3b683caa813b77f5163a122',
    grail: '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8',
    jones: '0x10393c20975cf177a3513071bc110f7962cd67da',
    pendle: '0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8',
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    lyra: '0x079504b86d38119f859c4194765029f692b7b7aa',
    tusdc: '0x068485a0f964b4c3d395059a19a05a8741c48b4e',
    vlp: '0x4e0d4a5a5b4faf5c2ecc1c63c8d19bb0804a96f1',
    lode: '0xf19547f9ed24aa66b03c3a552d181ae334fbb8db',
    pls: '0x51318b7d00db7acc4026c88c3952b66278b6a67f',
    rdnt: '0x3082cc23568ea640225c2467653db90e9250aaa0',
    tnd: '0xc47d9753f3b32aa9548a7c3f30b6aec3b2d2798c',
    usdc: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    vela: '0x088cd8f5ef3652623c22d48b1605dcfe860cd704',
    vsta: '0xa684cd057951541187f288294a1e1c2646aa2d24',
    y2k: '0x65c936f008bc34fe819bce9fa5afd9dc2d49977f',
    fctr: '0x6dd963c510c2d2f09d5eddb48ede45fed063eb36',
    sarb: '0x0efe65B6f24d46af9Ce261EE01b1f1A32202e22F',
    rusdc: '0x48a29E756CC1C097388f3B2f3b570ED270423b3d',
    glp: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',
    plvglp: '0x5326e71ff593ecc2cf7acae5fe57582d6e74cff1',
    joe: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07', //adding
    sglp: '0x5402B5F40310bDED796c7D0F3FF6683f5C0cFfdf',
    smlp: '0x0a9bbf8299FEd2441009a7Bb44874EE453de8e5D',
  };

  return tokenAddress[symbol.toLowerCase()] as string;
}

export const rewardsAddress: {
  [key: string]: HexAddress;
} = {
  [arbitrum.id]: '0xF57cF5Daa2d90A54e144aA2F2F77CF7a74A2F315',
  [hardhat.id]: '0xd801480b527Cf1C32Efa6d5B93A7638C15629a2F',
};

export const utilsRewardsAddress: {
  [key: string]: HexAddress;
} = {
  [arbitrum.id]: '0xD6AAd3A3aA37b60dFA274E100BB931637cE5CC46',
  [hardhat.id]: '0x26F4Cc63568A21e2773aEb2691dD5cdDFE20f935',
};
