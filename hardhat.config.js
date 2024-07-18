require("@nomicfoundation/hardhat-toolbox");
require('@nomicfoundation/hardhat-verify')
//require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

// task('accounts', 'Prints the list of accounts', async () => {
//   const accounts = await ethers.getSigners()

//   for (const account of accounts) {
//     console.log(account.address)
//   }
// })

module.exports = {
  solidity: '0.8.20',
  settings: {
    optimizer: {
      enabled: true,
      runs: 100
    }
  },
  networks:{
    sepolia: {
      chainId: 11155111,
      url:`https://eth-sepolia.g.alchemy.com/v2/Af6daGPIu82mzt2qbc5RLcnFUXIDgpc4`,
      accounts:[process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: `73F5A1QSPD7WDFXF39IB3F13NTDCZ16V5Y`,
    }
  }
}