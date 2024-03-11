import { BigNumber } from 'ethers';
import { getTokenAddress, protocols } from 'lib/constants';
import { IVaultData } from 'state/vault/types';

export const ARDI: IVaultData = {
  address: '0xe5cD0D83AFDdF3e3696861dF9DeBBb417C7378b4',
  name: 'ArbDerivatives Index',
  symbol: 'ARDI',
  owner: protocols.factordao,
  tags: ['Ecosystem', 'Index'],
  description:
    'Arbitrum has emerged as a home for innovative DeFi, led by a number of innovative derivatives products. The ArbDerivatives Index offers diversified, one-click exposure to the governance tokens of the leading derivatives protocols on Arbitrum. This index tracks the growth of the decentralized perpetual futures and options ecosystem on Arbitrum.',
  underlyingAssets: [
    {
      tokenAddress: getTokenAddress('gmx'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('dpx'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('vela'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('gns'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
  ],
  vaultType: 'genesis',
  strategyType: 'single',
};
