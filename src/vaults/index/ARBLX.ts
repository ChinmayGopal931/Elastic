import { BigNumber } from 'ethers';
import { getTokenAddress, protocols } from 'lib/constants';
import { IVaultData } from 'state/vault/types';

export const ARBLX: IVaultData = {
  address: '0x4dfac5dFE92B79cD56614743D29BE17f0824f5A6',
  name: 'ArbLending Index',
  symbol: 'ARBLX',
  owner: protocols.factordao,
  tags: ['Ecosystem', 'Index'],
  description:
    'The ArbLending Index provides diversified, one-click exposure to the governance tokens of the leading lending platforms on Arbitrum. This index monitors and captures the growth and development of innovative borrowing and lending solutions.',
  underlyingAssets: [
    {
      tokenAddress: getTokenAddress('rdnt'),
      ratio: BigNumber.from('5000'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('lode'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('tnd'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
  ],
  vaultType: 'genesis',
  strategyType: 'single',
};
