import React, { useState } from 'react';
import SymbolLogo from 'components/UI/SymbolLogo/SymbolLogo';
import Slider from 'components/UI/Slider';

import Cross from 'assets/icons/cross.svg';
import Lock from 'assets/icons/lock.svg';
import Plus from 'assets/icons/plus.svg';
import CustomSwitch from 'components/UI/CustomSwitch/CustomSwitch';
import ListItem from 'components/ListItem';
import copy from 'assets/icons/copy.svg';
import link from 'assets/icons/link.svg';
import InnerLayoutHeader from 'components/Create/InnerLayoutHeader';
import HoverableTooltip from 'components/HoverableTooltip';
import { Asset, PermissionsAndFees as PermissionsAndFeesType } from 'types/VaultForm';
import { Button } from 'components/UI/Button/Button';
import { ethers } from 'ethers';

interface Props {
  data: PermissionsAndFeesType;
  onDataChange: (data: PermissionsAndFeesType) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

function PermissionsAndFees({ data, onDataChange, handleNextStep, handlePreviousStep }: Props) {
  const [initValues, setInitValues] = useState<PermissionsAndFeesType>(data);
  const [addManager, setAddManager] = useState<boolean>(false);
  const [addStrategist, setAddStrategist] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    let allowSubmission = true;
    if (addManager || addStrategist) {
      if (
        addManager &&
        addStrategist &&
        initValues.permissions.managers.length === 0 &&
        initValues.permissions.strategists.length === 0
      ) {
        allowSubmission = false;
        return setError('Please add managers and strategists to proceed');
      } else if (addManager && initValues.permissions.managers.length === 0) {
        allowSubmission = false;
        return setError('Please add manager(s) to proceed');
      } else if (addStrategist && initValues.permissions.strategists.length === 0) {
        allowSubmission = false;
        return setError('Please add strategist(s) to proceed');
      }
    }
    if (allowSubmission) {
      let validAddress = true;
      if (addManager) {
        initValues.permissions.managers.forEach((item) => {
          if (!ethers.utils.isAddress(item.address)) {
            validAddress = false;
          }
        });
      }
      if (addStrategist) {
        initValues.permissions.strategists.forEach((item) => {
          if (!ethers.utils.isAddress(item.address)) {
            validAddress = false;
          }
        });
      }
      let sumOfManagerFees = 0;
      let sumOfStrategyFees = 0;
      if (addManager) {
        initValues.permissions.managers.forEach(
          (asset) => (sumOfManagerFees += parseInt(asset.amount))
        );
        if (sumOfManagerFees !== 100) {
          setError('Fee allocation for managers should be accumulatively 100%');
          return false;
        }
      }
      if (addStrategist) {
        initValues.permissions.strategists.forEach(
          (asset) => (sumOfStrategyFees += parseInt(asset.amount))
        );
        if (sumOfStrategyFees !== 100) {
          setError('Fee allocation for strategists should be accumulatively 100%');
          return false;
        }
      }

      if (validAddress) {
        onDataChange(initValues);
        handleNextStep();
      } else {
        setError('Manager or Strategist address is not valid');
        return false;
      }
    }
  };

  return (
    <div className="flex flex-col self-center desktop:w-10/12 mobile:w-full mt-14">
      <div>
        <div>
          <InnerLayoutHeader
            heading="Permissions and Fees"
            caption={
              <p>
                This is where the creativity flows, choose your favorite assets and build your Vault
                <br /> Here are some Ideas on “What can you create with our vault?”: <br />
                Lending Pools, Tokenized Portfolio, Thematic Indices, Farms, Yield Aggregation
              </p>
            }
          />
        </div>
        <div className="flex mobile:flex-col desktop:flex-row gap-20">
          <div className="desktop:w-8/12">
            <h3 className="heading text-xl">Set Permissions</h3>
            <div className="flex mobile:flex-col desktop:flex-row justify-between desktop:w-6/12 mt-10">
              <div className="flex flex-col">
                <p className="heading text-base">Vault Privacy</p>
                <CustomSwitch
                  className="mt-3"
                  checked={initValues.permissions.vaultPrivacy}
                  leftLabel="Public"
                  rightLabel="Private"
                  onChange={(value) => {
                    setInitValues((prevValue) => {
                      return {
                        ...prevValue,
                        permissions: {
                          ...prevValue.permissions,
                          vaultPrivacy: value,
                        },
                      };
                    });
                  }}
                />
              </div>
              <div className="flex flex-col mobile:mt-5 desktop:mt-0">
                <p className="heading text-base">Vault Modification</p>
                <CustomSwitch
                  className="mt-3"
                  checked={initValues.permissions.vaultModification}
                  leftLabel="Locked"
                  rightLabel="Open"
                  onChange={(value) => {
                    setInitValues((prevValue) => {
                      return {
                        ...prevValue,
                        permissions: {
                          ...prevValue.permissions,
                          vaultModification: value,
                        },
                      };
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex items-center mt-10 justify-between">
              <CustomSwitch
                className="w-9/12"
                checked={addManager}
                rightLabel="Add Manager"
                onChange={(value) => setAddManager(value)}
              />
              <div className="w-4/12">
                <span className="heading text-base">Fee Allocation</span>
              </div>
            </div>
            {initValues.permissions.managers.map((item, index) => {
              return (
                <div className="flex desktop:flex-row mobile:flex-col desktop:gap-10">
                  <ListItem
                    className="desktop:w-8/12"
                    bordered
                    left={
                      <div className="flex items-center w-full">
                        <SymbolLogo symbol="FCTRLOGO" height={30} width={30} />
                        <p className="mobile:block desktop:hidden px-2 text-xs muted-text">
                          0xbc7...e2ee6a9
                        </p>
                        <input
                          type="text"
                          className="mobile:hidden desktop:block px-2 text-xs body-medium-15 bg-white dark:bg-background border-none w-full outline-none"
                          value={item.address}
                          onChange={(e) => {
                            setAddManager((prevValue) => {
                              const newArr = [...initValues.permissions.managers];
                              newArr[index].address = e.target.value;
                              setInitValues((prevValue) => {
                                return {
                                  ...prevValue,
                                  permissions: {
                                    ...prevValue.permissions,
                                    managers: newArr,
                                  },
                                };
                              });
                              return prevValue;
                            });
                          }}
                          placeholder="Type address here..."
                        />
                        <img className="h-[16px] w-[16px]" src={copy} alt="Copy Address" />
                        <img className="h-[16px] w-[16px] mx-3" src={link} alt="Share Address" />
                      </div>
                    }
                    right={
                      <div className="flex items-center">
                        <img src={Lock} style={{ width: 30, height: 30, marginRight: 20 }} />
                        <img
                          src={Cross}
                          style={{ width: 20, height: 20 }}
                          onClick={() => {
                            setAddManager((prevValue) => {
                              const newArr = [...initValues.permissions.managers];
                              newArr.splice(index, 1);
                              setInitValues((prevValue) => {
                                return {
                                  ...prevValue,
                                  permissions: {
                                    ...prevValue.permissions,
                                    managers: newArr,
                                  },
                                };
                              });
                              return prevValue;
                            });
                          }}
                        />
                      </div>
                    }
                  />
                  <div
                    className="bg-white dark:bg-background flex justify-between p-4 rounded-xl mt-3 items-center desktop:w-4/12"
                    style={{
                      height: 60,
                      border: 'solid #192F4D 1px',
                    }}
                  >
                    <Slider
                      showValue
                      value={parseInt(item.amount)}
                      setValue={(value) => {
                        setInitValues((prevValue) => {
                          const newArr = [...initValues.permissions.managers];
                          newArr[index].amount = value.toString();
                          return {
                            ...prevValue,
                            permissions: {
                              ...prevValue.permissions,
                              managers: newArr,
                            },
                          };
                        });
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {addManager && (
              <div
                className="bg-white dark:bg-background flex p-4 rounded-xl mt-3 items-center justify-center cursor-pointer"
                style={{ height: 60, border: 'solid #192F4D 1px' }}
                onClick={() => {
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      permissions: {
                        ...prevValue.permissions,
                        managers: [
                          ...prevValue.permissions.managers,
                          {
                            name: 'Factor',
                            symbol: 'FCTR',
                            icon: 'FCTR',
                            address: '',
                            amount: '0',
                            decimals: '8',
                            ratio: '0.1',
                          },
                        ],
                      },
                    };
                  });
                }}
              >
                <img src={Plus} />
              </div>
            )}
            <CustomSwitch
              className="mt-10"
              checked={addStrategist}
              rightLabel="Add Strategist"
              onChange={(value) => setAddStrategist(value)}
            />
            {initValues.permissions.strategists.map((item, index) => {
              return (
                <div className="flex desktop:flex-row mobile:flex-col desktop:gap-10">
                  <ListItem
                    className="desktop:w-8/12"
                    bordered
                    left={
                      <div className="flex items-center w-full">
                        <SymbolLogo symbol="FCTRLOGO" height={30} width={30} />
                        <p className="mobile:block desktop:hidden px-2 text-xs muted-text">
                          0xbc7...e2ee6a9
                        </p>
                        <input
                          type="text"
                          className="mobile:hidden desktop:block px-2 body-medium-14 bg-white dark:bg-background border-none w-full outline-none"
                          value={item.address}
                          onChange={(e) => {
                            setAddStrategist((prevValue) => {
                              const newArr = [...initValues.permissions.strategists];
                              newArr[index].address = e.target.value;
                              setInitValues((prevValue) => {
                                return {
                                  ...prevValue,
                                  permissions: {
                                    ...prevValue.permissions,
                                    strategists: newArr,
                                  },
                                };
                              });
                              return prevValue;
                            });
                          }}
                          placeholder="Type address here ..."
                        />
                        <img className="h-[16px] w-[16px]" src={copy} alt="Copy Address" />
                        <img className="h-[16px] w-[16px] mx-3" src={link} alt="Share Address" />
                      </div>
                    }
                    right={
                      <div className="flex items-center">
                        <img src={Lock} style={{ width: 30, height: 30, marginRight: 20 }} />
                        <img
                          src={Cross}
                          style={{ width: 20, height: 20 }}
                          onClick={() => {
                            setAddManager((prevValue) => {
                              const newArr = [...initValues.permissions.strategists];
                              newArr.splice(index, 1);
                              setInitValues((prevValue) => {
                                return {
                                  ...prevValue,
                                  permissions: {
                                    ...prevValue.permissions,
                                    strategists: newArr,
                                  },
                                };
                              });
                              return prevValue;
                            });
                          }}
                        />
                      </div>
                    }
                  />
                  <div
                    className="bg-white dark:bg-background flex justify-between p-4 rounded-xl mt-3 items-center desktop:w-4/12"
                    style={{
                      height: 60,
                      border: 'solid #192F4D 1px',
                    }}
                  >
                    <Slider
                      showValue
                      value={parseInt(item.amount)}
                      setValue={(value) => {
                        setInitValues((prevValue) => {
                          const newArr = [...initValues.permissions.strategists];
                          newArr[index].amount = value.toString();
                          return {
                            ...prevValue,
                            permissions: {
                              ...prevValue.permissions,
                              strategists: newArr,
                            },
                          };
                        });
                      }}
                    />
                  </div>
                </div>
              );
            })}

            {addStrategist && (
              <div
                className="bg-white dark:bg-background flex p-4 rounded-xl mt-3 items-center justify-center cursor-pointer"
                style={{ height: 60, border: 'solid #192F4D 1px' }}
                onClick={() => {
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      permissions: {
                        ...prevValue.permissions,
                        strategists: [
                          ...prevValue.permissions.strategists,
                          {
                            name: 'Factor',
                            symbol: 'FCTR',
                            icon: 'FCTR',
                            address: '',
                            amount: '0',
                            decimals: '8',
                            ratio: '0.1',
                          },
                        ],
                      },
                    };
                  });
                }}
              >
                <img src={Plus} />
              </div>
            )}
            {error && <div className="error-text">{error}</div>}
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg leading-6 heading font-semibold">Set Fees</h3>
            <HoverableTooltip
              heading="Management Fees"
              tooltipContent={
                <span>
                  Annualized fee based on AUM.
                  <br /> Investors will pay a pro-
                  <br />
                  rated fee based on their <br />
                  contributions to AUM
                </span>
              }
            />
            <div
              className="bg-white dark:bg-background flex justify-between p-4 rounded-xl mt-3 items-center w-full"
              style={{
                height: 45,
                border: 'solid #192F4D 1px',
              }}
            >
              <Slider
                showValue
                value={initValues.fees.managementFee}
                setValue={(value) => {
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      fees: {
                        ...prevValue.fees,
                        managementFee: value,
                      },
                    };
                  });
                }}
              />
            </div>
            <div className="mt-4" />
            <HoverableTooltip
              heading="Performance Fees"
              tooltipContent={
                <span>
                  E.g 20% above high water
                  <br /> mark The HWM will be <br />
                  individual and based on <br />
                  each investor's time of...
                </span>
              }
            />
            <div
              className="bg-white dark:bg-background flex justify-between p-4 rounded-xl mt-3 items-center desktop:w-[300px]"
              style={{
                height: 45,
                border: 'solid #192F4D 1px',
              }}
            >
              <Slider
                showValue
                value={initValues.fees.performanceFee}
                setValue={(value) => {
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      fees: {
                        ...prevValue.fees,
                        performanceFee: value,
                      },
                    };
                  });
                }}
              />
            </div>
            <div className="mt-4" />
            <HoverableTooltip
              heading="Shared Fees"
              tooltipContent={
                <span>
                  E.g 20% above high water
                  <br /> mark The HWM will be <br />
                  individual and based on <br />
                  each investor's time of...
                </span>
              }
            />
            <div
              className="bg-white dark:bg-background flex justify-between p-4 rounded-xl mt-3 items-center"
              style={{
                height: 45,
                border: 'solid #192F4D 1px',
              }}
            >
              <Slider
                showValue
                value={initValues.fees.sharedFee}
                setValue={(value) => {
                  setInitValues((prevValue) => {
                    return {
                      ...prevValue,
                      fees: {
                        ...prevValue.fees,
                        sharedFee: value,
                      },
                    };
                  });
                }}
              />
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

export default PermissionsAndFees;
