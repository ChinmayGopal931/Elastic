import React from 'react';
import Select, { ActionMeta, MultiValue } from 'react-select';
import { components, DropdownIndicatorProps } from 'react-select';
import searchSvg from 'assets/search.svg';
import useDarkMode from 'hooks/useDarkMode';

interface DropDownMenuItem {
  value: string;
  label: string;
}

interface Props {
  value?: Array<DropDownMenuItem>;
  data: Array<DropDownMenuItem>;
  onChange: (
    newValue: MultiValue<DropDownMenuItem>,
    actionMeta: ActionMeta<DropDownMenuItem>
  ) => void;
  placeholder: string;
  className?: string;
}
function MultiSelectAndSearch({ value, data, onChange, placeholder, className }: Props) {
  const [isDarkMode] = useDarkMode();
  const DropdownIndicator = (
    props: DropdownIndicatorProps<
      {
        readonly value: string;
        readonly label: string;
      },
      true
    >
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={searchSvg} className="h-[17px] w-[17px] mr-4" alt="Search" />
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      isMulti
      value={value}
      name="assets"
      components={{ DropdownIndicator }}
      options={data}
      className={'search-select ' + className}
      placeholder={placeholder}
      classNamePrefix="react-select"
      theme={(theme) => ({
        ...theme,
        borderRadius: 10,
        color: '#ffffff',
        colors: {
          ...theme.colors,
          neutral0: isDarkMode ? '#010325' : '#ffffff',
          neutral20: '#192F4D',
        },
      })}
      styles={{
        option: (styles, { isFocused }) => {
          return {
            ...styles,
            cursor: 'pointer',
            backgroundColor: isDarkMode ? '#010325' : '#ffffff',
            color: isFocused ? 'grey' : '#A8A9B3',
            fontSize: 14,
            fontWeight: 600,
            ':active': {
              ...styles[':active'],
              backgroundColor: isDarkMode ? '#010325' : '#ffffff',
            },
          };
        },
      }}
      onChange={onChange}
    />
  );
}

export default MultiSelectAndSearch;
