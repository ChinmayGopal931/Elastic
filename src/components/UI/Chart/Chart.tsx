import { Sparklines } from 'react-sparklines';
import Loader from '../Loader/Loader';

interface IChartProps {
  chartData: number[] | undefined;
  limit?: number;
  width?: number;
  height?: number;
  isLoading: boolean;
}

interface IGradientStrokeSparklinesLineProps {
  points: { x: number; y: number }[];
}

const GradientStrokeSparklinesLine: React.FC<IGradientStrokeSparklinesLineProps> = ({ points }) => {
  return (
    <path
      d={points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : ` L${p.x},${p.y}`)).join(' ')}
      style={{
        strokeWidth: 2,
        stroke: 'url(#gradient-stroke)',
        fill: 'none',
      }}
    />
  );
};

const Chart: React.FC<IChartProps> = (props) => {
  const { chartData, width = 320, height = 150 } = props;

  const points = chartData
    ? chartData.map((value, index, all) => {
        const x = (index * width) / (all.length - 1);
        const minY = Math.min(...all);
        const maxY = Math.max(...all);
        const y = ((maxY - value) * height) / (maxY - minY);
        return { x, y };
      })
    : [];

  return (
    <div className="flex items-center justify-center relative flex-grow">
      {props.isLoading ? (
        <div className="flex justify-center items-center flex-grow">
          <Loader height={80} padding={5} />
        </div>
      ) : (
        <Sparklines data={props.chartData} limit={props.limit || 14} width={width} height={height}>
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3383C5" />
                <stop offset="100%" stopColor="#29C4B8" />
              </linearGradient>
            </defs>
            <GradientStrokeSparklinesLine points={points} />
          </svg>
        </Sparklines>
      )}
    </div>
  );
};

export default Chart;
