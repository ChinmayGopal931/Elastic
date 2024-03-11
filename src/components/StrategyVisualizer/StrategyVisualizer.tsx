import { useState, useMemo } from 'react';
import Arrow from 'assets/arrow-right.svg';
import BaseActionCard from './BaseActionCard';
import { Button } from 'components/UI/Button/Button';
import { Action } from 'components/Actions/types';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

import User from 'assets/user.svg';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import StrategyHeader from './StrategyHeader';
import { Token } from 'lib/constants/tokens';

interface Strategy {
  strategy: Action[];
  vaultName: string;
  newDenominators: Token[];
}

const StrategyVisualizer = (props: Strategy) => {
  const { vaultName, newDenominators, strategy } = props;

  // ! This is the steps controlers, we don't need it for now
  // const [currentStep, setCurrentStep] = useState(0);
  // const [areAllCardsOpen, setAreAllCardsOpen] = useState(true);

  // const goToNextStep = () => {
  //   setCurrentStep((prev) => Math.min(prev + 1, props.strategy.length - 1));
  // };

  // const goToPreviousStep = () => {
  //   setCurrentStep((prev) => Math.max(prev - 1, 0));
  // };

  return (
    <div className="justify-center">
      <div className="flex flex-col items-center gap-10 p-5 desktop:p-10 bg-white dark:bg-ui_surface rounded-xl justify-center shadow-xl dark:shadow-lg overflow-hidden">
        <StrategyHeader vaultName={vaultName} newDenominators={newDenominators} />
        <AnimatePresence>
          {strategy.map((action: Action, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-5"
              >
                <BaseActionCard {...action} action={action} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StrategyVisualizer;
