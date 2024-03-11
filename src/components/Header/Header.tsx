import { useState, useEffect } from 'react';
import MainLogo from './MainLogo';
import Navbar from 'components/Navbar/Navbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useMediaQuery } from 'usehooks-ts';

import ThemeSwitch from 'components/ThemeSwitch/ThemeSwitch';
import LangSelector from 'components/LangSelector/LangSelector';

const Header = () => {
  const isMobileView = useMediaQuery('(max-width:900px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        isMobileView
          ? `fixed top-15 flex flex-row w-full z-40 h-[80px]  ${
              isScrolled ? 'bg-white dark:bg-ui_surface_opc rounded-b-3xl top-0' : ''
            }`
          : 'h-[120px]'
      } flex flex-row items-center mobile:justify-between desktop:justify-start mobile:px-4 tablet:px-8 desktop:px-16 transition-all duration-200 border-bottom-header`}
    >
      <MainLogo />
      {!isMobileView && <Navbar />}
      <div className="flex items-center justify-end flex-grow desktop:flex-grow-0 gap-2">
        <ThemeSwitch />
        {/* <LangSelector /> */}
        <ConnectButton
          label="Connect Wallet"
          chainStatus="icon"
          accountStatus={isMobileView ? 'avatar' : 'full'}
          showBalance={false}
        />
      </div>
    </header>
  );
};

export default Header;
