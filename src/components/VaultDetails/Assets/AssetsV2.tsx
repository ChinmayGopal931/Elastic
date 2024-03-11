// your imports remain the same

import { UnderlyingAsset } from 'state/vault/types';
import { DetailBaseTable } from '../../UI/BaseTable/BaseTable';
import { useMemo } from 'react';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import Skeleton from 'components/UI/LoadingText/Skeleton';
import { HexAddress } from 'lib/constants';
import AssetAllocation from 'components/UI/AssetAllocation/AssetAllocation';
import { formatValue } from 'lib/helpers/helpers';

type Props = {
  currentVaultAddress: HexAddress;
  assets: UnderlyingAsset[] | undefined;
  tvl: number;
};

const AssetsV2 = (props: Props) => {
  const { currentVaultAddress, assets, tvl } = props;

  // code specific to V2 here
  const V2columns = useMemo(() => {
    return [
      {
        Header: 'Assets Involved',
        accessor: (properties: UnderlyingAsset) => {
          return properties?.symbol && properties?.name ? (
            <div className="flex flex-row items-end">
              <SymbolLogo symbol={properties?.symbol} height={20} width={20} />
              <p className="mx-2 body-medium-14 font-semibold text-sm">{properties?.name}</p>
              <p className="text-ucla_blue font-semibold text-xs mb-[-2px] ">
                {properties?.symbol}
              </p>
            </div>
          ) : (
            <Skeleton />
          );
        },
      },
    ];
  }, [currentVaultAddress]);

  const data = useMemo(() => assets || [], [assets]);

  const V2 = { columns: V2columns, data: data };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        {data && (
          <DetailBaseTable
            options={V2}
            sort
            currentPage={1}
            pageSize={50}
            onPageChange={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default AssetsV2;
