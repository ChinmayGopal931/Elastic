import { Chain } from 'wagmi';
import { hardhat, arbitrum, arbitrumGoerli } from 'wagmi/chains';

export const supportedChains: Record<number, Chain> = {
  31337: hardhat,
  42161: arbitrum,
};

// TODO: Need to figure out this file
