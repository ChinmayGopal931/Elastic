import { gql } from 'graphql-request';

export const VaultDepositorsQuery = gql`
  query newDepositorQuery($vaultAddress: String!) {
    userVaultDatas(
      where: { vault: $vaultAddress }
      orderBy: shareBalanceRaw
      orderDirection: desc
    ) {
      shareBalance
      shareBalanceRaw
      userAddress
    }
  }
`;

export const allVaultsDepositors = gql`
  query allVaultsDepositors {
    vaults {
      id
      name
      uniqueDepositorCount
    }
  }
`;

export const vaultUnderlyingAssetsQuery = gql`
  query vaultUnderlyingAssetsQuery($vaultAddress: String!) {
    genesisVault(id: $vaultAddress) {
      underlyingAssets {
        ratio
        token {
          name
          id
          symbol
          decimals
        }
      }
    }
  }
`;

export const profitAndLossQuery = gql`
  query profitAndLossQuery($pnlId: String!) {
    profitAndLossData(id: $pnlId) {
      id
      vault {
        id
        asset {
          id
          decimals
        }
      }
      user {
        id
      }
      totalDeposit
      totalSharesMinted
      profitAndLoss
      lastUpdated
    }
  }
`;

export const queryUnderlyingAssetDayDatas = (vaultAddress: string, days: number) => gql`
  {
    underlyingAssetDayDatas(
      first: ${days}
      where: { vault_: { id: "${vaultAddress}" } }
      orderBy: date
      orderDirection: asc
    ) {
      id
      balance
      totalShares
      date
      underlyingAsset {
        token {
          symbol
          decimals
        }
      }
    }
  }
`;

export const getUnderlyingAssetDataDays = gql`
  query getUnderlyingAssetDayDatas($vaultAddress: String!, $first: Int) {
    vaultGenesis(id: $vaultAddress) {
      id
      vaultDayData(orderBy: date, orderDirection: desc, first: $first) {
        date
        totalShares
        underlyingAssetDayData {
          balance
          underlyingAsset {
            token {
              decimals
              id
              symbol
              name
            }
            ratio
          }
        }
      }
    }
  }
`;

export const getProfitAndLoss = (userAddress: string) => gql`
  {
    profitAndLossData(
      id: "${userAddress}"
    ) {
      averageCost
      averageCostRaw
    }
  
  }
`;

export const genesisVaultUnderlyingAssetsQuery = gql`
  query genesisVaultUnderlyingAssetsQuery($vaultAddress: String!) {
    vaultGenesis(id: $vaultAddress) {
      id
      vaultHourData(orderBy: date, orderDirection: desc, first: 1) {
        date
        underlyingAssetHourData {
          underlyingAsset {
            token {
              decimals
              id
              symbol
              name
            }
            ratio
          }
          balance
        }
        totalShares
      }
    }
  }
`;

export const genesisVaultFees = gql`
  query genesisVaultFees($vaultAddress: String!) {
    vaultGenesis(id: $vaultAddress) {
      depositFee
      protocolFee
      performanceFee
      withdrawFee
    }
  }
`;

export const genesisVaultsAddressesQuery = gql`
  query genesisVaultsAddresses {
    vaultGeneses {
      id
    }
  }
`;

export const getVaultGenesisHourDataQuery = () => {
  return gql`
    {
      vaultGeneses {
        id
        vaultHourData(orderBy: date, orderDirection: desc, first: 1) {
          date
          underlyingAssetHourData {
            underlyingAsset {
              token {
                id
              }
            }
            balance
          }
          totalShares
        }
      }
    }
  `;
};

export const getTotalVaultDepositor = gql`
  {
    vaultGeneses {
      id
      uniqueDepositorCount
    }
  }
`;

export const getVault24HourData = (timeStamp: number) => gql`
{
  vaultGeneses {
    id
    vaultHourData(
      orderBy: date
      orderDirection: desc
      where: {date_gte: ${timeStamp}}
    ) {
      date
      volume
    }
  }
}
`;

export const getVault24HourDataByAddress = (id: string) => gql`
{
  vaultGeneses(where: {id: ${id}}) {
    id
    vaultHourData {
      volume
    }
  }
}
`;

export const getAllVaultDayByDayData = (timeStamp: number) => gql`
  {
    vaultGeneses {
      id
      vaultHourData(
        orderBy: date,
        orderDirection: desc
        where: {date_gte: ${timeStamp}}
        ) {
        id
        volume
        date
      }
    }
  }
`;

export const getAllVaults = () => gql`
  {
    vaultGeneses {
      id
      underlyingAssets {
        token {
          name
          symbol
          decimals
          id
        }
      }
    }
  }
`;

export const genesisVaultUserInformation = (address: string) => gql`
{
  users(where: {id: "${address}"}) {
    deposits {
      assetAmount
      vault{
        id
      }
    }
    userVaultData {
      vaultAddress
    }
    profitAndLoss {
      averageCost
      vault{
        id
      }
    }
  }
}`;

export const genesisUserVaultUnderlyingAssetsQuery = () => gql`
  {
    vaultGeneses {
      id
      vaultHourData(orderBy: date, orderDirection: desc, first: 1) {
        date
        underlyingAssetHourData {
          underlyingAsset {
            token {
              decimals
              id
              name
              symbol
            }
            ratio
          }
          balance
        }
        totalShares
      }
    }
  }
`;

export const myRewardsQuery = gql`
  query MyRewardsQuery($userAddress: String!) {
    rewardClaims(
      where: { user_: { id: $userAddress } }
      orderBy: rewardScheduleBlocknumber
      orderDirection: desc
    ) {
      id
      rewardScheduleBlocknumber
      amount
      user {
        id
      }
    }
  }
`;

export const allRewardsQuery = gql`
  query AllRewardsQuery {
    rewardSchedules(orderBy: rewardScheduleBlocknumber, orderDirection: desc) {
      rewardScheduleBlocknumber
      totalRewards
      totalRewardsRaw
    }
  }
`;

export const getLatestDeposit = gql``;

export const getAllDepositsQuery = () => gql``;

// ██╗░░░██╗██████╗░  ░██████╗░██╗░░░██╗███████╗██████╗░██╗███████╗░██████╗
// ██║░░░██║╚════██╗  ██╔═══██╗██║░░░██║██╔════╝██╔══██╗██║██╔════╝██╔════╝
// ╚██╗░██╔╝░░███╔═╝  ██║██╗██║██║░░░██║█████╗░░██████╔╝██║█████╗░░╚█████╗░
// ░╚████╔╝░██╔══╝░░  ╚██████╔╝██║░░░██║██╔══╝░░██╔══██╗██║██╔══╝░░░╚═══██╗
// ░░╚██╔╝░░███████╗  ░╚═██╔═╝░╚██████╔╝███████╗██║░░██║██║███████╗██████╔╝
// ░░░╚═╝░░░╚══════╝  ░░░╚═╝░░░░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝╚══════╝╚═════╝░

export const getAllVaultsV2 = () => gql``;

export const getAllVaultDayByDayDataV2 = (timeStamp: number) => gql``;

export const genesisUserVaultUnderlyingAssetsQueryV2 = (vault: string) => gql``;

export const getVaultGenesisHourDataQueryV2 = () => {
  return gql``;
};

export const getVault24HourDataV2 = (timeStamp: number) => gql``;

export const getTotalVaultDepositorV2 = gql``;

/////

export const genesisVaultUserInformation2 = gql``;
