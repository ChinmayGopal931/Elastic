import { ConnectButton } from '@rainbow-me/rainbowkit';

import CONNECTWALLET from 'assets/connect.svg';

const NoWalletWarning = () => {
  return (
    <div className="flex flex-col gap-y-5 h-80 w-full justify-center items-center">
      <img src={CONNECTWALLET} alt="" className="w-[220px] flex-grow" />
      <ConnectButton
        label="Connect Wallet"
        chainStatus="icon"
        accountStatus="address"
        showBalance={false}
      />
    </div>
  );
};

export default NoWalletWarning;
