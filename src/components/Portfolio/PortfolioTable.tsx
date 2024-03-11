// App
import { useState, useMemo } from 'react';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useBoundStore } from 'state/store';
import { IVaultData, vaultStatsData } from 'state/vault/types';
import { useMediaQuery } from 'usehooks-ts';

// Components
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import { DetailBaseTable } from 'components/UI/BaseTable/BaseTable';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { arbitrum } from 'wagmi/chains';
import { formatValue } from 'lib/helpers/helpers';

const PortfolioSearchTable = ({ vaultData }: { vaultData: any }) => {
  const isMobileView = useMediaQuery('(max-width:1000px)');
  const allVaults = useBoundStore((state) => state.allVaults);

  const [vaults] = useState<any>(allVaults?.[arbitrum.id]);
  const { address } = useAccount();
  const setCurrentVault = useBoundStore((state: any) => state.setCurrentVault);

  // =============================================================
  //                       Handle Functions
  // =============================================================

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        Header: 'Vault Name',
        accessorKey: 'vaultSymbol',
        accessor: (properties: any) => {
          return (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => handleClick(properties)}
            >
              <SymbolLogo symbol={properties?.vaultSymbol || ''} height={20} width={20} />
              <p className="mx-2 body-medium-15 font-semibold">
                {properties?.vaultName || properties?.name}
              </p>
              <p className="font-semibold text-xs">{properties?.vaultSymbol}</p>
            </div>
          );
        },
      },
      {
        Header: 'Total Deposited (USD)',
        accessorKey: 'depositPerVault',
        accessor: (properties: vaultStatsData) => {
          return (
            <p onClick={() => handleClick(properties)} className="body-medium-14 cursor-pointer">
              {formatValue(properties?.depositPerVault, false, 'USD')}
            </p>
          );
        },
      },
      {
        Header: 'PNL',
        accessorKey: 'pnl',
        accessor: (properties: vaultStatsData) => {
          return (
            <p
              onClick={() => handleClick(properties)}
              className={`body-medium-14 cursor-pointer ${
                properties?.pnl > 0.00001
                  ? 'text-success dark:text-success'
                  : properties?.pnl < 0.0
                  ? 'text-error dark:text-error'
                  : ''
              }`}
            >
              {formatValue(properties?.pnl, false, 'USD')}
            </p>
          );
        },
      },
      {
        Header: 'Share Price',
        accessorKey: 'sharePrice',
        accessor: (properties: vaultStatsData) => {
          return (
            <p onClick={() => handleClick(properties)} className="body-medium-14 cursor-pointer">
              {formatValue(properties?.sharePrice, false, 'USD')}
            </p>
          );
        },
      },
      {
        Header: 'Current Balance (USD)',
        accessorKey: 'balance',
        accessor: (properties: vaultStatsData) => {
          return (
            <p onClick={() => handleClick(properties)} className="body-medium-14 cursor-pointer">
              {formatValue(properties?.balance, false, 'USD')}
            </p>
          );
        },
      },
    ],
    []
  );

  const handleClick = (properties: vaultStatsData) => {
    setCurrentVault(properties as vaultStatsData);
    const path = `/vault/${(properties as unknown as IVaultData).address}`;
    navigate(path);
  };

  const NoWalletConnectedView = () => (
    <div className="desktop:p-6 bg-white dark:bg-ui_surface rounded-lg shadow-xl dark:shadow-lg p-2 flex flex-col flex-grow h-full text-center">
      <h1 className="text-2xl font-semibold desktop:text-7xl heading text-center">
        Connect Wallet to access Portfolio
      </h1>

      <div className="flex justify-center mt-10 ">
        <ConnectButton
          label="Connect Wallet"
          chainStatus="icon"
          accountStatus="address"
          showBalance={false}
        />
      </div>
    </div>
  );

  let resultData: any[] = [];

  if (vaults) {
    resultData = vaultData?.map((vaultStat: any) => {
      if (vaults && vaultData.length > 0) {
        let vaultStats = Object.values(allVaults?.[arbitrum.id]).find(
          (vaultInfo: any) => vaultInfo.address?.toLowerCase() == vaultStat?.vault?.toLowerCase()
        );

        return {
          ...vaultStat,
          ...vaultStats,
        };
      }
    });
  }

  const data = useMemo(() => resultData.filter((vault) => vault?.name), [resultData]);

  const MobileView = () => (
    <DetailBaseTable
      options={{ columns, data }}
      sort
      currentPage={1}
      pageSize={10}
      onPageChange={() => {}}
    />
  );

  const DefaultView = () => (
    <div className="flex flex-col gap-6 w-full">
      <DetailBaseTable
        options={{ columns, data }}
        sort
        currentPage={1}
        pageSize={10}
        onPageChange={() => {}}
      />
    </div>
  );
  return (
    <div className="flex flex-col w-full">
      {!address ? <NoWalletConnectedView /> : isMobileView ? <MobileView /> : <DefaultView />}
    </div>
  );
};

export default PortfolioSearchTable;
