import { Chain, connectorsForWallets } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  trustWallet,
  walletConnectWallet,
  zerionWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { getChainRPC } from 'config';
import { configureChains, createClient } from 'wagmi';
import { arbitrum, mainnet, baseGoerli, optimism, polygon, bsc, sepolia } from 'wagmi/chains';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

export const { chains, provider, webSocketProvider } = configureChains(
  [arbitrum, sepolia, mainnet, baseGoerli, optimism, polygon, bsc],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: 'https://arb-mainnet.g.alchemy.com/v2/lkFGfQpATYx05UzRcgRDUalSw6CCSq8a',
        webSocket: getChainRPC(chain.id)!.wsRpcUri,
      }),
    }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: 'https://eth-sepolia.g.alchemy.com/v2/TUcjLJ0Hmf802Dv_b5PwpIjd_YxfuvUn',
        webSocket: getChainRPC(chain.id)!.wsRpcUri,
      }),
    }),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: 'https://base-goerli.g.alchemy.com/v2/QiWIrTRgrvMPrNEShlNU88q8EAfdNILd',
        webSocket: getChainRPC(chain.id)!.wsRpcUri,
      }),
    }),
  ]
);

const projectId = '12aecce612332ba0a0b113c19978a069';

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains, projectId }),
      walletConnectWallet({ chains, projectId }),
      trustWallet({ chains, projectId }),
    ],
  },
  {
    groupName: 'Additional',
    wallets: [
      coinbaseWallet({
        appName: 'DutchX-interface',
        chains,
      }),
      safeWallet({ chains }),
      ledgerWallet({ chains, projectId }),
      rainbowWallet({ chains, projectId }),
      rabbyWallet({ chains }),
      argentWallet({ chains, projectId }),
      zerionWallet({ chains, projectId }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});
