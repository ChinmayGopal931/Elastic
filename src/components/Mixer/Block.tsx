import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

import arrowSvg from 'assets/arrow-down-gradiant.svg';

import Deposit from 'assets/studio/Deposit.svg';
import Swap from 'assets/studio/swap.svg';
import Stake from 'assets/studio/stake.svg';
import Withdraw from 'assets/studio/withdraw.svg';

interface BlockProps {
  icon: any;
  children: any;
  title: string;
  functions?: string[];
}

const ICONS_MIDDLE = [
  {
    name: 'Deposit',
    icon: Deposit,
  },
  {
    name: 'Swap',
    icon: Swap,
  },
  {
    name: 'Stake',
    icon: Stake,
  },
  {
    name: 'Stake',
    icon: Stake,
  },
  {
    name: 'Stake',
    icon: Stake,
  },
  {
    name: 'Withdrawal',
    icon: Withdraw,
  },
];

const Block: React.FC<BlockProps> = (props: BlockProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full bg-transparent rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-4  my-2 text-sm font-medium text-left border-none rounded-lg shadow-xl dark:shadow-lg cursor-pointer heading bg-white dark:bg-background focus:outline-none">
                <div className="flex w-full justify-between">
                  <div className="flex flex-row items-center justify-center gap-5">
                    <div className="h-7 w-7">
                      <img src={props.icon} />
                    </div>
                    <h1 className="text-lg font-semibold">{props.title}</h1>
                  </div>
                  {/* <div className="flex gap-10">
                    {ICONS_MIDDLE.map((item) => {
                      return (
                        <div className="flex flex-col items-center gap-1">
                          <img src={item.icon} />
                          <p>{item.name}</p>
                        </div>
                      );
                    })}
                  </div> */}

                  <div className="flex items-center">
                    <img
                      src={arrowSvg}
                      className={`${
                        open ? 'rotate-180 transform ' : ''
                      } h-4 w-4 text-purple-500 transition-all duration-200`}
                    />
                  </div>
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="w-full text-sm text-gray-50">
                  {/* {props.functions.map((func, index) => (
                    <span
                      key={index}
                      className="block text-sm text-blue-500 p-4"
                    >
                      {func}
                    </span>
                  ))} */}
                  {props.children}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Block;
