import React from 'react';

interface Props {
  amount: number;
  symbol: string;
}

const AmountBox = (props: Props) => {
  const { amount, symbol } = props;
  return (
    <div className="flex flex-col items-center gap-2 p-2 ring-2 rounded-xl">
      <p className="body-medium-14">
        {amount} {symbol}
      </p>
    </div>
  );
};

export default AmountBox;
