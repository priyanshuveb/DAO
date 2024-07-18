const MIN_DELAY = 1; // 1 block
const TOKEN_ADDRESS = '0x220Bf7f0230efe1e2EFD7d5bdcD681B2676F93a3'; // addresss of the deployed token
const TIMELOCK_ADDRESS = '0xEF7bB1927fA98Db49DC48FD3C725dbC25993bCE4'; // address of the deployed timelock
const GOVERNOR_DAO_ADDRESS = '0xd25316b9b5f1a31d221990eddbb4c8e84f6b9d80'; // address of the deployed governorDAO
const FUNC = "setValue";
const PROPOSAL_DESCRIPTION = "Setting a new value";
const NEW_VALUE = 89
const proposalsFile = "proposals.json"
const STORAGE_ADDRESS = '0x3cAd2cBf262e4D6F647B538452F088844557604D'

module.exports = { MIN_DELAY, TOKEN_ADDRESS, TIMELOCK_ADDRESS, GOVERNOR_DAO_ADDRESS, FUNC, PROPOSAL_DESCRIPTION, NEW_VALUE, proposalsFile, STORAGE_ADDRESS }