import InfoCard from 'components/UI/InfoCard/InfoCard';
import VaultDetails from 'components/VaultDetails/VaultDetails';
import LayoutHeader from 'components/UI/LayoutHeader/LayoutHeader';
import Tags from 'components/UI/Tags/Tags';
import ChoosenAssets from './Assets';
import Parameters from './Parameters';
import Permissions from './Permissions';
import Fees from './Fees';
import VaultStats from 'components/UI/VaultStats/VaultStats';
import { formatValue } from 'lib/helpers/helpers';
import { VaultForm } from 'types/VaultForm';

interface Props {
  data: VaultForm;
}

function VaultRoom({ data }: Props) {
  const tabsWidgetProps = [
    {
      id: 'deposit-vault',
      title: 'Deposit',
      isActive: true,
    },
  ];

  const vaultDetailsProps = [
    {
      id: 'choosen-assets',
      title: 'Assets',
      isActive: true,
      component: <ChoosenAssets data={data.assetsAndParams} />,
    },
    {
      id: 'parameters',
      title: 'Parameters',
      isActive: true,
      component: <Parameters data={data.assetsAndParams} />,
    },
    {
      id: 'permissions',
      title: 'Permissions',
      isActive: false,
      component: <Permissions />,
    },
    {
      id: 'fees-vault',
      title: 'Fees',
      isActive: false,
      component: <Fees />,
    },
  ];

  const vaultStats = [
    {
      key: 'AUM',
      value: '$XXXXX',
      icon: 'flag',
    },
    {
      key: '24H Volume',
      value: '$XXXX',
      icon: 'envelope',
    },
    {
      key: 'Share Price',
      value: '$50M',
      icon: 'dollar',
    },
  ];
  return (
    <div className="flex mobile:flex-col desktop:flex-row w-full justify-between gap-10 mt-10">
      <div className="w-full">
        <LayoutHeader title={'Rountable Index'} symbol={'RNDTX'} />
        <Tags tags={['Ecosystem', 'Index', 'Index']} />
        <p className="text-xs text-body_light_dark font-medium leading-6 tracking-wider max-w-[725px] my-10">
          This is where it all start, go over your Vault details on the left side and initiate your
          vault on the right and see how it preforms
        </p>
        <VaultStats vaultStats={vaultStats} />
        <VaultDetails tabs={vaultDetailsProps} />
      </div>
      <div className="flex flex-col desktop:w-3/12">
        <InfoCard
          infoCard={[
            { key: 'RNDTX Balance', value: '' },
            { key: 'Unrealized PNL', value: '00.00' },
            { key: 'Since Deposit', value: '00.00' },
          ]}
        />
        <div className="mt-8">{/* <TabsWidget tabs={tabsWidgetProps} /> */}</div>
      </div>
    </div>
  );
}

export default VaultRoom;
