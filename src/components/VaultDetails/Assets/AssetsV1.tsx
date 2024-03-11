// your imports remain the same

import { VaultStat } from 'state/vault/types';
import { DetailBaseTable } from '../../UI/BaseTable/BaseTable';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import Skeleton from 'components/UI/LoadingText/Skeleton';
import { formatValue } from 'lib/helpers/helpers';
import { useMemo } from 'react';
import { HexAddress } from 'lib/constants';
import { useGetGenesisVaultAssets } from 'state/vault/hooks';
import AssetAllocation from 'components/UI/AssetAllocation/AssetAllocation';

type Props = {
  currentVaultAddress: HexAddress;
  assets: VaultStat[];
  tvl: number;
};

const AssetsV1 = (props: Props) => {
  const { currentVaultAddress, assets } = props;

  // code specific to V1 here
  const V1columns = useMemo(() => {
    return [
      {
        Header: 'Asset',
        accessor: (properties: VaultStat) => {
          return properties?.symbol && properties?.name ? (
            <div className="flex flex-row items-end">
              <SymbolLogo symbol={properties?.symbol} height={20} width={20} />
              <p className="mx-2 body-medium-15 font-bold">{properties?.name}</p>
              <p className="body-regular-14 font-semibold mb-[-2px]">{properties?.symbol}</p>
            </div>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Balance',
        accessor: (properties: VaultStat) => {
          return properties?.balance ? (
            <p className="body-medium-14 text-sm ">
              {formatValue(+properties?.balance, false, '')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: '24H Change',
        accessor: (properties: VaultStat) => {
          const textColor =
            +properties?.dailyChange > 0
              ? 'text-success  text-sm font-bold'
              : 'text-error  text-sm font-bold';
          return properties?.dailyChange ? (
            <p className={textColor}>{formatValue(properties?.dailyChange, true, '')}</p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Value',
        accessor: (properties: VaultStat) => {
          return properties?.value ? (
            <p className="body-medium-14 ">{formatValue(properties?.value, false, 'USD')}</p>
          ) : (
            <Skeleton />
          );
        },
      },
    ];
  }, [currentVaultAddress]);

  const data = useMemo(() => assets || [], [assets]);

  const V1 = { columns: V1columns, data: data };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row">
        {data && (
          <DetailBaseTable
            options={V1}
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

export default AssetsV1;
