const { expect } = require("chai");
var assert = require('assert');
const { ethers } = require("hardhat");
const { BigNumber } = require('ethers');
require("@nomiclabs/hardhat-waffle");
const CreatureAccessoryFactory = '../artifacts/abi/CreatureAccessoryFactory';


var accounts = null;
var CONTRACT_OWNER_ADDRESS = null;
const MUMBAI_ACCOUNT = 0xb2499BAfC36576E41E763A1744742D2E47A32f2c;
const PRIVATE_KEY = '6473f0ddcf10fc666e6afef32473054aec6f965be6d3bd18b238145ee7f0692c'


it("Must have contract instance", async () => {
    accounts = await ethers.getSigners();
    CONTRACT_OWNER_ADDRESS = accounts[0].address;
    console.log(`CONTRACT_OWNER_ADDRESS ${CONTRACT_OWNER_ADDRESS}`)
})