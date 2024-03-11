import React from 'react';
import { BigDecimal } from 'lib/helpers/BigDecimal';
import { Button } from '../Button/Button';

interface PercentageSelectorProps {
  balance?: BigDecimal;
  onPercentageChange: (value: string) => void;
  className?: string;
}

const PercentageSelector: React.FC<PercentageSelectorProps> = ({
  balance,
  onPercentageChange,
  className,
}) => {
  const handlePercentageChange = (percent: number) => {
    if (balance) {
      const value = balance.divPrecisely(BigDecimal.fromSimple(percent)).toReadable();
      onPercentageChange(value);
    }
  };

  return (
    <div className={className}>
      <div className="gradiant-border w-12 h-8">
        <Button onClick={() => handlePercentageChange(4)} variant="percentage-selector">
          25%
        </Button>
      </div>
      <div className="gradiant-border w-12 h-8">
        <Button onClick={() => handlePercentageChange(2)} variant="percentage-selector">
          50%
        </Button>{' '}
      </div>
      <div className="gradiant-border w-12 h-8">
        <Button
          onClick={() => handlePercentageChange(1.3333333333333333)}
          variant="percentage-selector"
        >
          75%
        </Button>{' '}
      </div>
      <div className="gradiant-border w-12 h-8">
        <Button onClick={() => handlePercentageChange(1)} variant="percentage-selector">
          100%
        </Button>{' '}
      </div>
    </div>
  );
};

export default PercentageSelector;
