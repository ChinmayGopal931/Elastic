export interface Asset {
  name: string;
  symbol: string;
  icon: string;
  address: string;
  amount: string;
  decimals: string;
  ratio: string;
}

export interface Params {
  equalWeight: boolean;
  marketCapWeight: boolean;
  frequency: string;
}

export interface Permissions {
  vaultPrivacy: boolean;
  vaultModification: boolean;
  // TODO: Fix this, keepign this for the sake of design. Once the design is complete we will create managers and strategist data
  managers: Asset[];
  strategists: Asset[];
}

export interface Fees {
  managementFee: number;
  performanceFee: number;
  sharedFee: number;
}

export interface VaultInfo {
  name: string;
  symbol: string;
  // creatorAddress: string;
  description: string;
  favicon: '';
  creator_name: '';
}

export interface AssetsAndParams {
  assets: Asset[];
  params: Params;
}

export interface PermissionsAndFees {
  permissions: Permissions;
  fees: Fees;
}

export interface VaultForm {
  vaultInfo: VaultInfo;
  assetsAndParams: AssetsAndParams;
  permissionsAndFees: PermissionsAndFees;
}
