const { ethers, network } = require("hardhat")
const {FUNC,PROPOSAL_DESCRIPTION,NEW_VALUE,proposalsFile,STORAGE_ADDRESS,GOVERNOR_DAO_ADDRESS} = require("../helper-hardhat-config")
const fs = require('fs')
require('dotenv').config()

async function main() {
//   const accounts = await ethers.getSigners()
//   const deployer = accounts[0]

  const governor = await ethers.getContractAt("GovernorDAO",GOVERNOR_DAO_ADDRESS)

  const storage = await ethers.getContractAt("Storage", STORAGE_ADDRESS)
  const encodedFunctionCall = storage.interface.encodeFunctionData(FUNC, [89])

  const proposeTx = await governor.propose(
    [STORAGE_ADDRESS],
    [0],
    [encodedFunctionCall],
    PROPOSAL_DESCRIPTION
  )

  const proposeReceipt = await proposeTx.wait(1)
  const proposalId = proposeReceipt.logs[0].args.proposalId
  console.log(`Proposed with proposal ID:\n  ${proposalId}`)

  const proposalState = await governor.state(proposalId)
  const proposalDeadline = await governor.proposalDeadline(proposalId)
  
  // the Proposal State is an enum data type, defined in the IGovernor contract.
  // 0:Pending, 1:Active, 2:Canceled, 3:Defeated, 4:Succeeded, 5:Queued, 6:Expired, 7:Executed
  console.log(`Current Proposal State: ${proposalState}`)
  // The block number the proposal voting expires
  console.log(`Current Proposal Deadline: ${proposalDeadline}`)

  // save the proposalId
  storeProposalId('106654846220823311994020443933127844076226771055459396102591939065238623302943');

}
function storeProposalId(proposalId) {
    const chainId = network.config.chainId.toString();
    let proposals
  
    if (fs.existsSync(proposalsFile)) {
        proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"));
    } else {
        proposals = { };
        proposals[chainId] = [];
    }   
    proposals[chainId].push(proposalId.toString());
    fs.writeFileSync(proposalsFile, JSON.stringify(proposals), "utf8");
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
