import {
  ContractAddresses as FactorContractAddresses,
  getContractAddressesForChainOrThrow,
} from 'contract';

export type ContractAddresses = FactorContractAddresses;

interface AppConfig {
  jsonRpcUri: string;
  wsRpcUri: string;
  subgraphApiUri: string;
}

export enum ChainId {
  Mainnet = 1,
  Goerli = 5,
  Polygon = 137,
  Localhost = 1337,
  Hardhat = 31337,
  Arbitrum = 42161,
  ArbitrumGoerli = 421613,
}

type SupportedChains = ChainId.Arbitrum | ChainId.ArbitrumGoerli | ChainId.Hardhat;

export const ETHERSCAN_API_KEY =
  import.meta.env.VITE_REACT_APP_ETHERSCAN_API_KEY || process.env.VITE_REACT_APP_ETHERSCAN_API_KEY;

const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY || process.env.VITE_ALCHEMY_API_KEY;

const VITE_HARDHAT_NETWORK_JSON_RPC =
  import.meta.env.VITE_HARDHAT_NETWORK_JSON_RPC || process.env.VITE_HARDHAT_NETWORK_JSON_RPC!;

const VITE_HARDHAT_NETWORK_WEBSOCKET =
  import.meta.env.VITE_HARDHAT_NETWORK_WEBSOCKET || process.env.VITE_HARDHAT_NETWORK_WEBSOCKET;

const VITE_HARDHAT_NETWORK_SUBGRAPH =
  import.meta.env.VITE_HARDHAT_NETWORK_SUBGRAPH || process.env.VITE_HARDHAT_NETWORK_SUBGRAPH!;

export const getChainRPC = (chainId: SupportedChains): AppConfig => {
  if (chainId == ChainId.Arbitrum) {
    return {
      jsonRpcUri: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      wsRpcUri: `wss://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      subgraphApiUri: '',
    } as AppConfig;
  }

  // Hardhat
  if (chainId == ChainId.Hardhat && VITE_HARDHAT_NETWORK_JSON_RPC)
    return {
      jsonRpcUri: VITE_HARDHAT_NETWORK_JSON_RPC,
      wsRpcUri: VITE_HARDHAT_NETWORK_WEBSOCKET,
      subgraphApiUri: VITE_HARDHAT_NETWORK_SUBGRAPH,
    } as AppConfig;

  return {
    jsonRpcUri: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    wsRpcUri: `wss://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
    subgraphApiUri: '',
  } as AppConfig;
};

const getAddresses = (): ContractAddresses => {
  let factorAddresses = {} as FactorContractAddresses;
  try {
    factorAddresses = getContractAddressesForChainOrThrow(window.CHAIN_ID);
  } catch {}

  if (window.CHAIN_ID === 42161) {
    return {
      ...factorAddresses,
    };
  }

  return { ...factorAddresses };
};

export const getApiURL = (chainId: SupportedChains): string => {
  return ``;
};

export const getBotApiUrl = (chainId: SupportedChains): string => {
  if (chainId == ChainId.Arbitrum) {
    return ``;
  }

  return ``;
};

export const config = () => ({
  app: getChainRPC(window.CHAIN_ID),
  addresses: getAddresses(),
  apiUrl: getApiURL(window.CHAIN_ID),
  botApiUrl: getBotApiUrl(window.CHAIN_ID),
});

export default config;
