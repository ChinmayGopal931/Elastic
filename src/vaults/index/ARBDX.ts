import { BigNumber } from 'ethers';
import { getTokenAddress, protocols } from 'lib/constants';
import { IVaultData } from 'state/vault/types';

export const ARBDX: IVaultData = {
  address: '0x69d2EaD28210ef7Ed10C43A8aa86e0e756f06A27',
  name: 'ArbDeFi Index',
  symbol: 'ARBDX',
  owner: protocols.factordao,
  tags: ['Ecosystem', 'Index'],
  description:
    'Introducing the ArbDeFi Index, your gateway to the thriving Arbitrum DeFi ecosystem. By tracking the growth and innovation of these prominent protocols, ARBDX provides an accessible entry to the dynamic world of decentralized finance on Arbitrum.',
  underlyingAssets: [
    {
      tokenAddress: getTokenAddress('gmx'),
      ratio: BigNumber.from('1500'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('gns'),
      ratio: BigNumber.from('1200'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('rdnt'),
      ratio: BigNumber.from('1000'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('dpx'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('vela'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('lode'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('grail'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('tnd'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('jones'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
    {
      tokenAddress: getTokenAddress('fctr'),
      ratio: BigNumber.from('900'),
      decimals: BigNumber.from('18'),
    },
  ],
  vaultType: 'genesis',
  strategyType: 'single',
};
