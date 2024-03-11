const TIME_FRAME = [
  {
    title: '1W',
    value: 7,
  },
  {
    title: '1M',
    value: 30,
  },
  {
    title: '3M',
    value: 90,
  },
];

const TimeFrames = ({
  onSelectedDate,
  selectedDate,
}: {
  onSelectedDate: (timeFrame: number) => void;
  selectedDate: number;
}) => {
  return (
    <div className="flex flex-row  bg-white dark:bg-background rounded-lg w-[126px] shadow-xl dark:shadow-lg">
      {TIME_FRAME.map((item, index) => {
        return (
          <div
            onClick={() => {
              onSelectedDate(item.value);
            }}
            key={item.title}
            className={`
            ${
              item.value === selectedDate
                ? 'bg-body_light_dark dark:bg-border'
                : 'bg-white dark:bg-background text-rich_black dark:text-white'
            }
            text-xs p-[10.5px]  rounded-lg  cursor-pointer `}
          >
            <p className="hover:opacity-70 hover:transition-all duration-150 font-bold">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TimeFrames;
