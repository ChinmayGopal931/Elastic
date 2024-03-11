// App
import { useMemo } from 'react';

// Hooks
import { useBoundStore } from 'state/store';

// Components
import Tooltip from 'rc-tooltip';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import { DetailBaseTable } from 'components/UI/BaseTable/BaseTable';
import { formatValue } from 'lib/helpers/helpers';

//CSS
import 'react-tooltip/dist/react-tooltip.css';

const LeaderBoardTable = ({ userData }: { userData: any }) => {
  const allVaults = useBoundStore((state) => state.allVaults);

  // TODO: move this logic into a hook
  let resultData = userData;

  if (allVaults && userData) {
    resultData = userData.map((vaultData: any) => {
      let userBalance = 0;
      const vaultInfo = vaultData?.vaultStats?.map((vaultStat: any) => {
        if (allVaults) {
          let vaultStats = Object.values(allVaults).find(
            (vaultInfo: any) => vaultInfo.address.toLowerCase() == vaultStat?.vault?.toLowerCase()
          );
          userBalance += vaultStat?.balance;

          return {
            vault: vaultStats?.address,
            vaultName: vaultStats?.name,
            vaultSymbol: vaultStats?.symbol,
          };
        }
      });

      const rating = 5 - 5 / (vaultData.totalDeposits + vaultData.pnlTotal);

      return {
        userAddress: vaultData.address,
        userStat: vaultInfo,
        totalBalance: userBalance,
        rating: rating,
        totalDeposits: vaultData.totalDeposits,
        pnlTotal: vaultData.pnlTotal,
      };
    });
  }

  const columns = useMemo(
    () => [
      {
        Header: 'User Address',
        key: 'address',
        accessorKey: 'address',
        accessor: (properties: any) => {
          return (
            <div className="flex flex-row items-center">
              <p className="font-semibold text-xs">{properties?.userAddress}</p>
            </div>
          );
        },
      },
      {
        Header: 'Vaults',
        key: 'vaults',
        accessorKey: 'vaultSymbol',
        accessor: (properties: any) => {
          return (
            <div className="flex flex-row items-center ">
              {properties?.userStat?.map((vault: any, index: number) => {
                return (
                  <div className="mr-2" key={index}>
                    <div className="flex items-center">
                      <Tooltip
                        placement="rightTop"
                        trigger={['hover']}
                        overlay={<span className="text-xs">{vault?.vaultSymbol}</span>}
                      >
                        <div className="cursor-pointer">
                          <SymbolLogo
                            key={vault?.vaultSymbol}
                            symbol={vault?.vaultSymbol || ''}
                            height={20}
                            width={20}
                          />
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
      {
        Header: 'Total Invested',
        key: 'depositPerVault',
        accessorKey: 'depositPerVault',
        accessor: (properties: any) => {
          return (
            <p className="body-medium-14">{formatValue(properties?.totalDeposits, false, 'USD')}</p>
          );
        },
      },
      {
        Header: 'PNL',
        key: 'pnl',
        accessorKey: 'pnl',
        accessor: (properties: any) => {
          return (
            <p className="body-medium-14">{formatValue(properties?.pnlTotal || 0, false, 'USD')}</p>
          );
        },
      },
      {
        Header: 'Current Balance',
        key: 'totalBalance',
        accessorKey: 'totalBalance',
        accessor: (properties: any) => {
          return (
            <p className="body-medium-14">{formatValue(properties?.totalBalance, false, 'USD')}</p>
          );
        },
      },
      {
        Header: 'Rating',
        key: 'rating',
        accessorKey: 'rating',
        accessor: (properties: any) => {
          return <p className="body-medium-14">{(properties?.rating || 0)?.toFixed(2)}</p>;
        },
      },
    ],
    [resultData]
  );

  const data = useMemo(() => resultData, [resultData]);

  return (
    <div className="flex flex-col w-full mobile:mb-10">
      <DetailBaseTable
        options={{ columns, data }}
        sort
        currentPage={1}
        pageSize={10}
        onPageChange={() => {}}
      />
    </div>
  );
};

export default LeaderBoardTable;
