// App
import { useBoundStore } from 'state/store';

// Utils
import { HexAddress } from 'lib/constants';
import { formatValue } from 'lib/helpers/helpers';

// Hooks

// Components
import AssetAllocation from 'components/UI/AssetAllocation/AssetAllocation';
import AssetsV1 from './AssetsV1';
import AssetsV2 from './AssetsV2';
import { useEffect } from 'react';

const Assets = () => {
  const currentVault = useBoundStore((state: any) => state.currentVault);

  const assetsInvolved = currentVault?.underlyingAssets;

  const isV1 = currentVault?.vaultType === 'genesis';

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row"></div>
    </div>
  );
};

export default Assets;
