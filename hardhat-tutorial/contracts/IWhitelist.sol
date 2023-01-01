// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

interface IWhitelist {
    function whitelistedAddresses(address) external view returns (bool);
}

// Note: Solidity files which only include interfaces are often prefixed with I to signify they're only an interface.

