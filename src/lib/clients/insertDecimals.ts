import { BigNumber } from 'ethers';

export function insertDecimal(
  number: string | number | BigNumber,
  decimalPositionFromEnd: string
): string {
  number = number.toString();
  const decimalPosition = number.length - parseInt(decimalPositionFromEnd);
  if (decimalPosition <= 0) {
    return '0.' + '0'.repeat(-decimalPosition) + number;
  } else {
    return number.slice(0, decimalPosition) + '.' + number.slice(decimalPosition);
  }
}
