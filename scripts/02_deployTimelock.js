const hre = require("hardhat");
const { ethers } = require("hardhat")
const { MIN_DELAY } = require("../helper-hardhat-config.js")

async function main() {
  const accounts = await ethers.getSigners()
  const deployer = accounts[0]

  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deploying..`);

  const Timelock = await ethers.getContractFactory('TimeLock')
  // deployer has been set as the admin
  const timelock = await Timelock.deploy(MIN_DELAY, [], [], deployer.address)
  await timelock.waitForDeployment()
  const timeLockAddress = await timelock.getAddress()
  console.log('Timelock deployed:', timeLockAddress)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});