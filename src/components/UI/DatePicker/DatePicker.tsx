import { format } from 'date-fns';

interface DatePickerProps {
  selectedDateTimestamp: any;
  setSelectedDateTimestamp: any;
  MAX_YEAR: number;
}

const DatePicker = (props: DatePickerProps) => {
  return (
    <div className="rounded-xxl">
      <input
        type="date"
        placeholder="Expiration date"
        className="w-32 h-8 bg-white dark:bg-ui_surface_opc rounded-lg px-2 body-medium-14 text-x tracking-wider font-semibold text-left border-none outline-none cursor-pointer"
        value={props.selectedDateTimestamp.formatted}
        onChange={(e) => {
          if (Date.parse(e.target.value) < Date.parse(new Date().toString())) return false;

          props.setSelectedDateTimestamp({
            timestamp: new Date(e.target.value).getTime() / 1000,
            step: Math.round(
              (Date.parse(e.target.value) - Date.parse(new Date().toString())) /
                (10 * props.MAX_YEAR)
            ),
            formatted: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default DatePicker;
