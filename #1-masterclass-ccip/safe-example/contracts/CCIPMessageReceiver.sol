// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";

interface Insure {
    function insure(address _account, uint256 _amount) external;
}

/// @title CCIPMessageReceiver
/// @notice Send EVM2AnyMessage CrossChain using CCIP protocol
contract CCIPMessageReceiver is CCIPReceiver, Insure {
    event InsureCallErrorEvent(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        address sender, // The address of the sender from the source chain.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
    );
    event InsureEvent(address indexed _account, uint256 _amount);
    event MessageReceived(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        address sender, // The address of the sender from the source chain.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
    );

    bytes32 private s_lastReceivedMessageId; // Store the last received messageId.
    address private s_lastReceivedTokenAddress; // Store the last received token address.
    uint256 private s_lastReceivedTokenAmount; // Store the last received amount.

    constructor(address _router) CCIPReceiver(_router) {}

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        s_lastReceivedMessageId = message.messageId;

        (bool success, ) = address(this).call(message.data);

        s_lastReceivedTokenAddress = message.destTokenAmounts[0].token;
        s_lastReceivedTokenAmount = message.destTokenAmounts[0].amount;
        
        if (success) {
            emit MessageReceived(
                s_lastReceivedMessageId,
                abi.decode(message.sender, (address)),
                s_lastReceivedTokenAddress,
                s_lastReceivedTokenAmount
            );
        } else {
            emit InsureCallErrorEvent(
                s_lastReceivedMessageId,
                abi.decode(message.sender, (address)),
                s_lastReceivedTokenAddress,
                s_lastReceivedTokenAmount
            );
            
            revert();
        }
    }

    function insure(address _account, uint256 _amount) external {
        // TODO: Add the business logic to be possible insure successfully
        emit InsureEvent(_account, _amount);
    }
}
