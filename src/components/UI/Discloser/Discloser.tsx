// UI
import { Disclosure, Transition } from '@headlessui/react';
import ArrowLight from 'assets/arrow-down.svg';
import ArrowDark from 'assets/arrow-down.svg';

// Components
import { Tab } from 'components/VaultDetails/VaultDetails';
import useDarkMode from 'hooks/useDarkMode';

interface Props {
  tab: Tab;
}

const Discloser = (props: Props) => {
  const { tab } = props;
  const [isDarkMode] = useDarkMode();
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="w-full py-2 bg-transparent  rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left border-none rounded-lg shadow-lg cursor-pointer heading text-base bg-white dark:bg-ui_surface focus:outline-none">
                <span>{tab.title}</span>
                <img
                  src={isDarkMode ? ArrowDark : ArrowLight}
                  className={`${
                    open ? 'rotate-180 transform ' : ''
                  } h-4 w-4 text-purple-500 transition-all duration-200`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="w-full pt-4 pb-2 text-sm desktop:px-4">
                  {tab.component}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Discloser;
