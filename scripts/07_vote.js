const { ethers, network } = require("hardhat")
const { proposalsFile, GOVERNOR_DAO_ADDRESS } = require("../helper-hardhat-config")
const fs = require('fs')
require('dotenv').config()

async function main() {

    const proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"))
    // Get the last proposal for the network. You could also change it for your index
    const proposalId = proposals[network.config.chainId].at(-1);

    console.log({proposalId});
    // 0 = Against, 1 = For, 2 = Abstain
    const voteType = 1

    const governor = await ethers.getContractAt("GovernorDAO", GOVERNOR_DAO_ADDRESS)

    const voteTx = await governor.castVote(
        proposalId,
        voteType
    )
    await voteTx.wait(1)

    const proposalState = await governor.state(proposalId)
    console.log(`Current Proposal State: ${proposalState}`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
