import { BigNumber } from 'ethers';
import { SupportedActions, getTokenAddress, protocols } from 'lib/constants';
import { supportedTokens } from 'lib/constants/tokens';
import { VaultDataCollection } from 'state/vault/types';
import { hardhat } from 'wagmi/chains';

export const dropdownOptions = [
  {
    title: 'PNL',
  },
  {
    title: 'AUM',
  },
];
export const metricsTheme = {
  type: 'metrics',
};

//!!!DUMMY DATA!!
export const metricData = [
  {
    date: '1681862400',
    aum: 0.001047024912639107,
    pnl: 1.0576009218576838,
  },
  {
    date: '1681863400',
    aum: 0.001047024912639107,
    pnl: 2.0576009218576838,
  },
  {
    date: '1681864400',
    aum: 0.001047024912639107,
    pnl: 3.0576009218576838,
  },
  {
    date: '1681865400',
    aum: 0.001047024912639107,
    pnl: 2.0576009218576838,
  },
  {
    date: '1681866400',
    aum: 0.001047024912639107,
    pnl: 5.0576009218576838,
  },
  {
    date: '1681867400',
    aum: 0.001047024912639107,
    pnl: 10.0576009218576838,
  },
];

export const testnetVaults: VaultDataCollection = {
  '0xfB92E3Ddf55aa013751887dBc2E346F6A5823861': {
    address: '0xfB92E3Ddf55aa013751887dBc2E346F6A5823861',
    name: 'Silo: sARB Auto-Compounder',
    description: 'The Rebalanced Borrowing Vault strategy uses USDC as the primary asset.',
    symbol: 'siloSAC',
    owner: protocols.silo,
    tags: ['Yield', 'Stake'],
    newDenominators: [supportedTokens[hardhat.id].SARB],
    underlyingAssets: [
      {
        name: 'sARB',
        symbol: 'SARB',
        tokenAddress: getTokenAddress('sarb'),
        ratio: BigNumber.from('6500'),
        decimals: BigNumber.from('18'),
      },
      {
        name: 'ARB',
        symbol: 'ARB',
        tokenAddress: getTokenAddress('arb'),
        ratio: BigNumber.from('6500'),
        decimals: BigNumber.from('18'),
      },
      {
        name: 'SILO',
        symbol: 'SILO',
        tokenAddress: getTokenAddress('silo'),
        ratio: BigNumber.from('6500'),
        decimals: BigNumber.from('18'),
      },
    ],
    vaultType: 'factorVault',
    strategyType: 'single',
    fee: [
      {
        name: 'Deposit Fee',
        rate: 0.3,
        type: 'percentage',
      },
      {
        name: 'Withdraw Fee',
        rate: 0.3,
        type: 'percentage',
      },
      {
        name: 'Swap Fee',
        rate: 0.1,
        type: 'percentage',
      },
    ],
    strategy: {
      vaultAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      strategyAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      strategyDescription:
        "The Rebalanced Borrowing Vault strategy uses USDC as the primary asset. Upon a user's USDC deposit into the Factor Vault, the vault takes on the role of borrower, staking the borrowed USDC for jUSDC. This strategy manages risk through periodic rebalancing, maintaining a safe liquidation factor.",
    },
    parameters: {
      risk: [
        {
          name: 'Liquidity Risk',
          tooltip: 'Add Liquidity Risk tooltip text here',
          value: 'Medium',
        },
        {
          name: 'Volatility Risk',
          tooltip: 'Add Volatility Risk tooltip text here',
          value: 'Medium',
        },
        {
          name: 'Diversification',
          tooltip: 'Add Diversification tooltip text here',
          value: 'High',
        },
      ],
    },
    strategies: [
      {
        step: 1,
        action: SupportedActions.LEND,
        fromToken: supportedTokens[hardhat.id].ARB,
        toToken: supportedTokens[hardhat.id].SARB,
        protocol: protocols.silo,
        description: 'Supply ARB tokens from the vault to the Silo protocol.',
      },
      {
        step: 2,
        action: SupportedActions.HARVEST,
        rewardTokens: [supportedTokens[hardhat.id].SILO],
        protocol: protocols.silo,
        description: 'Harvest the SILO rewards.',
      },
      {
        step: 3,
        action: SupportedActions.SWAP,
        fromToken: supportedTokens[hardhat.id].SILO,
        toToken: supportedTokens[hardhat.id].ARB,
        protocol: protocols.camelot,
        description: 'Swap SILO rewards for ARB tokens on Camelot.',
      },
      {
        step: 4,
        action: SupportedActions.LEND,
        fromToken: supportedTokens[hardhat.id].ARB,
        toToken: supportedTokens[hardhat.id].SARB,
        protocol: protocols.silo,
        description: 'Supply ARB tokens from the vault to the Silo protocol.',
      },
    ],
  },
};
