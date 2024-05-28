## Masterclass Project

Find the tutorial accessing: https://cll-devrel.gitbook.io/chainlink-ccip/getting-started/how-to-use-chainlink-ccip

### Environment Prepare

1. Creating Hardhat project: `npx hardhat@2.22.4 init`
- - Select either "Create a JavaScript project" or "Create a TypeScript project"

2. Install Chainlink CCIP Contracts NPM package: `npm i @chainlink/contracts-ccip --save-dev`

3. Install Chainlink Contracts NPM package: `npm i @chainlink/contracts --save-dev`

4. When necessary, use `npx hardhat compile` to validate and compile the smart contracts

5. Install Chainlink EnvEnc NPM package: `npm i @chainlink/env-enc --save-dev`
- - Set password for encrypt variables: `npx env-enc set-pw` (blockshield)
- - Add env variables: `npx env-enc set`
- - View the encrypted variables: `npx env-enc view`

Variables (https://chainlist.org/?testnets=true): 
```json
PRIVATE_KEY=""
ETHEREUM_SEPOLIA_RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
AVALANCHE_FUJI_RPC_URL=https://avalanche-fuji-c-chain-rpc.publicnode.com
```