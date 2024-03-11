import { BigNumber } from 'ethers';
import { HexAddress } from 'lib/constants';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import { usePrepareContractWrite, erc20ABI, useContractWrite, useWaitForTransaction } from 'wagmi';

export const useTokenApproval = ({
  addressERC20,
  enabled,
  spender,
  value,
}: {
  addressERC20: HexAddress;
  value: BigNumber;
  enabled: boolean;
  spender: HexAddress;
}) => {
  // prepare approve
  const { config: approveConfig, isLoading: prepareLoading } = usePrepareContractWrite({
    address: addressERC20,
    abi: erc20ABI,
    functionName: 'approve',
    enabled: enabled,
    args: [spender, value],
  });

  // write approve
  const results = useContractWrite(approveConfig);

  // tx hook
  const {
    data: transactionData,
    status: transactionStatus,
    error: transactionError,
    isLoading: transactionLoading,
  } = useWaitForTransaction({
    hash: results?.data?.hash,
    enabled: results?.status === 'success',
  });

  return {
    ...results,
    data: transactionData?.logs[0].data
      ? new BigDecimal(transactionData?.logs[0].data, 18).simple
      : undefined,
    isLoading: prepareLoading || transactionLoading || results.isLoading,
    error: transactionError || results.error,
    txnStatus: transactionStatus,
  };
};
