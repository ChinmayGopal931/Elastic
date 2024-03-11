import { formatValue } from 'lib/helpers/helpers';
import { TooltipProps } from 'recharts';
import { useBoundStore } from 'state/store';

export type ChartType = 'Price' | 'TVL' | 'Percentage' | 'USD';

function formatDate(date) {
  return (
    ('0' + date.getHours()).slice(-2) +
    ':' +
    ('0' + date.getMinutes()).slice(-2) +
    ':' +
    ('0' + date.getSeconds()).slice(-2)
  );
}

const CustomTooltip = (
  props: TooltipProps<number, string> & {
    type: ChartType;
  }
) => {
  const { active, payload } = props;
  const currentVault = useBoundStore((state) => state.currentVault);

  if (active && payload && payload?.length) {
    const unixTimestamp = payload?.[0]?.payload?.date;
    const date = new Date(unixTimestamp * 1000); // Unix timestamp is in seconds, so convert to milliseconds
    const formattedDate = formatDate(date);

    return (
      <div className="ring-2 p-3 rounded-lg border-primary_brand_01 bg-white dark:bg-ui_surface_opc">
        <p className="text-xs body-medium-14">Date: {formattedDate}</p>
        {currentVault?.vaultType === 'genesis' ? (
          <p className="text-xs body-medium-14">
            {props.type}: {formatValue(payload[0]?.value ?? 0, false, 'USD')}
          </p>
        ) : (
          <p className="text-xs body-medium-14">
            {'Value'}: {`${payload[0]?.value}`}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
