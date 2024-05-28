import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * If have a problem, see LuizTools article about Ignition:
 *  - https://www.luiztools.com.br/post/deploy-de-smart-contract-com-hardhat-ignition/
 */
const CCIPReceiver_UnsafeModule = buildModule("CCIPSender_UnsafeModule", (m) => {
    const sepoliaRouterAddress = `0xD0daae2231E9CB96b94C8512223533293C3693Bf`;

    const module = m.contract("CCIPReceiver_Unsafe", [sepoliaRouterAddress], {});

    return { module };
});

export default CCIPReceiver_UnsafeModule;