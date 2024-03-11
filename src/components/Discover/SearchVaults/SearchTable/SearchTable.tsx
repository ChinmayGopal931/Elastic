// App
import { useEffect, useMemo, useState } from 'react';

// Hooks
import { useNavigate } from 'react-router-dom';
// import { useBoundStore } from 'state/store';
// import { IVaultData } from 'state/vault/types';

// Components
import { DetailBaseTable } from 'components/UI/BaseTable/BaseTable';
import Skeleton from 'components/UI/LoadingText/Skeleton';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import { useNetwork } from 'wagmi';
import { formatValue } from 'lib/helpers/helpers';

type Props = {
  userInput: string;
  vaultData: Partial<any>[];
  vaults: any[];
};

const SearchTable = (props: Props) => {
  const { userInput, vaultData, vaults } = props;
  const [resultData, setResultData] = useState<any[]>();

  //const setCurrentVault = useBoundStore((state: any) => state.setCurrentVault);
  const { chain } = useNetwork();
  const navigate = useNavigate();

  // useEffect(() => {
  //   setResultData(
  //     // vaults.map((vault: IVaultData) => {
  //     //   if (vaults && vaultData.length > 0) {
  //     //     let vaultStats = vaultData.find(
  //     //       (vaultInfo: any) => vaultInfo.address.toLowerCase() === vault.address.toLowerCase()
  //     //     );
  //     //     if (!vaultStats) {
  //     //       if (vault.address == '0xbe02922ba0ebd2eff9b89c456c4d7e261426e9d6')
  //     //         vaultStats = vaultData.find(
  //     //           (vaultInfo: any) =>
  //     //             vaultInfo.address.toLowerCase() ===
  //     //             '0xC181b0c1991bBeb23BDC580b76D36fdf956ED538'.toLowerCase()
  //     //         );
  //     //       else if (vault.address == '0x5ba464552180f61dcd9294728ce41cd5158d90b7')
  //     //         vaultStats = vaultData.find(
  //     //           (vaultInfo: any) =>
  //     //             vaultInfo.address.toLowerCase() ===
  //     //             '0xfC146C9EF3cDb66Ab0615107bdDeea8a6d2835f0'.toLowerCase()
  //     //         );
  //     //     }
  //     //     return {
  //     //       ...vault,
  //     //       tvl: vaultStats?.tvl,
  //     //       apy: vaultStats?.apy,
  //     //       volume: vaultStats?.volume,
  //     //       sharePrice: vaultStats?.sharePrice,
  //     //     };
  //     //   } else {
  //     //     return {
  //     //       ...vault,
  //     //       tvl: 0,
  //     //       apy: 0,
  //     //       volume: 0,
  //     //       sharePrice: 0,
  //     //     };
  //     //   }
  //     // })
  //   );
  // }, [chain?.id, vaults, vaultData]);

  const data: IVaultData[] = useMemo(() => {
    if (resultData) {
      if (userInput !== '') {
        return Object.values(resultData).filter((vault) =>
          vault.name.toLowerCase().includes(userInput.toLowerCase())
        );
      } else {
        return Object.values(resultData);
      }
    }
    return [];
  }, [resultData, userInput]);

  const indexColumns = useMemo(
    () => [
      {
        Header: 'Vault name',
        accessor: (properties: IVaultData) => {
          return properties?.symbol && properties?.name ? (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => handleClick(properties)}
            >
              <SymbolLogo symbol={properties.symbol} height={20} width={20} />
              <p className="mx-2 body-regular-15 font-semibold">{properties.name}</p>
              <p className="text-body_dark_light dark:text-white font-semibold text-2xs">
                {properties.symbol}
              </p>
            </div>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Price',
        accessor: (properties: IVaultData) => {
          return properties?.sharePrice !== undefined && properties?.sharePrice >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              ${properties.sharePrice < 0.001 ? '<0.001' : properties?.sharePrice?.toFixed(2)}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'TVL',
        accessor: (properties: IVaultData) => {
          return properties?.tvl !== undefined && properties?.tvl >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              {properties.tvl < 0.1 ? `$ <0.1` : formatValue(properties.tvl, false, 'USD')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Volume', //Lets keep it like this for now until we have more data.
        accessor: (properties: IVaultData) => {
          return properties.volume !== undefined && properties?.volume >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              {formatValue(+properties.volume, false, 'USD')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
    ],
    [vaults, data]
  );

  const yieldColumns = useMemo(
    () => [
      {
        Header: 'Vault name',
        accessor: (properties: IVaultData) => {
          return properties?.symbol && properties?.name ? (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => handleClick(properties)}
            >
              <SymbolLogo symbol={properties.symbol} height={20} width={20} />
              <p className="mx-2 body-regular-15 font-semibold">{properties.name}</p>
              <p className="text-body_dark_light dark:text-white font-semibold text-2xs">
                {properties.symbol}
              </p>
            </div>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'APY',
        accessor: (properties: IVaultData) => {
          if (properties.vaultType === 'genesis') return null;
          return properties?.sharePrice !== undefined && properties?.sharePrice >= 0 ? (
            <p
              onClick={() => handleClick(properties)}
              className="body-medium-14 text-success dark:text-success "
            >
              {properties?.apy ? properties?.apy.toFixed(2) + `%` : <Skeleton />}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'TVL',
        accessor: (properties: IVaultData) => {
          return properties?.tvl !== undefined && properties?.tvl >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              {properties.tvl < 0.1 ? `$ <0.1` : formatValue(properties.tvl, false, 'USD')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Volume', //Lets keep it like this for now until we have more data.
        accessor: (properties: IVaultData) => {
          return properties.volume !== undefined && properties?.volume >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              {formatValue(+properties.volume, false, 'USD')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
      {
        Header: 'Price',
        accessor: (properties: IVaultData) => {
          return properties?.sharePrice !== undefined && properties?.sharePrice >= 0 ? (
            <p onClick={() => handleClick(properties)} className="body-medium-14">
              {properties?.sharePrice < 0.001
                ? '<0.001'
                : formatValue(properties.sharePrice, false, 'USD')}
            </p>
          ) : (
            <Skeleton />
          );
        },
      },
    ],
    [vaults, data]
  );

  const columns = useMemo(() => {
    if (vaults[0]?.vaultType === 'genesis') {
      return indexColumns;
    } else {
      return yieldColumns;
    }
  }, [vaults, data]);

  const handleClick = (properties: IVaultData) => {
    //setCurrentVault(properties as IVaultData);
    const path = `/vault/${properties.address}`;
    navigate(path);
  };

  return (
    <div className="flex flex-col w-full ">
      <DetailBaseTable
        options={{ columns, data }}
        sort
        currentPage={1}
        pageSize={50}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default SearchTable;
