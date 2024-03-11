import useDarkMode from 'hooks/useDarkMode';
import React, { useState } from 'react';
import Switch from 'react-switch';

interface CustomSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onColor?: string;
  offColor?: string;
  className?: string;
  leftLabel?: string;
  rightLabel?: string;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  // checked,
  onChange,
  onColor = '#3383C5',
  offColor = '#010325',
  className = '',
  leftLabel = '',
  rightLabel = '',
}) => {
  const [checked, setChecked] = useState(false);

  const [isDarkMode] = useDarkMode();

  const changeValue = (value: boolean) => {
    setChecked(value);
    onChange(value);
  };
  return (
    <div className={`custom-switch-container flex items-center ${className}`}>
      {leftLabel ? <p className="mr-3 body-medium-15">{leftLabel}</p> : undefined}
      <div className={checked ? 'react-switch-checked-bg' : 'react-switch-unchecked-bg '}>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          checked={checked}
          onChange={changeValue}
          onColor={onColor}
          offColor={isDarkMode ? offColor : '#fff'}
          offHandleColor={isDarkMode ? '#fff' : '#3383C5'}
          handleDiameter={20}
          height={24}
          width={50}
        />
      </div>
      {rightLabel ? <p className="ml-3 body-medium-15">{rightLabel}</p> : undefined}
    </div>
  );
};

export default CustomSwitch;
