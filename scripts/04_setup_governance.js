const { ethers } = require("hardhat")
const { GOVERNOR_DAO_ADDRESS,TIMELOCK_ADDRESS } = require("../helper-hardhat-config")
async function main() {
  const accounts = await ethers.getSigners()
  const deployer = accounts[0]
  
 console.log('Setting up...');

  const timeLock = await ethers.getContractAt("TimeLock", TIMELOCK_ADDRESS)
  const governor = await ethers.getContractAt("GovernorDAO", GOVERNOR_DAO_ADDRESS)


  const proposerRole = await timeLock.PROPOSER_ROLE()
  const executorRole = await timeLock.EXECUTOR_ROLE()
  // const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE()
 

  // giving the proposal role to the governance dao contract
  const proposerTx = await timeLock.grantRole(proposerRole, GOVERNOR_DAO_ADDRESS)
  await proposerTx.wait(1)
  // giving the executor role to the deployer, more addresses can be added further
  const executorTx = await timeLock.grantRole(executorRole, deployer.address)
  await executorTx.wait(1)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});