# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

### Environment Prepare

1. Creating Hardhat project: `npx hardhat@2.22.4 init`
- Select either "Create a JavaScript project" or "Create a TypeScript project"

2. Install Chainlink CCIP Contracts NPM package: `npm i @chainlink/contracts-ccip --save-dev`

3. Install Chainlink Contracts NPM package: `npm i @chainlink/contracts --save-dev`

4. When necessary, use `npx hardhat compile` to validate and compile the smart contracts

5. Install Chainlink EnvEnc NPM package: `npm i @chainlink/env-enc --save-dev`
- Set password for encrypt variables: `npx env-enc set-pw` (blockshield)
- Add env variables: `npx env-enc set`
- View the encrypted variables: `npx env-enc view`

Variables (https://chainlist.org/?testnets=true): 

```sh
PRIVATE_KEY=
RPC_URL_OPTIMISM_SEPOLIA=https://endpoints.omniatech.io/v1/op/sepolia/public	
RPC_URL_POLYGON_AMOY=https://polygon-amoy.drpc.org
```

6. Deploy using Hardhat Ignition: 
- `npx env-enc set-pw`, after `npx hardhat ignition deploy ignition/modules/CCIPReceiver_Unsafe.ts --network ethereumSepolia` - `CCIPSender_UnsafeModule#CCIPReceiver_Unsafe - 0x8e4a83d5CeEf41017EE74a7700A3CEA87120259e`
- `npx env-enc set-pw`, after `npx hardhat ignition deploy ignition/modules/CCIPSender_Unsafe.ts --network avalancheFuji` - `CCIPSender_UnsafeModule#CCIPSender_Unsafe - 0x73009ee3CFbd25Bbb6eDe5b0d67a4E0F2bee5322`

7. Sending message using Sender on Avalanche Fuji for Receiver on Sepolia: `npx hardhat run ./scripts/SendMessageCCIP.ts --network avalancheFuji`
8. Access CCIP Explore (https://ccip.chain.link/) and search by `0xd98a7b37c14cfe3f94a56028d157111f2cc0d412e265c42ade38b104a315628c` transaction

```sh
### FUJI
router=0xF694E193200268f9a4868e4Aa017A0118C9a8177
link=0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846
USDC=0x5425890298aed601595a70AB815c96711a31Bc65

### SEPOLIA
router=0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59
link=0x779877A7B0D9E8603169DdbD7836e478b4624789

### AMOY
router=0x9C32fCB86BF0f4a1A8921a9Fe46de3198bb884B2
link=0x0Fd9e8d3aF1aaee056EB9e802c3A762a667b1904
USDC=0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
chainSelector=16281711391670634445 ## sourceChainSelector
destinationChainSelectorOnSepoliaOptimism=5224473277236331295

### OPTIMISM
router=0x114A20A10b43D4115e5aeef7345a1A71d2a60C57
link=0xE4aB69C077896252FAFBD49EFD26B5D171A32410
USDC=0x41E94Eb019C0762f9Bfcf9Fb1E58725BfB0e7582
chainSelector=5224473277236331295 ## destinationChainSelectorOnSepoliaOptimism
```