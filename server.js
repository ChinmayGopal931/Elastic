import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { FusionSDK, PrivateKeyProviderConnector, NetworkEnum } from '@1inch/fusion-sdk';

import Web3 from 'web3';
const app = express();
const port = process.env.PORT || 3001;
const makerPrivateKey = '0xfe9c9f2d410d73e0911ecbc050f7e48ecf834899730f11c20fd169f8c6ed928b';
const makerAddress = '0x8BD0e959E9a7273D465ac74d427Ecc8AAaCa55D8';

function fusionSdk(chainId) {
  const nodeUrl = 'https://polygon-mainnet.g.alchemy.com/v2/jPunYKc_8d2-WcOIqhFODSZud36SPoev'; //NETWORK_RPC[chainId];
  const web3 = new Web3(nodeUrl);
  console.log('private key ', makerPrivateKey);
  const blockchainProvider = new PrivateKeyProviderConnector(makerPrivateKey, web3);

  console.log('sdk params ', {
    url: 'https://api.1inch.dev/fusion',
    network: chainId,
    blockchainProvider,
    authKey: 'VRNtvHQpaXkXrMdi18oY6R3CtbABNmEa',
    makerPrivateKey,
    web3: new Web3(nodeUrl),
  });
  const sdk = new FusionSDK({
    url: 'https://api.1inch.dev/fusion',
    network: NetworkEnum.POLYGON,
    blockchainProvider,
    authKey: 'VRNtvHQpaXkXrMdi18oY6R3CtbABNmEa',
  });

  return sdk;
}

const createFusionOrder = async (chainId, fromToken, toToken, amount) => {
  const sdk = fusionSdk(chainId);
  try {
    const order = await sdk.placeOrder({
      fromTokenAddress: fromToken, // MATIC
      toTokenAddress: toToken, // USDC
      amount: amount, // 0.5 MATIC
      walletAddress: makerAddress,
      preset: 0,
    });
    console.log('Order created:', order);
    return order;
  } catch (error) {
    console.error('Error creating Fusion order:', error);
    throw error; // Optionally rethrow the error to handle it in the calling code
  }
};

app.use(cors()); // Enable CORS
function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
// // Define your API endpoints here
// app.get('/api/place', async (req, res) => {
//   console.log('Inside Place Order funciton');

//   const makerPrivateKey = process.env.VITE_PRIVATE_KEY;

//   const makerAddress = '0xeEe5B833d6fA94e661cF2d2359c2749C50D46044';

//   const web3 = new Web3('https://arb-mainnet.g.alchemy.com/v2/lkFGfQpATYx05UzRcgRDUalSw6CCSq8a');

//   const blockchainProvider = new PrivateKeyProviderConnector(makerPrivateKey, web3);

//   const sdk = new FusionSDK({
//     url: 'https://fusion.1inch.io',
//     network: 42161,
//     blockchainProvider,
//     authKey: 'h2GIr46Z6Vbkd6223K47FKsHY304dzc7',
//   });
//   console.log('e');

//   try {
//     const placedOrder = await sdk.placeOrder({
//       fromTokenAddress: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
//       toTokenAddress: '0x5979D7b546E38E414F7E9822514be443A4800529',
//       amount: '10000000000000000000',
//       walletAddress: makerAddress,
//       preset: 'fast',
//     });
//     console.log('logging placeholder');
//     return res.json(placedOrder);
//   } catch (error) {
//     console.error(error);
//   }
// });

// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints here
// // Define your API endpoints her

// // Define your API endpoints here
// app.get('/api/quote', async (req, res) => {
//   console.log('Get Quote funciton');

//   const makerPrivateKey = process.env.VITE_PRIVATE_KEY;

//   const web3 = new Web3('https://arb-mainnet.g.alchemy.com/v2/lkFGfQpATYx05UzRcgRDUalSw6CCSq8a');

//   const blockchainProvider = new PrivateKeyProviderConnector(makerPrivateKey, web3);

//   console.log('I am inside Quote Fusion SDK impl');

//   const sdk = new FusionSDK({
//     url: 'https://fusion.1inch.io',
//     network: 42161,
//     blockchainProvider,
//     authKey: 'h2GIr46Z6Vbkd6223K47FKsHY304dzc7',
//   });

//   try {
//     const params = {
//       fromTokenAddress: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
//       toTokenAddress: '0x5979D7b546E38E414F7E9822514be443A4800529',
//       amount: '10000000000000000000',
//       walletAddress: '0xeEe5B833d6fA94e661cF2d2359c2749C50D46044',
//     };

//     const quote = await sdk.getQuote(params);
//     return res.json(quote);
//   } catch (error) {
//     console.error(error);
//   }
// });

// //balance api

// app.get('/api/allTokens', async (req, res) => {
//   const url = `https://api.1inch.dev/token/v1.2/${1}`;

//   const config = {
//     headers: {
//       Authorization: 'Bearer h2GIr46Z6Vbkd6223K47FKsHY304dzc7',
//     },
//     params: {},
//   };
//   try {
//     const response = await axios.get(url, config);

//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

// //backend
// app.get('/api/backedData', async (req, res) => {
//   const url = `https://backend.itsakshay.repl.co/lst_yield`;

//   const config = {
//     headers: {},
//     params: {},
//   };
//   try {
//     const response = await axios.get(url, config);

//     return res.json(response.data);
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// });

app.get('/createOrder', async (req, res) => {
  try {
    console.log('deimiemdi');
    const order = await createFusionOrder(
      137,
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
      '50000000000000000'
    );
    console.log('Order created:', order);
    return res.status(200).json({ order });
  } catch (error) {
    console.log('Error creating order:', error);
    return res.status(500).json({ error: 'Failed to create order' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
