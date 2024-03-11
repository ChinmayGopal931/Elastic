import { useState, useEffect } from 'react';
import LayoutHeader from 'components/UI/LayoutHeader/LayoutHeader';

import VaultStats from 'components/UI/VaultStats/VaultStats';

import { useAccount } from 'wagmi';
import PortfolioSearchTable from 'components/Portfolio/PortfolioTable';
import PortfolioAllocation from 'components/UI/AssetAllocation/PortfolioAllocation';
import { HexAddress } from 'lib/constants';
import { formatValue } from 'lib/helpers/helpers';
import { useEffectOnce } from 'usehooks-ts';
import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom';
import Skeleton from 'components/UI/LoadingText/Skeleton';
import Loader from 'components/UI/Loader/Loader';

const Portfolio = () => {
  const [isSpinner, setIsSpinner] = useState(true);
  const [assetArray, setAssetArray] = useState<any>();
  const [balance, setBalance] = useState<any>();

  const { address } = useAccount();

  return (
    <div className="gap-6 page-container overflow-y-scroll">
      <LayoutHeader title="My Portfolio" />

      {/* TODO: Add when using real data */}
      {/* {address && userStats?.vaultStats && <PortfolioMetrics {...MetricsProps} />} */}
    </div>
  );
};

export default Portfolio;
