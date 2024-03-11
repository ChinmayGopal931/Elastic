import React from 'react';
import Card from 'components/Studio/Card';
import DataSlot from 'components/Studio/DataSlot';

import StakeIcon from 'assets/studio/Icons/stake.svg';
import StakeDummy from 'assets/studio/stake-dummy.svg';
import StakedAt from 'assets/studio/Icons/staked-at.svg';
import InfoCard from 'components/Studio/InfoCard';

const DATA = [
  { label: 'Staked At', value: <img src={StakedAt} /> },
  { label: 'Last Stake', value: '3 Days Ago' },
  { label: 'APY', value: '$XXXX' },
  { label: 'Total Rewards', value: '$XXXX' },
  { label: 'Next Reward', value: '17 Days' },
];

const TOP_CARDS = [
  { title: 'Estimated APY', value: '14%' },
  {
    title: 'Total Staked',
    value: '$XXXX',
  },
  {
    title: 'Lock Up Time',
    value: '1 Year',
  },
];

const BOTTOM_CARDS = [
  {
    title: 'Total Earned',
    value: '$XXXX',
  },
  {
    title: 'Last Staked',
    value: '1 Week Ago',
  },
  {
    title: 'Next Stake',
    value: '1 Week',
  },
];

const Stake = () => {
  return (
    <>
      <DataSlot
        leftIcon={StakeIcon}
        middleText="+"
        leftHeadingValue="XX.XX"
        leftHeadingCurrency="USDT"
        headingCurrency="ETH"
        headingValue="XX.XX"
        data={DATA}
      />
      <div className="w-full rounded-xl shadow-xl dark:shadow-lg bg-white dark:bg-ui_surface p-8 mt-5">
        <div className="flex items-center gap-10">
          <InfoCard leftText="$XXXX" rightDescription="Staked At" rightImage={StakeDummy} />
          <InfoCard leftText="00.00 $XXXX" rightDescription="Staked At" rightImage={StakeDummy} />
        </div>
        <div className="flex justify-between my-5 gap-5">
          {TOP_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} />;
          })}
        </div>
        <div className="flex justify-between my-5 gap-5">
          {BOTTOM_CARDS.map((item) => {
            return <Card title={item.value} description={item.title} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Stake;
