import { BigNumber } from 'ethers';
import { HexAddress } from 'lib/constants';

enum VaultGenesisId {
  CamelotRoundtable = '0x70e0bA845a1A0F2DA3359C97E0285013525FFC49',
  CamelotRounttableProduction = '0x95C34a4efFc5eEF480c65E2865C63EE28F2f9C7e',
  ArbDerivative = '0x70e0bA845a1A0F2DA3359C97E0285013525FFC49',
}

interface UnderlyingAsset {
  tokenAddress: string | HexAddress;
  ratio: BigNumber;
  decimals: BigNumber;
}

interface VaultGenesisSetting {
  name: string;
  symbol: string;
  denominator: string | HexAddress;
  depositFee: BigNumber;
  withdrawFee: BigNumber;
  performanceFee: BigNumber;
  protocolFee: BigNumber;
  denominatorDecimals?: number;
  underlyingAssets: UnderlyingAsset[];
}

export const vaultGenesis: Record<string, VaultGenesisSetting> = {
  ['0xd6e1afe5ca8d00a2efc01b89997abe2de47fdfaf']: {
    name: 'Roundtable',
    symbol: 'fROUNDs',
    denominator: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8' as HexAddress,
    depositFee: BigNumber.from('0'),
    withdrawFee: BigNumber.from('0'),
    performanceFee: BigNumber.from('0'),
    protocolFee: BigNumber.from('0'),
    denominatorDecimals: 6,

    underlyingAssets: [
      {
        tokenAddress: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a' as HexAddress,
        ratio: BigNumber.from('3500'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8' as HexAddress,
        ratio: BigNumber.from('2500'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704' as HexAddress,
        ratio: BigNumber.from('2000'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x10393c20975cF177a3513071bC110f7962CD67da' as HexAddress,
        ratio: BigNumber.from('2000'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
    ],
  },
  [VaultGenesisId.CamelotRounttableProduction]: {
    name: 'Roundtable',
    symbol: 'fROUNDs',
    denominator: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8' as HexAddress,
    depositFee: BigNumber.from('0'),
    withdrawFee: BigNumber.from('0'),
    performanceFee: BigNumber.from('0'),
    protocolFee: BigNumber.from('0'),
    denominatorDecimals: 6,

    underlyingAssets: [
      {
        tokenAddress: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a' as HexAddress,
        ratio: BigNumber.from('3500'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x3d9907F9a368ad0a51Be60f7Da3b97cf940982D8' as HexAddress,
        ratio: BigNumber.from('2500'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x088cd8f5eF3652623c22D48b1605DCfE860Cd704' as HexAddress,
        ratio: BigNumber.from('2000'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
      {
        tokenAddress: '0x10393c20975cF177a3513071bC110f7962CD67da' as HexAddress,
        ratio: BigNumber.from('2000'),
        decimals: BigNumber.from('18'),
      } as UnderlyingAsset,
    ],
  },
};
