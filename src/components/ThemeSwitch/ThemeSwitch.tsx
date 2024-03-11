import React from 'react';

// Assets
import SunON from 'assets/sun-on.svg';
import SunOFF from 'assets/sun-off.svg';
import MoonON from 'assets/moon-on.svg';
import MoonOFF from 'assets/moon-off.svg';
import Divider from 'assets/divider.svg';
import useDarkMode from 'hooks/useDarkMode';

const ThemeSwitch = () => {
  const [isDarkMode, toggle] = useDarkMode();

  return (
    <div className="flex items-center justify-between mx-3 cursor-pointer">
      <img
        src={!isDarkMode ? SunON : SunOFF}
        className="h-5.25 desktop:h-6"
        alt="Sun"
        onClick={() => {
          if (isDarkMode) {
            toggle('light');
          }
        }}
      />
      <img src={Divider} alt="" className="mx-2.5 h-6" />
      <img
        src={isDarkMode ? MoonON : MoonOFF}
        className="h-4.5 desktop:h-5"
        alt="Moon"
        onClick={() => {
          if (!isDarkMode) {
            toggle('dark');
          }
        }}
      />
    </div>
  );
};

export default ThemeSwitch;
