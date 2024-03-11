// App
import { useState, useEffect } from 'react';

// Utils
import { HexAddress, ZERO_ADDRESS } from 'lib/constants';
import { ethers } from 'ethers';

// Hooks
import {
  useVeTokenDelegate,
  useGetLockedVeTokenInfo,
  useVeTokenAccountBalance,
} from 'state/governance/hooks';
import { useAccount } from 'wagmi';

// Components
import Loader from 'components/UI/Loader/Loader';
import OutputWithLabel from 'components/UI/OutputWithLabel/OutputWithLabel';
import ActionDialog, { ActionDialogProps } from 'components/UI/Dialogs/ActionDialog';
import VaultAddress from 'components/UI/VaultAddress/VaultAddress';
import { Button } from 'components/UI/Button/Button';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Delegate = () => {
  // =============================================================
  //                       Component State
  // =============================================================
  const [isValidated, setIsValidated] = useState(false);
  const [validateMessage, setValidateMessage] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);

  const [isUserDelegate, setIsUserDelegate] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [enabled, setEnabled] = useState(false);
  const { address: userAddress, isConnected } = useAccount();
  const [delegator, setDelegator] = useState(userAddress as HexAddress);
  const [dialogProps, setDialogProps] = useState<ActionDialogProps>({
    isOpen: false,
    type: 'delegate',
    status: false,
  } as ActionDialogProps);
  const [triggerUndelegate, setTriggerUndelegate] = useState(false);

  // =============================================================
  //                       Component Hooks
  // =============================================================
  const { balance, refetch: refetchBalance } = useVeTokenAccountBalance(userAddress as HexAddress);
  const {
    write: writeDelegate,
    status: delegateStatus,
    txnStatus: delegateTxnStatus,
    error: delegateError,
    isError: isDelegateError,
    isLoading: isDelegateLoading,
  } = useVeTokenDelegate(userInput as HexAddress, enabled);

  const {
    delegated,
    delegatee,
    amount: delegatedAmount,
    refetch: refetchTokenLocked,
  } = useGetLockedVeTokenInfo(userAddress as HexAddress, balance);

  // =============================================================
  //                       Additional Functions
  // =============================================================

  // Input Change
  const handleInputChanged = (value: string) => {
    setUserInput(value);
  };

  // Delegate
  const handleOnDelegate = () => {
    setEnabled(true);
    writeDelegate?.();
  };

  // Delegate Success
  const handleDelegateSuccess = () => {
    setDialogProps({
      isOpen: true,
      type: 'delegate',
      status: true,
    } as ActionDialogProps);
    refetchTokenLocked();
    refetchBalance();
    setEnabled(false);
    setIsValidated(false);
    setValidateMessage('');
  };

  // Delegate Error
  const handleDelegateError = () => {
    setDialogProps({
      isOpen: true,
      type: 'delegate',
      status: false,
      error: delegateError,
    } as ActionDialogProps);
    refetchTokenLocked();
    refetchBalance();
    setEnabled(false);
    setIsValidated(false);
    setValidateMessage('');
  };
  // =============================================================
  //                       Side Effects
  // =============================================================
  // User input Validation
  useEffect(() => {
    if (userInput === delegatee) {
      setIsValidated(false);
      setValidateMessage('Warning! Self-delegate only to cancel active delegation');
      return;
    }
    if (!triggerUndelegate) {
      if (userInput !== undefined && ethers.utils.isAddress(userInput) === false) {
        setIsValidated(false);
        setValidateMessage('Warning! Please enter a valid address');
        return;
      }
    }

    if (delegatedAmount?.simple === 0 && !triggerUndelegate) {
      setIsValidated(false);
      setValidateMessage("Warning! This Wallet currently doesn't have a lock");
      return;
    }
    if (delegatedAmount?.simple !== 0 && triggerUndelegate) {
      setIsValidated(false);
      return;
    }

    setIsValidated(true);
  }, [userInput, delegatedAmount?.simple, triggerUndelegate]);

  // Delegate Status
  useEffect(() => {
    if (delegateStatus === 'success' && delegateTxnStatus === 'success') {
      handleDelegateSuccess();
    }
    if (isDelegateLoading) {
      setInputDisabled(true);
    }
    if (delegateStatus === 'error' || delegateTxnStatus === 'error' || isDelegateError) {
      handleDelegateError();
    }
    setTriggerUndelegate(false);
  }, [delegateStatus, delegateTxnStatus, isDelegateError]);

  // Delegatee side effects
  useEffect(() => {
    if (delegatee === userAddress || delegatee === ZERO_ADDRESS) {
      setIsUserDelegate(false);
      return;
    }
    setIsUserDelegate(true);
  }, [delegated.simple, delegatee, userAddress]);

  // Enable Delegate call
  useEffect(() => {
    if (isConnected && userInput && enabled && delegateStatus === 'idle' && writeDelegate) {
      if (writeDelegate) {
        setEnabled(true);
        writeDelegate();
      }
    }
  }, [isConnected, delegateStatus, enabled, writeDelegate]);

  useEffect(() => {
    if (delegatee !== userAddress && delegatee !== ZERO_ADDRESS) {
      setDelegator(delegatee as HexAddress);
    }
  }, []);

  useEffect(() => {
    if (userInput === userAddress && triggerUndelegate && delegateStatus === 'idle') {
      writeDelegate?.();
    }
  }, [triggerUndelegate, userInput, writeDelegate, delegateStatus]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col flex-grow">
        <OutputWithLabel
          label="Delegate your lock and voting power to another address:"
          value={
            <>
              <input
                disabled={inputDisabled}
                className="bg-white dark:bg-ui_surface body-regular-14 text-[.875rem] font-bold text-left w-full border-none outline-none placeholder:text-cool_gray "
                placeholder="Enter address (e.g. 0xf3ba4...)"
                onChange={(e) => handleInputChanged(e.target.value)}
              />
            </>
          }
        />

        {!isValidated && userAddress && userInput.length >= userAddress?.length && (
          <div className="ml-1 text-error">{validateMessage}</div>
        )}

        <OutputWithLabel
          label="Vote power:"
          value={
            <div className="flex flex-col">
              {!balance ? 'You cannot delegate to anyone' : <p>{balance?.simple} veFCTR</p>}
            </div>
          }
        />

        <OutputWithLabel
          label="Delegated To:"
          value={
            <div className="flex flex-col">
              {!isUserDelegate ? (
                "You haven't Delegated to anyone yet."
              ) : (
                <VaultAddress address={delegatee ?? ''} isTrunced={true} />
              )}
            </div>
          }
        />

        {delegated && (
          <OutputWithLabel
            label="Delegated amount:"
            value={
              <div className="flex flex-col">
                {delegated.simple === 0 ? (
                  "You haven't been delegated an amount from another user."
                ) : (
                  <p>{delegated.simple ?? ''} veFCTR</p>
                )}
                <a></a>
              </div>
            }
          />
        )}
      </div>

      {delegated.simple !== 0 && (
        <p className="text-warning">You need to Undelegate, if you want to quit or withdraw </p>
      )}

      {!isConnected && (
        <div className="w-full flex justify-center">
          <ConnectButton
            label="Connect Wallet"
            chainStatus="icon"
            accountStatus="address"
            showBalance={false}
          />
        </div>
      )}

      {/* Delegate Button */}

      {isConnected && (
        <>
          <Button
            onClick={() => handleOnDelegate()}
            disabled={!isValidated}
            variant={isValidated ? 'write-btn' : 'preview-btn'}
          >
            {isDelegateLoading ? <Loader height={50} padding={5} /> : 'Delegate'}
          </Button>
          <Button
            onClick={() => {
              setTriggerUndelegate(true);
              setUserInput(userAddress ?? '');
            }}
            disabled={!isUserDelegate}
            variant={isUserDelegate ? 'write-btn' : 'preview-btn'}
          >
            {isDelegateLoading ? <Loader height={50} padding={5} /> : 'UnDelegate'}
          </Button>
        </>
      )}

      {/* Delegate Dialog */}
      <ActionDialog
        type={dialogProps.type}
        isOpen={dialogProps.isOpen}
        status={dialogProps.status}
        error={dialogProps.error}
        onClose={() =>
          setDialogProps({
            isOpen: false,
            type: 'delegate',
          } as ActionDialogProps)
        }
      />
    </div>
  );
};

export default Delegate;
