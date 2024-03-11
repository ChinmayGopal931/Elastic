import { useState } from 'react';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import Slider from 'components/UI/Slider';
import Cross from 'assets/icons/cross.svg';
import Lock from 'assets/icons/lock.svg';
import CustomSwitch from 'components/UI/CustomSwitch/CustomSwitch';
import Dropdown from 'components/UI/Dropdown/Dropdown';
import InnerLayoutHeader from 'components/Create/InnerLayoutHeader';
import 'rc-tooltip/assets/bootstrap.css';
import HoverableTooltip from 'components/HoverableTooltip';
import { AssetsAndParams } from 'types/VaultForm';
import { Button } from 'components/UI/Button/Button';
import MultiSelectAndSearch from 'components/UI/MultiSelectAndSearch';

const assetsList = [
  { value: 'USDT', label: 'USDT' },
  { value: 'USDC', label: 'USDC' },
  { value: 'ARB', label: 'ARB' },
];
interface Props {
  data: AssetsAndParams;
  onDataChange: (data: AssetsAndParams) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

function AddAssets({ data, onDataChange, handleNextStep, handlePreviousStep }: Props) {
  const [assets, setAssets] = useState<any>([]);
  const [error, setError] = useState<string>('');
  const [initValues, setInitValues] = useState<AssetsAndParams>({
    assets: [],
    params: {
      equalWeight: false,
      frequency: 'Daily',
      marketCapWeight: false,
    },
  });

  const handleRemoval = (index: number) => {
    let newArr = [...initValues.assets];
    newArr.splice(index, 1);
    setInitValues((prevValue) => {
      return {
        ...prevValue,
        assets: [...newArr],
      };
    });
    let newAsset = [...assets];
    newAsset.splice(index, 1);
    setAssets(newAsset);
    setError('');
  };

  const handleSubmit = () => {
    if (initValues && initValues.assets.length > 0) {
      // @ts-ignore
      // TODO: Fix this after getting the form state
      let sumOfAmount = 0;
      initValues.assets.forEach((asset) => (sumOfAmount += parseInt(asset.amount)));
      if (sumOfAmount === 100) {
        onDataChange(initValues);
        handleNextStep();
      } else {
        setError('Sum of all assets should be 100, please adjust the amount');
      }
    } else setError('Please add atleast one asset to proceed');
  };

  return (
    <div className="flex flex-col self-center desktop:w-10/12 mobile:w-full mt-14">
      <div>
        <div className="flex flex-col desktop:w-10/12">
          <InnerLayoutHeader
            heading="Assets and Parameters"
            caption={
              <p>
                This is where the creativity flows, choose your favorite assets and build your Vault
                <br /> Here are some Ideas on “What can you create with our vault?”:
                <br />
                Lending Pools, Tokenized Portfolio, Thematic Indices, Farms, Yield Aggregation
              </p>
            }
          />
          <div className="flex desktop:gap-20 mobile:gap-10 mobile:flex-col desktop:flex-row">
            <div className="desktop:w-8/12">
              <h3 className="heading text-xl">Add Assets</h3>
              <MultiSelectAndSearch
                value={assets}
                data={assetsList}
                placeholder="Search assets"
                onChange={(value, newValue: any) => {
                  let newArr = [...initValues.assets];
                  newArr.push({
                    name: newValue.option.label,
                    symbol: newValue.option.value,
                    icon: 'FCTR',
                    address: '0xb513325d0fbbf99deewc59932ec7e2ee785e6a9',
                    amount: '0',
                    decimals: '8',
                    ratio: '0.1',
                  });
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      assets: [...newArr],
                    };
                  });
                  setAssets(value);
                  setError('');
                }}
              />
              {assets.length ? (
                <h5 className="mt-5 heading text-base">Chosen Assets</h5>
              ) : undefined}
              {initValues.assets.map((item, index) => {
                return (
                  <div
                    className="bg-white dark:bg-background flex justify-between p-4 rounded-xl items-center mt-3"
                    style={{
                      height: 60,
                      border: 'solid #192F4D 1px',
                    }}
                  >
                    <div className="flex items-center w-3/12">
                      <SymbolLogo symbol={item.icon} height={30} width={30} />
                      <p className="px-2 heading text-base">{item.name}</p>
                      <p className="text-xs muted-text">{item.symbol}</p>
                    </div>
                    <div className="w-5/12">
                      <Slider
                        showValue
                        value={parseInt(item.amount)}
                        setValue={(value) => {
                          setInitValues((prevValue) => {
                            let newArr = [...initValues.assets];
                            newArr[index].amount = value.toString();
                            return {
                              ...prevValue,
                              assets: [...newArr],
                            };
                          });
                          setError('');
                        }}
                      />
                    </div>
                    <div className="flex items-center">
                      <img
                        className="cursor-pointer"
                        src={Lock}
                        style={{ width: 30, height: 30, marginRight: 20 }}
                      />
                      <img
                        src={Cross}
                        style={{ width: 20, height: 20 }}
                        className="cursor-pointer"
                        onClick={() => handleRemoval(index)}
                      />
                    </div>
                  </div>
                );
              })}
              {error ? <div className="error-text">{error}</div> : null}
            </div>
            <div className="flex flex-col desktop:w-4/12 mt-3">
              <div>
                <h3 className="text-xl leading-6 heading font-semibold">Set Parameters</h3>
                <h4 className="mt-4 text-base leading-6 heading font-semibold flex items-center heading">
                  Rebalancing Logic
                </h4>
                <CustomSwitch
                  className="mt-5"
                  rightLabel="Equal Weights"
                  checked={initValues.params.equalWeight}
                  onChange={(value) => {
                    setInitValues((prevValue) => {
                      return {
                        ...prevValue,
                        params: {
                          ...prevValue.params,
                          equalWeight: value,
                        },
                      };
                    });
                  }}
                />
                <CustomSwitch
                  className="mt-5"
                  rightLabel="Market Cap"
                  checked={initValues.params.marketCapWeight}
                  onChange={(value) => {
                    setInitValues((prevValue) => {
                      return {
                        ...prevValue,
                        params: {
                          ...prevValue.params,
                          marketCapWeight: value,
                        },
                      };
                    });
                  }}
                />
                <div className="mt-4" />
                <HoverableTooltip
                  heading="Rebalancing Frequency"
                  tooltipContent={
                    <span>
                      Options for a predetermined
                      <br /> time interval (any limit &gt;= 1d),
                      <br /> deviation threshold, or
                      <br /> no rebalancing.
                    </span>
                  }
                />
                <Dropdown
                  bordered
                  className="mt-4 min-h-[50px]"
                  placeHolder="Choose Frequency"
                  options={[
                    { title: 'Daily' },
                    { title: 'Weekly' },
                    { title: 'Monthly' },
                    { title: 'Yearly' },
                  ]}
                  theme={{ type: 'asset' }}
                  selectedLabel={initValues.params.frequency}
                  setSelectedOption={(value: string) => {
                    setInitValues((prevValue) => {
                      return {
                        ...prevValue,
                        params: {
                          ...prevValue.params,
                          frequency: value,
                        },
                      };
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-10 desktop:w-full mobile:w-full desktop:justify-end mobile:justify-between">
        <Button variant="back-btn" className="mr-5" onClick={handlePreviousStep}>
          Back
        </Button>
        <Button variant="next-btn" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default AddAssets;
