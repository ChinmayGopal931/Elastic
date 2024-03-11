export const fetchPriceData = async (tokenAddress: Array<string>) => {
  const addresses = tokenAddress?.map((token) => `arbitrum:${token}`);

  if (addresses) {
    const addressesString = addresses.join(',');

    const url = `https://coins.llama.fi/prices/current/${addressesString}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  return {};
};
