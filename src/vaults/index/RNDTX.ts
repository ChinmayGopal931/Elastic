import { BigNumber } from 'ethers';
import { getTokenAddress, protocols } from 'lib/constants';
import { IVaultData } from 'state/vault/types';

export const RNDTX: IVaultData = {
  address: '0x95c34a4effc5eef480c65e2865c63ee28f2f9c7e',
  name: 'Roundtable Index',
  symbol: 'RNDTX',
  owner: protocols.factordao,
  tags: ['Ecosystem', 'Index'],
  underlyingAssets: [
    {
      tokenAddress: getTokenAddress('gmx'),
      ratio: BigNumber.from('3500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('grail'),
      ratio: BigNumber.from('2500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('vela'),
      ratio: BigNumber.from('2000'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('jones'),
      ratio: BigNumber.from('2000'),
      decimals: BigNumber.from('18'),
    },
  ],
  vaultType: 'genesis',
  strategyType: 'single',
};
