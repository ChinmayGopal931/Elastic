import { BigDecimal } from 'lib/helpers/BigDecimal';
import { useEffect, useState } from 'react';
import { Token } from 'state/vault/types';
import Dropdown, { DropdownProps } from '../Dropdown/Dropdown';
import { NumericInput } from '../NumericInput/NumericInput';
import PercentageSelector from '../PercentageSelector/PercentageSelector';
import SymbolLogo from '../SymbolLogo/SymbolLogo';
import LoadingText from '../LoadingText/LoadingText';
import Slider from 'components/UI/Slider';
import { Button } from '../Button/Button';
import External from 'assets/icons/external.svg';
import { supportedTokens } from 'lib/constants/tokens';

interface CurrencyInputProps {
  balance?: BigDecimal;
  inputValue: string;
  setInputValue: (value: string) => void;
  dropdownOptions?: Token[];
  currentAsset: Token;
  setCurrentAsset?: (value: string) => void;
  isDisabled?: boolean;
  isDropDown?: boolean;
  addButton?: boolean;
  buttonText?: string;
  decimals?: number;
  isLoading?: boolean;
  showPercentage?: boolean;
  symbol?: string;
  percentage?: number;
  setPercentage?: (value: number) => void;
  liquidityLink?: string;
}

const CurrencyInput = (props: CurrencyInputProps) => {
  const [validateMessage, setValidateMessage] = useState('');

  // Input side effects
  useEffect(() => {
    if (props.balance && props.inputValue) {
      const convertInput = BigDecimal.parse(props.inputValue, props.decimals || 18);

      if (convertInput.exact.gt(props.balance.exact)) {
        setValidateMessage('Insufficient Balance');
      } else {
        setValidateMessage('');
      }
    }
  }, [props.inputValue]);

  // =============================================================
  //                       Dropdown Props
  // =============================================================
  const options = props?.dropdownOptions?.map((token) => {
    return {
      title: token.symbol,
      icon: token.logo,
    };
  });

  const dropdownProps: DropdownProps = {
    selectedLabel: props.currentAsset.symbol,
    options: options ? options : [],
    theme: {
      type: 'asset',
      icon: props.currentAsset.logo,
    },
    setSelectedOption: () => {},
  };

  const smybolMap = () => {
    return props.symbol || props.currentAsset.symbol;
  };

  const PERCENTAGE_LABEL = ['0%', '25%', '50%', '75%', '100%'];

  const [chain, setChain] = useState<String>('');

  const [text, setText] = useState('');
  const [input, setInput] = useState<{}>();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);

    // console.log(Object.values(props?.allTokens).map((token) => {if(props?.token == token?.symbol)}))
  };

  return (
    <div className="box-border flex flex-col w-full px-4 pt-4 pb-4 bg-white shadow-xl rounded-xl dark:shadow-lg dark:bg-ui_surface">
      <div className="flex flex-row items-center justify-between">
        {props.isLoading ? (
          <div className="w-full text-2xl text-left border-none outline-none text-heading_dark">
            <LoadingText />
          </div>
        ) : (
          <>
            {props?.isCross && (
              <select
                value={chain || 'Base'}
                onChange={(e) => setChain(e.target.value)}
                className="w-1/4 bg-sec_brand_01 border-ui_accent rounded-lg text-white "
              >
                <option value="" disabled>
                  Select an option
                </option>

                {['Base', 'Ethereum', 'Polygon']?.map((asset, index) => (
                  <option key={`${asset} ${index}`} className="">
                    <p className="font-bold body-regular-15 w-[10px]">{asset}</p>
                  </option>
                ))}
              </select>
            )}
            <NumericInput
              maxDecimals={props.decimals}
              className="w-full text-2xl text-left bg-white border-none outline-none dark:bg-ui_surface heading focus:ring-0"
              type="number"
              disabled={props.isDisabled}
              placeholder="0"
              value={props?.useOut ? props?.inputValue : text}
              onUserInput={(value: string) => {
                setText(value);
              }}
            />
          </>
        )}
        {props.isLoading ? (
          <LoadingText />
        ) : props.dropdownOptions ? (
          <Dropdown {...dropdownProps} />
        ) : (
          <div className="flex flex-row gradiant-border">
            <div className="selected-token-container">
              {/* Display additional styling for the selected token */}
            </div>

            {/* <div>
              <select value={selectedOption} onChange={handleSelectChange}>
                <option value={props?.token || 'ETH'} disabled>
                  Select an option
                </option>
                {optionsDrop.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.symbol}
                  </option>
                ))}
              </select>

              <p>Selected Option: {selectedOption}</p>
            </div> */}

            <select
              value={props?.token || 'ETH'}
              onChange={(e) => props?.setToken(e.target.value)}
              className="input-field mobile:w-full p-1"
            >
              <option value="" disabled>
                Select an option
              </option>

              {props?.allTokens?.map((asset, index) => (
                <option key={`${asset.name} ${index}`}>
                  <p className="font-bold body-regular-15">{asset.symbol}</p>
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      {props.addButton && (
        <Button variant="next-btn" className="ml-3">
          {props.buttonText ? props.buttonText : 'Add'}
        </Button>
      )}

      {/* {props.balance && (
        <>
          <div className="flex flex-col space-x-1">
            {props.balance.exact.gt(0) && (
              <PercentageSelector
                balance={props.balance}
                onPercentageChange={props.setInputValue}
                className="flex flex-row items-center justify-start w-full gap-2 mt-4 "
              />
            )}
            {!validateMessage ? (
              <div className="flex flex-row w-full justify-between mt-4 items-center">
                <p
                  className="text-left cursor-pointer body-medium-14 hover:opacity-70"
                  onClick={(e) => {
                    if (props.balance) {
                      props.setInputValue(props.balance.toReadable());
                    }
                  }}
                >
                  Balance:{' '}
                  {props.balance.exact.gt(0)
                    ? props.balance.toReadable().length > 10
                      ? props.balance.toReadable().substring(0, 10) + '...'
                      : props.balance.toReadable()
                    : '0'}
                </p>
                {props.liquidityLink && (
                  <div className="w-52 flex items-center cursor-pointer justify-end">
                    <span
                      className="underline text-gray-500"
                      onClick={() => {
                        window.open(props.liquidityLink || '', '_blank');
                      }}
                    >
                      Get {smybolMap()}
                    </span>
                    <img src={External} className="w-5 ml-2" />
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-row items-center justify-between w-full mt-2">
                <p className="text-xs text-left capitalize text-error">{validateMessage ?? ''}</p>
              </div>
            )}
          </div>
        </>
      )} */}
      {/* {props.showPercentage && (
        <div>
          <Slider
            value={props.percentage ? props.percentage : 0}
            setValue={(value) => (props.setPercentage ? props.setPercentage(value) : '')}
            step={25}
            min={0}
            max={100}
          />
          <div className="flex justify-between">
            {PERCENTAGE_LABEL.map((item) => {
              return <span className="text-xs muted-text">{item}</span>;
            })}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CurrencyInput;
