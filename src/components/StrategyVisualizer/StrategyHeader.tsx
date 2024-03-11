import React from 'react';
import User from 'assets/user.svg';
import { motion } from 'framer-motion';
import Divider from './Divider';
import { Token } from 'lib/constants/tokens';
import { useMediaQuery } from 'usehooks-ts';
import TokenBox from 'components/Actions/UI/TokenBox';
import VaultSVG from 'assets/vault.svg';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';

interface Props {
  vaultName: string;
  newDenominators: Token[];
}

const DefaultView: React.FC<Props> = ({ vaultName, newDenominators }) => {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="flex flex-row items-center justify-center w-full gap-4">
        <img src={User} alt="" className="w-10 h-10 p-2 shadow-xl ring-2 rounded-xl" />
        <Divider direction="right" />
        <div className="flex flex-col items-center justify-center gap-3">
          {newDenominators?.map((denominator: Token) => (
            <TokenBox key={denominator?.symbol} token={denominator} />
          ))}
        </div>

        <Divider direction="right" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2.5 ring-2 p-3 rounded-xl justify-center text-center w-1/2"
        >
          <SymbolLogo symbol={'FCTR'} height={24} width={24} />
          <p className="body-medium-15">{vaultName} Vault</p>
        </motion.div>
        <Divider direction="right" />
        <div className="flex flex-col items-center justify-center gap-3">
          {newDenominators?.map((denominator: Token) => (
            <TokenBox key={denominator?.symbol} token={denominator} />
          ))}
        </div>
        <Divider direction="right" />
        <img src={User} alt="" className="w-10 h-10 p-2 shadow-xl ring-2 rounded-xl" />
      </div>
      <div className="flex flex-row w-40 ">
        <Divider direction="down" />
        <Divider direction="up" />
      </div>
    </div>
  );
};

const MobileView: React.FC<Props> = ({ vaultName, newDenominators }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <div className="flex flex-row items-center justify-around w-full gap-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={User} alt="" className="w-10 h-10 p-2 my-2 shadow-xl ring-2 rounded-xl" />
          <Divider direction="down" />
          <div className="flex flex-col items-center justify-center gap-3">
            {newDenominators?.map((denominator: Token) => (
              <TokenBox key={denominator?.symbol} token={denominator} />
            ))}
          </div>
          <Divider direction="down" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <img src={User} alt="" className="w-10 h-10 p-2 my-2 shadow-xl ring-2 rounded-xl" />

          <Divider direction="up" />
          <div className="flex flex-col items-center justify-center gap-3">
            {newDenominators?.map((denominator: Token) => (
              <TokenBox key={denominator?.symbol} token={denominator} />
            ))}
          </div>
          <Divider direction="up" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2.5 ring-2 p-3 rounded-xl my-2 justify-center text-center w-10/12"
      >
        <SymbolLogo symbol={'FCTR'} height={24} width={24} />
        <p className="body-medium-14">{vaultName} Vault</p>
      </motion.div>

      <div className="flex flex-row w-40 ">
        <Divider direction="down" />
        <Divider direction="up" />
      </div>
    </div>
  );
};

const StrategyHeader = (props: Props) => {
  const isMobileView = useMediaQuery('(max-width: 1000px)');
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-center w-full pt-7">
        {isMobileView ? <MobileView {...props} /> : <DefaultView {...props} />}
      </div>
    </div>
  );
};

export default StrategyHeader;
