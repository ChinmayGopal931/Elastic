// Vaults
import { ARBDX } from './ARBDX';
import { ARBLX } from './ARBLX';
import { ARDI } from './ARDI';
import { RNDTX } from './RNDTX';

// Utils
import { arbitrum, hardhat } from 'wagmi/chains';
import { Collection, ObjectCollection } from 'vaults/types';

export const INDEX_VAULTS_ARR: Collection = {
  [arbitrum.id]: [ARDI, ARBLX, ARBDX, RNDTX],
  [hardhat.id]: [],
};

export const INDEX_VAULTS_OBJ: ObjectCollection = {
  [arbitrum.id]: {
    '0x69d2EaD28210ef7Ed10C43A8aa86e0e756f06A27': ARBDX,
    '0x95c34a4effc5eef480c65e2865c63ee28f2f9c7e': RNDTX,
    '0xe5cD0D83AFDdF3e3696861dF9DeBBb417C7378b4': ARDI,
    '0x4dfac5dFE92B79cD56614743D29BE17f0824f5A6': ARBLX,
  },
  [hardhat.id]: {},
};
