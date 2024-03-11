import { useState, Fragment, useRef, useLayoutEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
export interface DialogProps {
  isOpen: boolean;
  onClose: Function;
  status: string;
  amount: string;
  error: Error | null;
}

interface DisclaimerInputProps {
  isOpen?: boolean;
  setIsOpen: Function;
  handleAccepted: Function;
}

const Disclaimer = (props: DisclaimerInputProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (props.isOpen && dialogRef.current) {
      dialogRef.current.scrollTop = 0;
    }
  }, [props.isOpen, dialogRef.current]);

  const handleTransitionEnd = () => {
    if (dialogRef.current) {
      dialogRef.current.scrollTop = 0;
    }
  };

  const handleOnClick = (option: 'reject' | 'accept') => {
    if (option === 'reject') {
      props.setIsOpen(false);
    } else {
      props.setIsOpen(false);
      props.handleAccepted();
    }
  };

  return (
    <div className="display flex">
      <div className="display">
        <Transition appear show={props.isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto "
            onClose={() => props.setIsOpen(true)}
            static={true}
          >
            <div
              className="fixed inset-0 bg-overlay_light dark:bg-sec_brand_01 opacity-80"
              aria-hidden="true"
            />
            <div className="flex items-center justify-center p-4 min-h-screen text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  ref={dialogRef}
                  onTransitionEnd={handleTransitionEnd}
                  className=" overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-background rounded-xl shadow-xl w-[554px]"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 heading  sticky top-0 bg-white dark:bg-background"
                  >
                    <div className="text-center pt-8 pb-6">
                      <p>Disclaimer</p>
                    </div>
                  </Dialog.Title>

                  <div className="mt-2 overflow-auto h-96 px-5">
                    <div className="flex flex-col mt-4 items-start justify-between">
                      <label className="flex flex-row gap-2 cursor-pointer heading text-base">
                        Please refer to our{' '}
                        <Link to={'/terms-of-service'} className="heading text-base">
                          T&C
                        </Link>{' '}
                        and
                        <Link to={'/privacypolicy'} className="heading text-base">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-center items-center sticky mt-5 mb-6 bottom-0 bg-white dark:bg-background px-4 gap-4">
                    {/* <div
                      className="gradiant-border text-center cursor-pointer h-10 w-36"
                      onClick={() => handleOnClick("reject")}
                    >
                      <p className="bg-background rounded-lg p-2 text-3xs font-bold h-full">
                        Reject and exit
                      </p>
                    </div> */}
                    <Button
                      type="button"
                      onClick={() => handleOnClick('accept')}
                      variant="disclaimer-btn"
                      className="p-3 text-3xs font-bold w-36"
                    >
                      Agree and continue
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
};

export default Disclaimer;
