import { format } from 'date-fns';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import CustomTooltip, { ChartType } from './CustomTooltip';

interface ChartDataTypes {
  date: string;
  value: string;
}

interface IRechartProps {
  data?: ChartDataTypes[];
  height?: number;
  type?: ChartType;
}

const Rechart = ({ data, height, type = 'Price' }: IRechartProps) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width={'99%'} height={height || 341}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3383C5" stopOpacity={0.2} />
              <stop offset="75%" stopColor="#29C4B8" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" fill="url(#color)" strokeWidth={2.5}>
            <stop offset="0%" stopColor="#3383C5" />
            <stop offset="100%" stopColor="#29C4B8" />
          </Area>

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickCount={5}
            tickFormatter={(str) => {
              const unixTimestamp = str;
              const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, so convert to milliseconds
              try {
                const formattedDate = format(date, 'MM/dd');
                return formattedDate;
              } catch (e) {
                return '0';
              }
            }}
          />

          <Tooltip content={<CustomTooltip type={type} />} />
          <Tooltip content={<></>} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
