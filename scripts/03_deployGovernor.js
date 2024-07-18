const hre = require("hardhat");
const { ethers } = require("hardhat")
const {TOKEN_ADDRESS,TIMELOCK_ADDRESS} = require("../hardhat-helper-config")

async function main() {
// While deploying this contract we are already setting up 4 values directly in the 
// smart contract and not taking them as parameters, those values are:
// 1. quorumPercentage 2. votingDelay 3. votingPeriod 4. proposalThreshold

  const accounts = await ethers.getSigners()
  const deployer = accounts[0]
  
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deploying..`);

  const Governor = await ethers.getContractFactory('GovernorDAO')
  const governor = await Governor.deploy(TOKEN_ADDRESS,TIMELOCK_ADDRESS)
  await governor.deployed()
  console.log('governor deployed:', governor.address)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});