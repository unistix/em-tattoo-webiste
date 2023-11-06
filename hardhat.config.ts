import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config()



const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      /*forking: {
        url: process.env.MAINNET_URL,
      }*/
    },

    mainnet: {
      url: process.env.MAINNET_URL,
      accounts: [process.env.UNI_WALLET_SECRET!]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY //TODO:new polygon scan key for main project
  }
};

export default config;
