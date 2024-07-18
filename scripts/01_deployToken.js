const hre = require("hardhat");
const { ethers } = require("hardhat")

async function main() {
  const accounts = await ethers.getSigners()
  const deployer = accounts[0]

  // Deploying
  
  console.log(`Deploying..`);

  const Token = await ethers.getContractFactory('PlutoToken')
  const token = await Token.deploy()
  await token.deployed()
  console.log('PlutoToken deployed:', token.address)

  // Delegating

  console.log(`Delegating to the deployer: ${deployer.address}`);

  const governanceToken = await ethers.getContractAt("PlutoToken", token.address)
  const tx = await governanceToken.delegate(deployer.address)
  await tx.wait(1)

  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});