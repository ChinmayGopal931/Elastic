import { HexAddress } from 'lib/constants';
import { erc20ABI, useContractRead } from 'wagmi';

export const useGetTokenAllowance = ({
  tokenAddress,
  owner,
  spender,
}: {
  tokenAddress: HexAddress;
  owner: HexAddress;
  spender: HexAddress | undefined;
}) => {
  return useContractRead({
    address: tokenAddress as HexAddress,
    abi: erc20ABI,
    functionName: 'allowance',
    args: [owner as HexAddress, spender as HexAddress],
    enabled: !!owner && !!spender,
  });
};
