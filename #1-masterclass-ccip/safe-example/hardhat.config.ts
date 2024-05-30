import * as dotenvenc from '@chainlink/env-enc'
dotenvenc.config();

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL_OPTIMISM_SEPOLIA = process.env.RPC_URL_OPTIMISM_SEPOLIA;
const RPC_URL_POLYGON_AMOY = process.env.RPC_URL_POLYGON_AMOY;


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      chainId: 31337
    },
    optimismSepolia: {
      url: RPC_URL_OPTIMISM_SEPOLIA !== undefined ? RPC_URL_OPTIMISM_SEPOLIA : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 11155420,
    },
    polygonAmoy: {
      url: RPC_URL_POLYGON_AMOY !== undefined ? RPC_URL_POLYGON_AMOY : '',
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      chainId: 80002,
    }
  }
};

export default config;
