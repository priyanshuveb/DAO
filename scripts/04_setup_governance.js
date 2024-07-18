const { ethers } = require("hardhat")

async function main() {
  const accounts = await ethers.getSigners()
  const deployer = accounts[0]
  
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Deploying..`);

  const timeLock = await ethers.getContract("TimeLock", deployer)
  const governor = await ethers.getContract("GovernorContract", deployer)

  const proposerRole = await timeLock.PROPOSER_ROLE()
  const executorRole = await timeLock.EXECUTOR_ROLE()
  // const adminRole = await timeLock.TIMELOCK_ADMIN_ROLE()

  const proposerTx = await timeLock.grantRole(proposerRole, governor.address)
  await proposerTx.wait(1)
  const executorTx = await timeLock.grantRole(executorRole, deployer.address)
  await executorTx.wait(1)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});