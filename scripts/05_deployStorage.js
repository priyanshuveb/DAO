const { ethers } = require("hardhat")

async function main() {

  console.log(`Deploying..`);

  const Storage = await ethers.getContractFactory('Storage')
  const storage = await Storage.deploy()
  await storage.waitForDeployment()
  const storageAddress = await storage.getAddress()
  console.log('Storage deployed:', storageAddress)
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});