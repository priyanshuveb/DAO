const hre = require("hardhat");
const { ethers } = require("hardhat")
const {MIN_DELAY} = require("../hardhat-helper-config.js")

async function main() {
  const accounts = await ethers.getSigners()
  const deployer = accounts[0]
  
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deploying..`);

  const Timelock = await ethers.getContractFactory('Timelock')
  const timelock = await Timelock.deploy(MIN_DELAY,[],[],deployer.address)
  await timelock.deployed()
  console.log('Timelock deployed:', timelock.address)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});