import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import closeSvg from 'assets/close.svg';

type LeverageDialog = {
  isOpen: boolean;
  onClose: Function;
  title: string;
};

const LeverageDialog = ({ isOpen, onClose, title }: LeverageDialog) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => onClose}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-sec_brand_01 opacity-100 p-6 text-left align-middle shadow-xl dark:shadow-lg transition-all">
                <Dialog.Title
                  as="h3"
                  className="leading-6 heading flex flex-row items-center justify-between mb-3 text-xl"
                >
                  {title}
                  <img
                    src={closeSvg}
                    alt="close"
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onClose()}
                  />
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
