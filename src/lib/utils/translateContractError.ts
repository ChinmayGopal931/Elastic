export function translateContractError(errorString: string, defaultError?: string): string {
  console.log('errorString', errorString);
  if (errorString.includes('Only future lock end')) {
    return 'Please Increase lock time more than expiry date';
  } else if (errorString.includes('Only non zero amount')) {
    return 'Please Enter number higher than 0';
  } else if (errorString.includes('insufficient allowance')) {
    return 'Please Approve the token first';
  } else if (errorString.includes('Insufficient Output Amount')) {
    return 'Increase Slipage';
  } else if (errorString.includes('User rejected request')) {
    return 'User rejected request';
  } else if (errorString.includes('You are not whitelisted')) {
    return 'You are not whitelisted';
  } else if (errorString.includes('invalid arrayify value')) {
    return 'OpenOcean Error';
  } else if (errorString.includes('INSUFFICIENT_OUTPUT_SHARES')) {
    return 'Increase Slipage';
  } else if (errorString.includes('Return amount is not enough')) {
    return 'Increase Slipage';
  } else {
    return defaultError || 'An error has occurred';
  }
}
