// App
import { useState, Fragment, useEffect } from 'react';

// Utils
import { translateContractError } from 'lib/utils/translateContractError';
import { parseWagmiErrorMessage } from 'lib/helpers/helpers';
import { ContractErrorCode } from 'lib/utils/translateContractErrorCode';
import { operationSuccessMessages } from 'i18n/operationSuccessMessages';

// Components
import { Dialog, Transition } from '@headlessui/react';

// Assets
import closeSvg from 'assets/close.svg';
import { Button } from '../Button/Button';

export type Operations =
  | 'lock'
  | 'delegate'
  | 'quitLock'
  | 'approve'
  | 'deposit'
  | 'withdraw'
  | 'whitelist'
  | 'increaseLockAmount'
  | 'increaseUnlockTime';

export interface ActionDialogProps {
  type: Operations;
  isOpen: boolean;
  onClose: Function;
  status?: boolean;
  amount?: string | number;
  error?: any;
}

const ActionDialog = (props: ActionDialogProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const capitalizedType = props.type.charAt(0).toUpperCase() + props.type.slice(1);

  const handleErrorMessage = (message: string) => {
    const isUserRejected =
      message.includes('User denied transaction signature') ||
      message.includes('User rejected request');

    const isNonceToHigh = message.includes('Nonce too high');

    if (isUserRejected) {
      setTitle('User Rejected');
      setDescription(translateContractError(message, parseWagmiErrorMessage(message)));
      return;
    } else {
      setTitle(`${capitalizedType} Error`);
    }

    if (props?.error?.reason && props?.error?.error?.data?.message) {
      setDescription(props.error.error.data.message);
      return;
    }

    if (props?.error?.name) {
      setTitle(props?.error?.name);
      setDescription(props?.error?.message);
    }
    if (isNonceToHigh) {
      setTitle('Nonce too high');
      setDescription('The transaction nonce is too high. please reset it');

      return;
    }
    setTitle('Error');
    setDescription(props?.error?.message || '');
  };

  useEffect(() => {
    if (props.status && props?.type) {
      setTitle(operationSuccessMessages[props?.type].title);
      setDescription(operationSuccessMessages[props?.type].description);
    } else {
      if (
        ContractErrorCode[props?.error?.data] ||
        ContractErrorCode[props?.error?.error?.data?.data?.data]
      ) {
        setTitle(`${props.type} Error`);
        setDescription(
          ContractErrorCode[props?.error?.data] ||
            ContractErrorCode[props?.error?.error?.data?.data?.data]
        );
        return;
      }

      handleErrorMessage(props.error?.message ?? '');
    }
  }, [props.status, props.error, props.type]);

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
                    onClick={() => props.onClose()}
                  />
                </Dialog.Title>
                <div className="mt-2">
                  <p className="body-medium-15">{description}</p>
                </div>

                <div className="mt-2">
                  {props.status && props.amount && (
                    <p className="body-medium-15">{`Amount: ${props.amount}`}</p>
                  )}
                </div>

                <div className="mt-4">
                  <Button type="button" variant="dialog-btn" onClick={() => props.onClose()}>
                    Ok
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ActionDialog;
