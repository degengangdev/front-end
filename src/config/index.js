require('dotenv').config();

const config = {
  networkId: process.env.REACT_APP_NETWORK_ID || '1',
};

module.exports = config;
