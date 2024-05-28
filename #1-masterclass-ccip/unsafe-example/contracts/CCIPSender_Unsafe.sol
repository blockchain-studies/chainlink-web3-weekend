// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/shared/interfaces/LinkTokenInterface.sol";

contract CCIPSender_Unsafe {
    address owner;
    address link;
    address router;

    constructor(address _link, address _router) {
        link = _link;
        router = _router;
        owner = msg.sender;
        
        // Using LINK to pay fee and approving, at moment, the maximum gas limit
        LinkTokenInterface(link).approve(router, type(uint256).max);
    }

    function send(address _receiver, string memory data, uint64 _destinationChainSelector) external {
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(_receiver),
            data: abi.encode(data), // Should send a string, number, struct, anything
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: link
        });

        IRouterClient(router).ccipSend(_destinationChainSelector, message);
    }
}