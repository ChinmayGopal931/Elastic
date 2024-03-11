// App
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { arbitrum } from 'wagmi/chains';
import { supportedChains } from 'lib/constants';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { useAccount, useNetwork } from 'wagmi';

// Components
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Disclaimer from 'components/UI/Disclaimer/Disclaimer';
import RouterConfig from './layout/RouterConfig';

// Styles
import './App.css';

function App() {
  // Hooks
  const navigate = useNavigate();
  const { chain } = useNetwork();
  const { isConnected, address } = useAccount();
  const { status: accountStatus } = useAccount();
  const isMobileView = useMediaQuery('(max-width:900px)');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (accountStatus === 'connected') window.CHAIN_ID = chain?.id!;
  }, [accountStatus]);

  useEffect(() => {
    const chainId = supportedChains[chain?.id as number]?.id || arbitrum.id;
    window.CHAIN_ID = chainId;

    // if (window.location.pathname === '/') navigate('/discover');
  }, [chain?.id, arbitrum.id, supportedChains]);

  function handleAccepted() {
    if (isConnected && address) localStorage.setItem(address, 'accepted');
  }

  const checkDisclaimer = !isConnected || (address && localStorage.getItem(address) === null);

  return (
    <>
      <Header />
      <main className="main-wrapper">
        <RouterConfig />
        <Outlet />
        {checkDisclaimer && (
          <Disclaimer setIsOpen={setIsOpen} isOpen={isOpen} handleAccepted={handleAccepted} />
        )}
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
      {isMobileView && <MobileNavbar />}
    </>
  );
}

export default App;
