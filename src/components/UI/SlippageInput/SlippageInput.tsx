interface SlippageInputProps {
  setSlipage: (slipage: number) => void;
  slipage: number;
}

const SlippageInput = (props: SlippageInputProps) => {
  return (
    <>
      <div className="flex flex-row justify-between items-center mt-6 px-2">
        <p className=" text-body_light_dark flex flex-row justify-between items-center">
          Slippage :
        </p>
        <div className="flex flex-row items-center ring-1 ring-space_cadet pr-2 rounded-lg mr-3 text-xs">
          <input
            type="number"
            onChange={(e) => {
              props.setSlipage(parseFloat(parseFloat(e.target.value).toFixed(2)));
            }}
            className="rounded-lg text-body_light_dark text-xs text-center bg-ui_surface border-none outline-none w-7 h-7"
            value={props.slipage}
          />
          <span className=" text-body_light_dark">%</span>
        </div>
      </div>
    </>
  );
};

export default SlippageInput;
