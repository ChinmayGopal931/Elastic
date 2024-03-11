import { arbitrum, arbitrumGoerli } from 'wagmi/chains';

export const etherscanApiEndpoints: Record<number, string> = {
  [arbitrum.id]: 'https://arbiscan.io/',
  [arbitrumGoerli.id]: 'https://goerli.arbiscan.io/',
};
