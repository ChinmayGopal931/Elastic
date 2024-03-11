interface DateSliderProps {
  selectedDateTimestamp: any;
  setSelectedDateTimestamp: any;
  MAX_YEAR: number;
}

const DateSlider = (props: DateSliderProps) => {
  return (
    <div className="w-full px-2">
      <div className="tb-4 ">
        <input
          type="range"
          max={100}
          min={0}
          step={1}
          className="slider w-full rounded-md bg-white dark:bg-border text-left border-none outline-none"
          value={props.selectedDateTimestamp.step}
          onChange={(e: any) => {
            const timestamp =
              Math.round(new Date().getTime() / 1000) + (e.target.value / 100) * props.MAX_YEAR;

            props.setSelectedDateTimestamp({
              step: e.target.value,
              timestamp: timestamp,
              formatted: new Date(timestamp * 1000).toISOString().slice(0, 10),
            });
          }}
        />
      </div>

      <div className="w-full flex justify-between text-xs px-2 mb-4 body-regular-14 font-bold tracking-widest">
        <p>-</p>
        <p>1 Year</p>
        <p>2 Years</p>
        <p>3 Years</p>
        <p>4 Years</p>
      </div>
    </div>
  );
};

export default DateSlider;
