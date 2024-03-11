import VaultAddress from 'components/UI/VaultAddress/VaultAddress';
import config from 'config';
import { HexAddress } from 'lib/constants';
import { useBoundStore } from 'state/store';

const Overview = () => {
  const currentVaultAddress = useBoundStore((state) => state.currentVault);
  return (
    <div className="w-full p-6 rounded-lg bg-white dark:bg-ui_surface shadow-xl dark:shadow-lg">
      <div className="flex flex-col flex-wrap w-full desktop:max-w-[812.76px] ">
        <h2 className="mb-4 text-xl font-semibold leading-6 tracking-wider text-center desktop:mb-5 desktop:text-left heading">
          Vault Overview
        </h2>
        <p className="leading-6 tracking-wider body-medium-14 font-bold">
          {/* TODO: change key */}
          {currentVaultAddress?.strategy?.strategyDescription || currentVaultAddress?.description}
        </p>
      </div>
      <div className="flex flex-row items-center w-full mt-5">
        <p className="mr-3 font-semibold tracking-widest text-2xs body-medium-14">Address:</p>
        <VaultAddress
          address={currentVaultAddress?.address as HexAddress}
          start={20}
          end={3}
          isTrunced={true}
        />
      </div>
    </div>
  );
};

export default Overview;
