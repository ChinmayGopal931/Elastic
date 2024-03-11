import { useState } from 'react';

import FaucetDialog, { FaucetDialogProps } from '../Dialogs/FaucetDialog';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const [dialogProps, setDialogProps] = useState<FaucetDialogProps>({
    isOpen: false,
  } as FaucetDialogProps);

  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-center bg-primary_brand_01">
        <p
          className="text-white font-bold text-base py-2 cursor-pointer text-center"
          onClick={() =>
            setDialogProps({
              isOpen: true,
            } as FaucetDialogProps)
          }
        >
          {t('testnet_faucet_banner')}
        </p>
      </div>
      <FaucetDialog
        isOpen={dialogProps.isOpen}
        onClose={() =>
          setDialogProps({
            isOpen: false,
          } as FaucetDialogProps)
        }
      />
    </>
  );
};

export default Banner;
