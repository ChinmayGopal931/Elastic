import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import arrowDownSvg from 'assets/arrow-down.svg';
import arrowDownBlackSvg from 'assets/arrow-down-black.svg';
import useDarkMode from 'hooks/useDarkMode';

export type DropdownItem = {
  title: string;
  icon?: string;
};

export type DropdownTheme = {
  type: string;
  icon?: string;
};

export type DropdownProps = {
  selectedLabel: string;
  options: DropdownItem[];
  theme?: DropdownTheme;
  className?: string;
  placeHolder?: string;
  bordered?: boolean;
  width?: string | number;
  setSelectedOption: Function;
};

const Dropdown = (props: DropdownProps) => {
  const [isDarkMode] = useDarkMode();
  const theme = props.theme;

  const generateButton = () => {
    switch (theme?.type) {
      case 'asset':
        return 'asset-dropdown-btn';
      case 'metrics':
        return 'metrics-dropdown-btn';
      case 'filter':
        return 'filter-dropdown-btn';
      default:
        return 'dropdown-btn';
    }
  };

  const generateMenu = () => {
    let baseMenuClass = 'dropdown-menu overflow-y-auto';

    switch (theme?.type) {
      case 'asset':
        return baseMenuClass + ' asset-dropdown-menu';
      case 'metrics':
        return baseMenuClass + ' metrics-dropdown-menu';
      case 'network':
        return baseMenuClass + ' network-dropdown-menu';
      default:
        return baseMenuClass;
    }
  };

  return (
    <Menu as="div" className={`relative inline-block text-left z-50 ${props.className}`}>
      <Menu.Button
        className={generateButton()}
        style={
          props.bordered
            ? {
                border: '1px solid #192F4D',
                borderRadius: '10px',
                width: props.width ? props.width : '200px',
                height: '40px',
              }
            : undefined
        }
      >
        {props.theme?.icon && (
          <img
            className="flex max-w-[20px] max-h-[20px] object-cover"
            src={props.theme.icon}
            alt="Asset icon"
          />
        )}
        {props.selectedLabel ? (
          <p className="transition-all duration-75 text-2xs body-regular-14">
            {props.selectedLabel}
          </p>
        ) : (
          <span style={{ textTransform: 'capitalize' }} className="body-regular-14">
            {props.placeHolder}
          </span>
        )}
        <img
          src={isDarkMode ? arrowDownSvg : arrowDownBlackSvg}
          alt=""
          className="-mr-1 ml-1 h-3 w-3 ui-open:rotate-180 transition-all duration-300"
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={generateMenu()}>
          {props?.options?.map((item) => {
            return (
              <Menu.Item key={item.title}>
                {({ active }) => (
                  <div
                    className="flex flex-row items-center w-full justify-start z-50 bg-white dark:bg-ui_surface_opc"
                    onClick={() => props.setSelectedOption(item.title)}
                  >
                    {item.icon && (
                      <img
                        className="flex max-w-[20px] max-h-[20px] object-cover ml-[14.75px]"
                        src={item.icon}
                        alt="menu-item-icon"
                      />
                    )}
                    <div
                      className={`${
                        active ? 'opacity-50' : 'opacity-100'
                      } dark:text-heading_dark transition-all duration-75 text-2xs py-3 ml-[14.75px] text-body_dark_dark`}
                    >
                      {item.title}
                    </div>
                  </div>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
