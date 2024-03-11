export const formatValue = (value: number, isPercentage: boolean, currency: string): string => {
  if (isPercentage) {
    return formatPercentage(value / 100);
  }
  return formatCurrency(value, currency);
};

const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

const formatCurrency = (value: number, currency: string): string => {
  const numberFormat = new Intl.NumberFormat('en-US', {
    style: currency ? 'currency' : 'decimal',
    currency: currency || undefined,
    minimumFractionDigits: value < 10 ? 4 : 2,
    maximumFractionDigits: value < 10 ? 4 : 2,
    currencyDisplay: 'narrowSymbol',
  });

  switch (true) {
    case value >= 1000000:
      return commaString(numberFormat.format(value / 1000000)) + 'M';
    case value >= 1000:
      return commaString(numberFormat.format(value / 1000)) + 'K';

    case value < 10:
      return numberFormat.format(value);

    default:
      return commaString(numberFormat.format(value));
  }
};

export const commaString = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// create hex number foramtter to show only 4 at the end
export const truncatehex = (address: string, start: number, end: number) => {
  return `${address?.slice(0, start)}...${address?.slice(-end)}`;
};

export const decimalCount = (decimalNumber: string) => {
  // String Contains Decimal
  if (decimalNumber.includes('.')) {
    return decimalNumber.split('.')[1].length;
  }
  // String Does Not Contain Decimal
  return 0;
};

export const fromStringToNumber = (value: string) => {
  // Use parseFloat to convert the string to a number,
  // and then use the toFixed() method to format the number with two decimal places.
  let num = parseFloat(value);
  let rounded = num.toFixed(2);

  // Return the formatted number as a string
  return rounded.toString();
};

export const parseWagmiErrorMessage = (message: string) => {
  if (message.includes('(reason="')) {
    let parsedMessage = message.substring(
      message.indexOf('(reason="') + 9, // '9' is the end of '(reason="' string
      message.length
    );
    if (parsedMessage.includes('execution reverted:')) {
      parsedMessage = parsedMessage.split('execution reverted:')[1];
    }
    parsedMessage = parsedMessage.substring(0, parsedMessage.indexOf('"'));
    return 'Warning:' + parsedMessage;
  } else if (message.includes('while formatting outputs from RPC')) {
    const parsedObject = JSON.parse(
      message.substring(
        message.indexOf('{"value":{'),
        message.lastIndexOf('}}') + 2 // +2 to include the final two closing braces
      )
    );
    return parsedObject.value.data.message;
  }
};

export const getTimeElapsed = (timestamp: number) => {
  const now = Date.now() / 1000;
  const seconds = Math.floor(now - timestamp);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} year${years === 1 ? '' : 's'} ago`;
  }
};

export const dateOut = (date: any, { days, years }: any) => {
  if (!date) return;
  let dateOut = date;
  days && dateOut.setDate(date.getDate() + days);
  years && dateOut.setFullYear(date.getFullYear() + years);
  return dateOut;
};

export const getSymbolByAddress = (address: string) => {
  switch (address) {
    case '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8':
      return 'USDC';
    default:
      return '';
      break;
  }
};

export const COLORS = [
  '#3383C5', // primary_brand_01
  '#9CFFFD', // primary_brand_02
  '#192F4D', // sec_brand_01
  '#29C4B8', // sec_brand_02
  '#3D40C4', // brand_highlight
  '#1B4ACB', // ui_accent
  '#00BC8C', // success
  '#F39C11', // warning
  '#E84C3D', // error
  '#07162F', // ui_surface_opc
  '#536DFE', // Indigo A100 (complementary)
  '#448AFF', // Blue A100 (complementary)
  '#1DE9B6', // Teal A400 (complementary)
];

export const getVaultABI = (vaultType?: any) => {
  switch (vaultType) {
    default:
      return undefined;
  }
};
