import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Loader from '../Loader/Loader';

type ApproveButtonProps = {
  handleOnApprove: (isUnlimited: boolean) => void;
  isLoading: boolean;
};

const ApproveButton = ({
  handleOnApprove,
  isLoading,
}: React.HTMLProps<HTMLButtonElement> & ApproveButtonProps) => {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <div className={`${open && 'gradiant-border max-h-[65px] border-none'}`}>
              <Popover.Button
                className={`write-btn mt-0 border-none focus:border-none  ${
                  open && 'bg-white dark:bg-ui_surface_opc'
                } max-h-[60px]`}
              >
                {isLoading ? (
                  <div className="h-[50px] ">
                    <Loader height={50} padding={5} />
                  </div>
                ) : open ? (
                  <span className="focus:border-none text-rich_black">Cancel</span>
                ) : (
                  <span className="focus:border-none">Approve</span>
                )}
              </Popover.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-20 -mt-60 w-screen -translate-x-1/2 transform px-4 mobile:max-w-md desktop:max-w-[430px]">
                <div className="overflow-hidden rounded-lg shadow-xl dark:shadow-lg ring-1 bg-white dark:bg-ui_surface_opc ring-rich_black ring-opacity-5">
                  <div className="p-2 py-4 w-full">
                    <div
                      onClick={() => handleOnApprove(false)}
                      className="bg-prime_gradient text-center text-sm cursor-pointer hover:opacity-80 font-semibold rounded-lg rounded-text-box mb-2"
                    >
                      <p>One-time approval</p>
                    </div>
                    <div
                      onClick={() => handleOnApprove(true)}
                      className="bg-prime_gradient text-center  text-sm cursor-pointer hover:opacity-80 font-semibold rounded-lg rounded-text-box mt-2"
                    >
                      <p>Unlimited Approval</p>
                    </div>
                    <p className="text-center mt-2 text-body_light_dark text-3xs tracking-wide font-semibold">
                      future spending requests won't require approval
                    </p>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export { ApproveButton };
