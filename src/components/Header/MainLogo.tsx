import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { appRoutes } from 'lib/constants/appRoutes';

// Components
// import LightModeLogo from 'assets/factor/logo-with-label-light.svg';
// import DarkModeLogo from 'assets/factor/logo-with-label-dark.svg';
import useDarkMode from 'hooks/useDarkMode';
import { useMediaQuery } from 'usehooks-ts';
import AssetIcon from 'assets/dutchx.svg';

const MainLogo = () => {
  const isMobileView = useMediaQuery('(max-width:800px)');
  const [isDarkMode] = useDarkMode();
  const [logo, setLogo] = useState(''); // initialize as empty string

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      setLogo('DarkModeLogo');
    } else {
      setLogo('LightModeLogo');
    }
  }, [isDarkMode]);

  return (
    <div className="flex justify-between items-center desktop:w-auto" onClick={() => scrollToTop()}>
      <Link to={appRoutes.discover_path}>
        <img
          className={isMobileView ? `w-[110px] h-[80px]` : `w-[50px] h-[40px]`}
          src={AssetIcon}
          alt="Factor"
        />
      </Link>
    </div>
  );
};

export default MainLogo;
