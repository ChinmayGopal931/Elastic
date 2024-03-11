import { ethers } from 'ethers';

export async function simulateWithdrawAndGetAmount({
  withtdrawalShares,
  userAddress,
  vaultAddress,
}: {
  withtdrawalShares: string;
  userAddress: string;
  vaultAddress: string;
}) {
  const ALCHEMY_API_KEY = import.meta.env.VITE_ALCHEMY_API_KEY || process.env.VITE_ALCHEMY_API_KEY;

  const votingEscrowIface = new ethers.utils.Interface([
    'function withdraw(uint256 shares, address receiver, address owner)',
  ]);

  const encodedData = votingEscrowIface.encodeFunctionData('withdraw', [
    withtdrawalShares,
    userAddress,
    userAddress,
  ]);

  const body = {
    id: 42161,
    jsonrpc: '2.0',
    method: 'alchemy_simulateExecution',
    params: [
      {
        from: userAddress,
        to: vaultAddress,
        value: '0x0',
        data: encodedData,
      },
    ],
  };

  if (body) {
    try {
      const response = await fetch(`https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      if (data.result.logs.length === 0) return '0';
      const { data: logData, topics: logTopics } = data.result.logs[data.result.logs.length - 1];

      logTopics[1] = logTopics[1].replace('0x', '0x000000000000000000000000');
      logTopics[2] = logTopics[2].replace('0x', '0x000000000000000000000000');
      logTopics[3] = logTopics[3].replace('0x', '0x000000000000000000000000');

      let eventIface = new ethers.utils.Interface([
        'event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)',
      ]);

      const [, , , amount] = eventIface.decodeEventLog('Withdraw', logData, logTopics);

      return amount.toString();
    } catch (e) {
      console.log(e);
    }
  }
  return '0';
}
