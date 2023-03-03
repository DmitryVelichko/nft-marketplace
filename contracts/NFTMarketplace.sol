// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4; // set version to match with waht we have in our hardhat configuration

// Using ERC721 standard
// Functionality we can use
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

// public means available from the client application
// view means it's not doing any transaction work

// Creating our contract ->Inherited from ERC721URIStorage
contract NFTMarketplace is ERC721URIStorage {
    // allows us to use the coutner utility.
    using Counters for Counters.Counter;
    // when the first token is minted it'll get a value of zero, the second one is one
    // and then using counters this we'll increment token ids
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
