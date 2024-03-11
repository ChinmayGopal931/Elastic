import React from 'react';
import Card from 'components/Studio/Card';
import DataSlot from 'components/Studio/DataSlot';
import LeverageIcon from 'assets/studio/Icons/leverage.svg';
import LeverageCard from 'components/Actions/LeverageCard';
import LeverageWidget from 'components/LeverageWidget';

const DATA = [
  { label: 'Current Leverage', value: 'XXX' },
  { label: 'Leverage Range', value: 'XXX' },
  { label: 'Last Modified', value: '1W ago' },
  { label: 'Modifications Made', value: 'X Times' },
];

const TOP_CARDS = [
  { title: 'Max Leverage Range', value: '30.45X' },
  {
    title: 'Liquidation Price',
    value: '$XXXX',
  },
  {
    title: 'Collateral Required',
    value: '$XXXX',
  },
];

const BOTTOM_CARDS = [
  {
    title: 'Current Margin Level',
    value: '14%',
  },
  {
    color: '#F5945F',
    title: 'Risk Level',
    value: 'Moderate',
  },
  {
    title: 'Total Profit/Loss',
    value: '$XXXX',
  },
  {
    title: 'Total Yield',
    value: '$XXXX',
  },
];

const Leverage = () => {
  return (
    <>
      <DataSlot icon={LeverageIcon} headingCurrency="ETH" headingValue="XX.XX" data={DATA} />
      <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-8 mt-5">
        <LeverageWidget />
        <div className="flex justify-between my-5 gap-5">
          {TOP_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} />;
          })}
        </div>
        <div className="flex justify-between my-5 gap-5">
          {BOTTOM_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} color={item.color} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Leverage;
