import { arbitrum, arbitrumGoerli } from 'wagmi/chains';

export const coingeckoEndpoint = 'https://api.coingecko.com/api/v3';

export const coingeckoCoinIds: Record<number, string> = {
  [arbitrum.id]: 'arbitrum-one',
  [arbitrumGoerli.id]: 'arbitrum-goerli',
};

export const defiLlamaEndpoint = 'https://coins.llama.fi';
