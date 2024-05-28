import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * If have a problem, see LuizTools article about Ignition:
 *  - https://www.luiztools.com.br/post/deploy-de-smart-contract-com-hardhat-ignition/
 */
const CCIPSender_UnsafeModule = buildModule("CCIPSender_UnsafeModule", (m) => {
    const fujiLinkAddress = `0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846`;
    const fujiRouterAddress = `0x554472a2720E5E7D5D3C817529aBA05EEd5F82D8`;

    const module = m.contract("CCIPSender_Unsafe", [fujiLinkAddress, fujiRouterAddress], {});

    return { module };
});

export default CCIPSender_UnsafeModule;