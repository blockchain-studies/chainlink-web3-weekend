import hre from "hardhat";

async function main() {
    if (hre.network.name !== `avalancheFuji`) {
        console.error(`❌ Must be called from Avalanche Fuji`);
        return 1;
    }

    const ccipSenderName = "CCIPSender_Unsafe";
    const ccipSenderAddress = `0x73009ee3CFbd25Bbb6eDe5b0d67a4E0F2bee5322`;
    const ccipReceiverAddress = `0x8e4a83d5CeEf41017EE74a7700A3CEA87120259e`;
    const message = `CCIP Masterclass - Jether Rodrigues - Chainlink Advocate`;
    const destinationChainSelector = 16015286601757825753n;

    const accounts = await hre.ethers.getSigners();
    const signer = accounts[0];

    /*
    for (const account of accounts) {
        console.log(account.address);
    }
    */

    const ccipSender = await hre.ethers.getContractAt(ccipSenderName, ccipSenderAddress, signer);
    // console.log(ccipSender);

    const tx = await ccipSender.send(
        ccipReceiverAddress,
        message,
        destinationChainSelector,
        {
            gasLimit: 5_000_000
        }
    );

    // console.log(`Transaction hash: ${tx.hash}`);
    console.log(tx);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});