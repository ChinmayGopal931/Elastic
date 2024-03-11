import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import closeSvg from "assets/close.svg";
import { translateContractError } from "lib/utils/translateContractError";
import { parseWagmiErrorMessage } from "lib/helpers/helpers";

export interface DialogProps {
  open: boolean;
  onClose: Function;
  status: boolean;
  amount: string;
  error?: any;
}

const WithdrawDialog = (props: DialogProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorCode, setErrorCode] = useState();

  useEffect(() => {
    if (props.status) {
      setErrorCode(undefined);
      setTitle("Withdrawal Success");
      setDescription("Your asset has been successfully withdrawn.");
      setIsError(false);
    } else if (props.error) {
      setTitle(
        props.error?.message.includes("User rejected request")
          ? "User Rejected"
          : "Withdrawal Error"
      );
      setDescription(
        translateContractError(
          props.error.message,
          parseWagmiErrorMessage(props.error.message)
        )
      );
      if (props?.error?.error?.data?.data) {
        setErrorCode(props.error.error.data.data);
      }

      setIsError(true);
    }
  }, [props.status, props.error]);

  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => props.onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-yankees_blue p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-ghost_white flex flex-row items-center justify-between mb-3"
                >
                  {title}
                  <img
                    src={closeSvg}
                    alt="close"
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => props.onClose()}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {description}
                    <br />
                    {errorCode && <>Error Code : {errorCode}</>}
                  </p>
                </div>

                <div className="mt-2">
                  {!isError && (
                    <p className="text-sm text-gray-500">{`Amount withdrawn: ${props.amount}`}</p>
                  )}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                    onClick={() => props.onClose()}
                  >
                    Ok
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WithdrawDialog;
