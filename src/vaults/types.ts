import { IVaultData } from 'state/vault/types';

export type Collection = {
  [key: number]: IVaultData[];
};

export type ObjectCollection = Record<number, Record<string, IVaultData>>;
