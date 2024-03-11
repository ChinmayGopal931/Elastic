// App
import PrivacyPolicy from 'components/UI/TOC/PrivaryPolicy';
import { Outlet, Route, Routes } from 'react-router-dom';
import { appRoutes } from '../lib/constants/appRoutes';

// Components
import Discover from './Discover/Discover';
import TermsOfService from 'components/UI/TOC/TermsOfService';
import Portfolio from './Portfolio/Portfolio';
import Studio from './Studio/Studio';
import Create from './Create/Create';

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={appRoutes.home_path} element={<Discover />} />
        <Route path={appRoutes.discover_path} element={<Discover />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default RouterConfig;
