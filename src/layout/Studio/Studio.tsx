import Mixer from 'components/StrategyVisualizer/StrategyVisualizer';
import LayoutHeader from 'components/UI/LayoutHeader/LayoutHeader';
import CreateVault from 'components/Studio/CreateVault';
import MultiSelectAndSearch from 'components/UI/MultiSelectAndSearch';
import Sushi from 'assets/studio/SushiLogo.svg';
import JonesDao from 'assets/studio/JonesDAO.svg';
import Frequency from 'assets/studio/frequency.svg';
import Harvest from 'assets/studio/harvest.svg';
import HarvestFrom from 'assets/studio/harvest_from.svg';
import ChartPieSlice from 'assets/studio/ChartPieSlice.svg';
import TabsWidget from 'components/TabsWidget/TabsWidget';
import CurrencyInput from 'components/UI/CurrencyInput/CurrencyInput';
import Plus from 'assets/icons/plus.svg';
import PlusGradient from 'assets/icons/plus_gradient.svg';
import Slider from 'components/UI/Slider';
import { Button } from 'components/UI/Button/Button';

import ChartPieSliceContainer from 'assets/studio/BottomContainer/ChartPieSlice.svg';
import Grains from 'assets/studio/BottomContainer/Grains.svg';
import Table from 'assets/studio/BottomContainer/Table.svg';
import Palette from 'assets/studio/BottomContainer/Palette.svg';
import Coins from 'assets/studio/BottomContainer/Coins.svg';
import { useState } from 'react';
import Card from 'components/Studio/Card';
import DataSlot from 'components/Studio/DataSlot';
import ActionWidget from 'components/ActionsWidget';
import DataBlock from 'components/DataBlock';

const VAULTS: any = [];

const StrategyVisual = [
  [
    {
      leftTopText: '$10k',
      leftBottom: 'USDC',
      rightText: 'Vault Name',
      image: '',
      right: true,
    },
  ],
  [
    {
      leftImage: '',
      leftTopText: '20%',
      leftBottom: 'USDC to ETH',
      rightText: 'Swapped In',
      rightImage: Sushi,
      right: true,
    },
    {
      leftImage: '',
      leftTopText: '40%',
      leftBottom: 'USDC',
      rightText: 'Staked In',
      rightImage: JonesDao,
      right: true,
    },
    {
      leftImage: '',
      leftTopText: '40%',
      leftBottom: 'USDC',
      rightText: 'Staked In',
      rightImage: '',
      right: true,
    },
  ],
  [
    {
      leftImage: '',
      leftTopText: '20%',
      leftBottom: 'ETH',
      rightText: 'Staked In',
      rightImage: JonesDao,
      right: true,
    },
  ],
  [
    {
      leftImage: Frequency,
      leftTopText: '3 Months',
      leftBottom: 'Frequency',
      rightText: '',
      rightImage: '',
      right: false,
    },
    {
      leftImage: Harvest,
      leftTopText: '7890',
      leftBottom: 'GMX',
      rightText: 'Harvest From',
      rightImage: HarvestFrom,
      right: true,
    },
    {
      leftImage: '',
      leftTopText: '2 Months',
      leftBottom: 'Frequency',
      rightText: '',
      rightImage: '',
      right: false,
    },
  ],
  [
    {
      leftImage: '',
      leftTopText: '45%',
      leftBottom: 'USDC',
      rightText: 'User Name',
      rightImage: '',
      right: true,
    },
  ],
];

const tabsWidgetProps = [
  {
    id: 'deposit-vault',
    title: 'Deposit',
    isActive: true,
  },
];

const inputProps = {
  icon: 'FCTR',
  setInputValue: (value: any) => console.log(value),
  inputValue: '00.00',
  currentAsset: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 8,
    address: '0x123123123123123123',
  },
  decimals: 4,
};

const Leverage_Info = [
  {
    label: 'Leverage Ratio',
    value: '$XXXX',
  },
  {
    label: 'Margin Maintenance',
    value: '$XXXX',
  },
  {
    label: 'Liquidation Threshold',
    value: '$XXXX',
  },
  {
    label: 'Unwinding Position',
    value: '$XXXX',
  },
  {
    label: 'Rebalancing',
    value: '$XXXX',
  },
];

const BOTTOM_CONTAINER = [
  {
    label: 'Asset Management',
    image: ChartPieSliceContainer,
  },
  {
    label: 'Farming',
    image: Grains,
  },
  {
    label: 'Risk Management',
    image: Table,
  },
  {
    label: 'Flexible Strategy Adjustments',
    image: Palette,
  },
  {
    label: 'Token Operation',
    image: Coins,
  },
];

const LEVERAGE = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const Studio = () => {
  const [leverage, setLeverage] = useState(0);
  const [renderDataList, setRenderDataList] = useState(true);
  const [action, setAction] = useState('Choose');
  const [renderAssets, setRenderAssets] = useState(true);

  const FirstVault = [
    [
      {
        leftTopText: '$10k',
        leftBottom: 'USDC',
        rightText: 'Vault Name',
        image: '',
        right: true,
      },
    ],
    [
      {
        ring: true,
        onClick: () => setRenderDataList(!renderDataList),
      },
    ],
    [
      {
        leftImage: '',
        leftTopText: '45%',
        leftBottom: 'USDC',
        rightText: 'User Name',
        rightImage: '',
        right: true,
      },
    ],
  ];

  return (
    <div className="gap-6 page-container">
      <LayoutHeader
        title="Studio"
        description="By Staking $FCTR tokens as $veFCTR, you can become a token holders and can actively participate in protocol governance, influence emissions control and direction, and earn a share of the protocol's revenue. This engagement allows for a truly decentralized and community-driven platform."
      />
      <div className="flex items-center gap-5">
        <MultiSelectAndSearch
          className="w-[430px]"
          data={VAULTS}
          placeholder="Search vaults"
          onChange={(value, newValue: any) => {}}
        />
        <CreateVault />
      </div>
      <h2 className="text-heading_light dark:text-heading_dark">Navigation</h2>
      {/* <Mixer
        strategyVisualization={StrategyVisual}
        heading="Strategy Visualization"
        icon={ChartPieSlice}
      />
      <Mixer
        strategyVisualization={FirstVault}
        heading="First Vault State"
        icon={ChartPieSlice}
      /> */}
      <div className="flex gap-5">
        <div className="w-8/12 mb-5 flex flex-col items-center">
          <h2 className="text-heading_light dark:text-heading_dark self-start">Data</h2>
          <DataBlock />
        </div>
        <div className="w-4/12">
          <h2 className="mb-5">Actions</h2>
          <ActionWidget type={action} setAction={setAction} />
        </div>
      </div>
    </div>
  );
};

export default Studio;
