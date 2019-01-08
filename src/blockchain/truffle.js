require('dotenv').config();
require('babel-register');
require('babel-polyfill');

if (!process.env.MNEMONIC)//|| !process.env.ENDPOINT || !process.env.ENDPOINT_POSFIX
  throw new Error("Missing .env file according to .env.example");

const HDWalletProvider = require('truffle-hdwallet-provider');

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
  new HDWalletProvider(mnemonic, rpcEndpoint, 0, 1); //, process.env.PASSWORD);

const infuraProvider = network => providerWithMnemonic(
  process.env.MNEMONIC || '',
  `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
);

const rinkebyProvider = process.env.SOLIDITY_COVERAGE
  ? undefined
  : infuraProvider('rinkeby');


// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 9545,
//       network_id: "*", // Match any network id
//       gas: 6712388,
//       gasPrice: 100000000000
//     }
//   },
//   mocha: {
//     useColors: true,
//     timeout: 30000
//   }  
// };

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 8003906,
      gasPrice: 4000000000
    },
    // customMainnet: {
    //   provider: providerWithMnemonic(process.env.MNEMONIC, process.env.ENDPOINT + process.env.ENDPOINT_POSFIX),
    //   network_id: 1, // eslint-disable-line camelcase
    //   gas: 4605201,
    //   gasPrice: 10000000000,
    // },
    infuraMainnet: {
      provider: infuraProvider('mainnet'),
      network_id: 1, // eslint-disable-line camelcase
      gas: 6605201,
      gasPrice: 10000000000,
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4, // eslint-disable-line camelcase
      gas: 6605201,
      gasPrice: 10000000000,
    }
  },
  mocha: {
    useColors: true,
    timeout: 30000
  }
};
