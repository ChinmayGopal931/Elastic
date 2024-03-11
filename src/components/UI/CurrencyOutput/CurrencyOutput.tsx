import SymbolLogo from '../SymbolLogo/SymbolLogo';
interface CurrencyOutputProps {
  outputValue?: string;
  balance?: string;
  isLoading?: boolean;
  outputSymbol: string;
  showSymbol?: boolean;
}

const CurrencyOutput = (props: CurrencyOutputProps) => {
  return (
    <div className="rounded-xl bg-white dark:bg-ui_surface_opc shadow-xl dark:shadow-lg heading w-full flex flex-col pt-4 px-4 pb-3 box-border items-end justify-center">
      <div className="flex flex-row items-center justify-between w-full mb-2">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <div className="bg-transparent text-body_light_dark text-[1.35rem] text-left w-full max-w-border-none outline-none">
            {props.isLoading ? (
              <div role="status" className="max-w-sm animate-pulse">
                <div className="h-6 bg-gray-900 rounded-full dark:bg-gray-900 w-40 "></div>
              </div>
            ) : props.outputValue !== '' ? (
              <p className="text-2xl body-medium-15">{props.outputValue}</p>
            ) : (
              '0'
            )}
          </div>
          <div className="gradiant-border">
            <div className="min-w-[124px] text-xs text-center bg-white dark:bg-ui_surface_opc heading p-2 rounded-lg flex flex-row justify-evenly items-center">
              {props.showSymbol ? (
                <SymbolLogo symbol={props.outputSymbol} height={18} width={18} />
              ) : undefined}
              {props.outputSymbol}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyOutput;
