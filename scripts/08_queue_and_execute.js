const { ethers } = require("hardhat")
const { FUNC, PROPOSAL_DESCRIPTION, NEW_VALUE, STORAGE_ADDRESS, GOVERNOR_DAO_ADDRESS } = require("../helper-hardhat-config")
require('dotenv').config()

async function main() {
  
    const storage = await ethers.getContractAt("Storage", STORAGE_ADDRESS)
    const encodedFunctionCall = storage.interface.encodeFunctionData(FUNC, [NEW_VALUE])

    const descriptionHash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(PROPOSAL_DESCRIPTION))

    const governor = await ethers.getContractAt("GovernorDAO", GOVERNOR_DAO_ADDRESS)
    console.log("Queueing...")
    const queueTx = await governor.queue([STORAGE_ADDRESS], [0], [encodedFunctionCall], descriptionHash)
    await queueTx.wait(2)

    console.log("Executing...")

    const executeTx = await governor.execute(
        [STORAGE_ADDRESS],
        [0],
        [encodedFunctionCall],
        descriptionHash
      )
      await executeTx.wait(1)
      console.log(`Storage value: ${await storage.value()}`)

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
