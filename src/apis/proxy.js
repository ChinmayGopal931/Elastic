const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const createOrder = require("./fusionAPI");

//Init Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5004;

// Handle requests to create order
app.get("/createOrder", async (req, res) => {
  try {
    const order = await createOrder.createFusionOrder(
      137,
      "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
      "50000000000000000"
    );
    console.log("Order created:", order);
    return res.status(200).json({ order });
  } catch (error) {
    console.log("Error creating order:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// // const scheduledFunctions = require("./services/ScheduledFn");
// const createOrder = require("./fusionAPI");

// //Init Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// const PORT = process.env.PORT || 5004;

// // Create limit
// // scheduledFunctions.initScheduledJobs();
// app.get("/", async (req, res) => {
//   try {
//     // const order = createOrder.createFusionOrder();
//     const order = createOrder.createFusionOrder(
//       137,
//       "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
//       "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
//       "50000000000000000"
//     );
//     console.log("order", order);
//     return res.status(200).json({ order });
//   } catch (error) {
//     console.log("error ", error);
//     return res.status(500).json({ errors: [{ msg: "Server error" }] });
//   }
// });

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// // module.exports = router;
// module.exports = app;

// // Import necessary modules
// const express = require("express");
// const { Web3 } = require("web3");
// const {
//   FusionSDK,
//   PrivateKeyProviderConnector,
//   NetworkEnum,
// } = require("@1inch/fusion-sdk");
// const { PresetEnum } = require("@1inch/fusion-sdk/api");
// // Constants
// const {
//   REACT_APP_POLYGON_RPC,
//   REACT_APP_INCH_KEY,
//   REACT_APP_PRIVATE_KEY,
//   REACT_APP_WALLET_ADDRESS,
// } = process.env;
// const makerPrivateKey =
//   "0xfe9c9f2d410d73e0911ecbc050f7e48ecf834899730f11c20fd169f8c6ed928b"; //REACT_APP_PRIVATE_KEY;
// const makerAddress = "0x38216d7a9dEE32cDB4Ba8AB5c1A97d30878CfA33"; //REACT_APP_WALLET_ADDRESS;
// const { createFusionOrder } = require("./fusionAPI");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// // Create Express app
// const app = express();
// const port = 3000;
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());

// // Main function
// // async function main() {
// //   console.log("makerAddress", makerAddress);
// //   const nodeUrl =
// //     "https://polygon-mainnet.g.alchemy.com/v2/jPunYKc_8d2-WcOIqhFODSZud36SPoev"; //REACT_APP_POLYGON_RPC;
// //   const web3 = new Web3(nodeUrl);
// //   const blockchainProvider = new PrivateKeyProviderConnector(
// //     makerPrivateKey,
// //     web3
// //   );

// //   console.log("nodeUrl: ", nodeUrl);
// //   console.log("web3: ", web3);
// //   console.log("blockchainProvider: ", blockchainProvider);

// //   const sdk = new FusionSDK({
// //     // url: "https://fusion.1inch.io",
// //     url: "https://api.1inch.dev/fusion",
// //     network: NetworkEnum.ETHEREUM,
// //     blockchainProvider,
// //     authKey: "VRNtvHQpaXkXrMdi18oY6R3CtbABNmEa", //REACT_APP_INCH_KEY,
// //   });
// //   console.log("sdk", sdk);

// //   try {
// //     const order = await sdk.placeOrder({
// //       fromTokenAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // USDT
// //       toTokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC
// //       amount: "50000000000000000", // 0.5 MATIC
// //       walletAddress: makerAddress,
// //       preset: PresetEnum.fast,
// //     });
// //     console.log("Order created:", order);
// //     return order;
// //   } catch (error) {
// //     console.error("Error creating Fusion order:", error);
// //     throw error;
// //   }
// // }

// // Start the server
// app.listen(port, () => {
//   console.log(`Proxy server listening at http://localhost:${port}`);
// });

// // Route to trigger main function
// app.get("/", async (req, res) => {
//   try {
//     const order = await createFusionOrder(
//       137,
//       "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", // USDT
//       "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC
//       "50000000000000000" // 0.5 MATIC
//     );
//     console.log("order", order);
//     res.send(order);
//     res.status(200).json({ order });
//   } catch (error) {
//     console.log("error: ", error);
//     res.status(500).send(error.message);
//   }
// });
