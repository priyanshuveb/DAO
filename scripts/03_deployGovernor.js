const { ethers } = require("hardhat")
const { TOKEN_ADDRESS, TIMELOCK_ADDRESS } = require("../helper-hardhat-config")

async function main() {
    // While deploying this contract we are already setting up 4 values directly in the 
    // smart contract and not taking them as parameters, those values are:
    // 1. quorumPercentage 2. votingDelay 3. votingPeriod 4. proposalThreshold

    console.log(`Deploying..`);

    const Governor = await ethers.getContractFactory('GovernorDAO')
    const governor = await Governor.deploy(TOKEN_ADDRESS, TIMELOCK_ADDRESS)
    await governor.waitForDeployment()
    const governorAddress = await governor.getAddress()
    console.log('governor deployed:', governorAddress)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});