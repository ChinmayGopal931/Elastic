// App
import { Fragment } from 'react';

// Components
import { Dialog, Transition } from '@headlessui/react';

// Assets
import closeSvg from 'assets/close.svg';
import closeBlackSvg from 'assets/close-black.svg';
import Faucet from 'components/Faucet/Faucet';
import useDarkMode from 'hooks/useDarkMode';

export interface FaucetDialogProps {
  isOpen: boolean;
  onClose: Function;
}

const FaucetDialog = (props: FaucetDialogProps) => {
  const [isDarkMode] = useDarkMode();
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-background bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform h-[500px] rounded-2xl bg-white dark:bg-sec_brand_01 opacity-100 p-6 text-left align-middle shadow-xl dark:shadow-lg transition-all">
                <Dialog.Title
                  as="h2"
                  className="leading-6 heading flex flex-row justify-end mb-3 text-xl"
                >
                  <img
                    src={isDarkMode ? closeSvg : closeBlackSvg}
                    alt="close"
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => props.onClose()}
                  />
                </Dialog.Title>
                <Faucet />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FaucetDialog;
