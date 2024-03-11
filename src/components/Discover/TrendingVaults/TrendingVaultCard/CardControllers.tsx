import { Button } from 'components/UI/Button/Button';
import React from 'react';
import { VaultType } from 'state/vault/types';

type Props = {
  isTVL: boolean;
  setIsTVL: (isTVL: boolean) => void;
  vaultType: VaultType;
};

const CardControllers = (props: Props) => {
  const { isTVL, setIsTVL, vaultType } = props;
  return (
    <div className="flex flex-row justify-center absolute bottom-0 w-full mb-4">
      <div className="gradiant-border ">
        <div className="flex flex-row bg-white dark:bg-ui_surface_opc rounded-lg w-[156px] h-8">
          <Button
            variant="discovery-chart-btn"
            className={` ${
              isTVL
                ? 'bg-white dark:bg-ui_surface_opc hover:opacity-70 transition-opacity duration-200'
                : 'gradiant-color font-bold'
            }`}
            onClick={() => setIsTVL(false)}
          >
            {vaultType === 'genesis' ? 'SP' : 'APY'}
          </Button>
          <Button
            variant="discovery-chart-btn"
            className={` ${
              isTVL
                ? 'gradiant-color font-bold'
                : 'bg-white dark:bg-ui_surface_opc hover:opacity-70 transition-opacity duration-200'
            }`}
            onClick={() => setIsTVL(true)}
          >
            TVL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardControllers;
