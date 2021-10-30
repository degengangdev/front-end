/* eslint-disable quote-props */
/* eslint-disable max-len */
const DegenGangContractAbi = require('./abis/DegenGang.json');
const { contractAddresses } = require('./constants');
const config = require('../config');
const networkId = config.networkId;
const { web3 } = require('./web3');

const degenGangContractAddress = contractAddresses['degenGang'][networkId]
const degenGangAbiContract = new web3.eth.Contract(DegenGangContractAbi, degenGangContractAddress);

module.exports = {
  degenGangContract: {
    address: degenGangContractAddress,
    contract: degenGangAbiContract
  },
};

