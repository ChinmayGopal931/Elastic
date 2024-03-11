import { NavLink } from 'react-router-dom';
import { appRoutes } from 'lib/constants/appRoutes';

const MobileNavbar = () => {
  const navbarItems = [
    {
      path: appRoutes.discover_path,
      isDisabled: false,
      title: 'Discover',
    },
    {
      path: appRoutes.studio_path,
      isDisabled: true,
      title: 'Studio',
    },
    {
      path: '/governance/staking',
      isDisabled: false,
      title: 'Governance',
    },
    {
      path: appRoutes.portfolio_path,
      isDisabled: false,
      title: 'Portfolio',
    },
  ];
  return (
    <div className="fixed bottom-0 w-full h-[65px] text-heading_dark bg-white dark:bg-ui_surface_opc z-40 flex flex-row items-center justify-center rounded-t-3xl shadow-xl">
      <nav className="flex flex-row h-[80px] items-center justify-center">
        <ul className="flex flex-row space-x-1 justify-center items-center  list-none ">
          {navbarItems.map((item) => {
            if (item.isDisabled) {
              return (
                <div className="flex flex-col text-disabled heading px-4 py-3" key={item.title}>
                  <li className="[text-decoration:none] text-xs tracking-[0.5px] leading-[28px] text-center no-break-word ">
                    {item.title}
                  </li>
                  <p className="text-4xs text-center no-break-word">soon!</p>
                </div>
              );
            }
            return (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => {
                    return isActive
                      ? 'w-full [text-decoration:none] h-[45px] px-4 py-3 font-bold text-3xs bg-body_light_dark dark:bg-border tracking-[0.5px] leading-[28px] heading rounded-lg cursor-pointer hover:transition-all duration-200'
                      : 'w-full [text-decoration:none] h-[45px] px-4 py-3s font-bold text-3xs tracking-[0.5px] leading-[28px] heading cursor-pointer hover:text-gray-900 hover:transition-all duration-200';
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNavbar;
