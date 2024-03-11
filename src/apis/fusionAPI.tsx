// import { FusionSDK, NetworkEnum } from "@1inch/fusion-sdk";
const { FusionSDK, PrivateKeyProviderConnector, NetworkEnum } = require('@1inch/fusion-sdk');
const { Web3 } = require('web3');
// const {
//   PrivateKeyProviderConnector,
//   // FusionSDK,
//   // NetworkEnum
// } = require("@1inch/fusion-sdk");
const { PresetEnum } = require('@1inch/fusion-sdk/api');
const {
  REACT_APP_POLYGON_RPC,
  REACT_APP_INCH_KEY,
  REACT_APP_WALLET_ADDRESS,
  REACT_APP_PRIVATE_KEY,
  REACT_APP_MATIC_POLYGON,
  REACT_APP_USDC_POLYGON,
} = process.env;

const makerPrivateKey = '0xfe9c9f2d410d73e0911ecbc050f7e48ecf834899730f11c20fd169f8c6ed928b';
const makerAddress = '0x8BD0e959E9a7273D465ac74d427Ecc8AAaCa55D8';
// const makerAddress = process.env.REACT_APP_WALLET_ADDRESS;
// console.log(process.env.REACT_APP_INCH_KEY);

// export async function createFusionOrder() {
//   const nodeUrl = REACT_APP_POLYGON_RPC; //NETWORK_RPC[chainId];
//   const web3 = new Web3(nodeUrl);
//   const blockchainProvider = new PrivateKeyProviderConnector(
//     makerPrivateKey,
//     web3
//   );
//   console.log("nodeUrl: ", nodeUrl);
//   console.log("web3: ", web3);
//   console.log("blockchainProvider: ", blockchainProvider);

//   const sdk = new FusionSDK({
//     url: "https://fusion.1inch.io",
//     network: NetworkEnum.ETHEREUM,
//     blockchainProvider,
//     authKey: REACT_APP_INCH_KEY,
//   });
//   console.log("sdk", sdk);

//   try {
//     const order = await sdk.placeOrder({
//       fromTokenAddress: "0x0000000000000000000000000000000000001010", // MATIC
//       toTokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC
//       amount: "50000000000000000", // 0.5 MATIC
//       walletAddress: makerAddress,
//       preset: PresetEnum.fast,
//     });
//     console.log("Order created:", order);
//     return order;
//   } catch (error) {
//     console.error("Error creating Fusion order:", error);
//     throw error; // Optionally rethrow the error to handle it in the calling code
//   }

// const orders = sdk.placeOrder({
//   fromTokenAddress: "0x0000000000000000000000000000000000001010",
//   toTokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC
//   amount: "50000000000000000", // 0.05 ETH
//   walletAddress: makerAddress,
// });
// console.log("from address: ", sdk.placeOrder()).then(console.log);

// console.log("orders", orders);
// }

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

// module.exports = async function createFusionOrder(
exports.createFusionOrder = async (chainId, fromToken, toToken, amount) => {
  const sdk = fusionSdk(chainId);
  try {
    const order = await sdk.placeOrder({
      fromTokenAddress: fromToken, // MATIC
      toTokenAddress: toToken, // USDC
      amount: amount, // 0.5 MATIC
      walletAddress: makerAddress,
      preset: PresetEnum.fast,
    });
    console.log('Order created:', order);
    return order;
  } catch (error) {
    console.error('Error creating Fusion order:', error);
    throw error; // Optionally rethrow the error to handle it in the calling code
  }
};

// async function createFusionOrderWithRetry(
//   chainId,
//   fromToken,
//   toToken,
//   amount,
//   maxRetries = 3,
//   delay = 5000
// ) {
//   let retries = 0;

//   while (retries <= maxRetries) {
//     try {
//       const order = await createFusionOrder(
//         chainId,
//         fromToken,
//         toToken,
//         amount
//       );
//       if (order) {
//         return order;
//       }
//     } catch (error) {
//       console.error(
//         `Error creating Fusion order (Retry ${retries + 1}):`,
//         error.message
//       );
//     }

//     // Retry after a delay (e.g., 5 seconds)
//     console.log(`Retrying in 5 seconds...`);
//     await new Promise((resolve) => setTimeout(resolve, delay));

//     retries++;
//   }

//   console.error(`Max retries reached. Could not create Fusion order.`);
//   return null;
// }

// async function buildFusionOrder(chainId, fromToken, toToken, amount) {
//   try {
//     const sdk = fusionSdk(chainId)

//     const quote = await sdk.getQuote({
//       fromTokenAddress: fromToken,
//       toTokenAddress: toToken,
//       amount: amount
//     })

//     console.log('quote ', quote)
//     const quoteId = quote.quoteId

//     const salt = new AuctionSalt({
//       duration: 180,
//       auctionStartTime: 1673548149,
//       initialRateBump: 50000,
//       bankFee: '0'
//     })

//     const suffix = new AuctionSuffix({
//       points: [
//         {
//           coefficient: 20000,
//           delay: 12
//         }
//       ],
//       whitelist: [
//         {
//           address: makerAddress,
//           allowance: 0
//         }
//       ]
//     })

//     const order = new FusionOrder(
//       {
//         makerAsset: fromToken,
//         takerAsset: toToken,
//         makingAmount: amount,
//         takingAmount: quote.toTokenAmount,
//         maker: makerAddress
//       },
//       salt,
//       suffix,
//       {
//         postInteraction: '0x'
//       }
//     )

//     const orderBuild = order.build()
//     console.log('order build ', orderBuild)
//   } catch (error) {
//     console.log('failed to create fusion order ', error)
//     return null
//   }
// }

// async function getOrderQuote(chainId, fromToken, toToken, amount) {
//   try {
//     const sdk = fusionSdk(chainId);

//     const order = await sdk.getQuote({
//       fromTokenAddress: fromToken, // MATIC
//       toTokenAddress: toToken, // USDC
//       amount: amount, // 0.5 MATIC
//     });
//     return order;
//   } catch (error) {
//     console.log("failed to create fusion order ", error);
//     return null;
//   }
// }
// async function retry(fn, maxRetries, retryInterval) {
//   let retries = 0;

//   async function attempt() {
//     try {
//       return await fn();
//     } catch (error) {
//       retries++;
//       if (retries <= maxRetries) {
//         console.error("Error:", error.message);
//         console.log(
//           `Retrying in ${
//             retryInterval / 1000
//           } seconds (Attempt ${retries}/${maxRetries})...`
//         );
//         await new Promise((resolve) => setTimeout(resolve, retryInterval));
//         return attempt(); // Retry the function call
//       } else {
//         throw new Error(
//           `Max retries (${maxRetries}) reached. Last error: ${error.message}`
//         );
//       }
//     }
//   }

//   return attempt();
// }

// async function watchOrderStatus(orderHash, chainId) {
//   const sdk = fusionSdk(chainId);

//   const response = await sdk.getOrderStatus(orderHash);
//   // console.log("current order status ", response.status);
//   if (response.status !== "filled") {
//     // wait for 5 sec for next update
//     console.log("waiting for next status check");
//     await new Promise((resolve) => setTimeout(resolve, 5000));
//     console.log("retrying for status update");
//     watchOrderStatus(orderHash, chainId);
//   }
//   return response;
// }

// module.exports = {
//   createFusionOrder,
//   watchOrderStatus,
//   getOrderQuote,
//   createFusionOrderWithRetry,
// };
