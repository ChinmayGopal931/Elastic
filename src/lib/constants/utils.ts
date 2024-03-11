import {
  FusionSDK,
  NetworkEnum,
  PrivateKeyProviderConnector,
  QuoteParams,
  AuctionCalculator,
  AuctionSalt,
  AuctionSuffix,
} from '@1inch/fusion-sdk';
import { BigNumber as BN } from 'ethers';

import axios from 'axios';
import Web3 from 'web3';
import { Network, Alchemy } from 'alchemy-sdk';

/**
 * @notice This file contains math constants relevant across the DutchX interface
 * Wherever possible, it should conform to fixed on chain vars
 */

export const ratioScale = BN.from(10).pow(8);
export const fullScale: BN = BN.from(10).pow(18);

export const DEFAULT_DECIMALS = 18;

export const DEAD_ADDRESS = '0x0000000000000000000000000000000000000001';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ZERO_KEY = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const MAX_UINT256 = BN.from(2).pow(256).sub(1);
export const MAX_INT128 = BN.from(2).pow(127).sub(1);
export const MIN_INT128 = BN.from(2).pow(127).mul(-1);

export const ZERO = BN.from(0);
export const ONE_MIN = BN.from(60);
export const TEN_MINS = BN.from(60 * 10);
export const ONE_HOUR = BN.from(60 * 60);
export const ONE_DAY = BN.from(60 * 60 * 24);
export const FIVE_DAYS = BN.from(60 * 60 * 24 * 5);
export const TEN_DAYS = BN.from(60 * 60 * 24 * 10);
export const ONE_WEEK = BN.from(60 * 60 * 24 * 7);
export const ONE_YEAR = BN.from(60 * 60 * 24 * 365);
export const TWO_YEARS = BN.from(60 * 60 * 24 * 365 * 2);

export type HexAddress = `0x${string}`;

export const MAX_YEAR = 126144000;

const sdk = new FusionSDK({
  url: 'https://fusion.1inch.io',
  network: NetworkEnum.ETHEREUM,
});

export const getFusionSDK = async (): Promise<any> => {
  const orders = await sdk.getActiveOrders({ page: 1, limit: 2 });

  console.log(orders);

  return orders;
};

function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
export const getAuctionOrders = async (): Promise<any> => {
  const limitOrderStruct = {
    allowedSender: '0x0000000000000000000000000000000000000000',
    interactions: '0x000c004e200000000000000000219ab540356cbb839cbe05303d7705faf486570009',
    maker: '0x00000000219ab540356cbb839cbe05303d7705fa',
    makerAsset: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    makingAmount: '1000000000000000000',
    offsets: '0',
    receiver: '0x0000000000000000000000000000000000000000',
    salt: '45118768841948961586167738353692277076075522015101619148498725069326976558864',
    takerAsset: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    takingAmount: '1420000000',
  };

  const calculator = AuctionCalculator.fromLimitOrderV3Struct(limitOrderStruct);
  // #=> AuctionCalculator instance

  const rate = calculator.calcRateBump(1673548209);

  // #=> 14285

  const auctionTakingAmount = calculator.calcAuctionTakingAmount('1420000000', rate);

  console.log(rate, auctionTakingAmount);

  return { rate, auctionTakingAmount };
};

// BackednAPI

export const getLst = async (): Promise<any> => {
  const url = `http://localhost:3001/api/backedData`;

  console.log('getlst');
  const config = {
    headers: {},
    params: {},
  };

  try {
    const response = await axios.get(url, config);

    //console.log(response.data.lsts, Object.values(response.data.lsts)[0]);

    console.log(response.data.lsts);
    return response.data.lsts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//Spot api

export const getTokenList = async (chainId: number): Promise<any> => {
  const url = `http://localhost:3001/api/tokens`;

  const config = {
    headers: {
      Authorization: 'Bearer h2GIr46Z6Vbkd6223K47FKsHY304dzc7',
    },
    params: {},
  };

  try {
    const response = await axios.get(url, config);

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEntireTokenList = async (chainId: number): Promise<any> => {
  const url = `http://localhost:3001/api/tokens`;

  const config = {
    headers: {
      Authorization: 'Bearer h2GIr46Z6Vbkd6223K47FKsHY304dzc7',
    },
    params: {},
  };

  try {
    const response = await axios.get(url, config);

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//Fusion API

export const getQuote = async (): Promise<any> => {
  const url = 'http://localhost:3001/api/quote'; // Point to your local server

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getQuoteOrder = async (token): Promise<any> => {
  console.log('get quote', token);
  const url = 'http://localhost:3001/api/quote'; // Point to your local server

  try {
    const response = await axios.get(url);

    console.log(response);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const placeOrder = async (setOrderStatus, setAuctionPrice): Promise<any> => {
  const url = 'http://localhost:3001/api/place'; // Point to your local server

  const saltString = 'ddneoifhnweoifniowfnewinefnwioenoin';

  try {
    console.log('plce');
    const response = await axios.get(url);

    console.log(response);
    const limitOrderStruct = response.data.order;

    const calculator = AuctionCalculator.fromLimitOrderV3Struct(limitOrderStruct);
    // #=> AuctionCalculator instance

    const salt = AuctionSalt.decode(limitOrderStruct.salt);
    console.log(salt);
    const suffix = AuctionSuffix.decode(limitOrderStruct.interactions);

    suffix.build();
    console.log(suffix);
    setOrderStatus('Order placed');
    for (let i = 0; i < 300; i++) {
      let currTimestamp = Math.floor(Date.now() / 1000);
      const rate = calculator.calcRateBump(currTimestamp);

      // #=> 14285

      const auctionTakingAmount = calculator.calcAuctionTakingAmount(
        limitOrderStruct.takingAmount,
        rate
      );
      console.log(currTimestamp, '-', auctionTakingAmount);
      setAuctionPrice(auctionTakingAmount);
      if (parseInt(auctionTakingAmount) < 9328413) {
        setOrderStatus('Order Filled');
        break;
      }
      await delay(1);
    }

    console.log('placced Order', response);
    // return response.data;
  } catch (error) {
    console.error(error);
  }
};
