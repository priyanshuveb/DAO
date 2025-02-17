### Setup
```bash
git clone https://github.com/priyanshuveb/DAO.git
cd DAO
npm install
```

### Features
- Admin: Deployer address
- Quorum fraction: 4%
- Voting delay: 1 block
- Voting period: 10 blocks
- Minimum delay: 1 block
- Token max supply: 1 billion
- Proposal threshold: 0
- Executer: Deployer address
- Proposor: GovernorDAO Contract

### Scripts
- Script1:
  - Will deploy the token compatible with DAO votes
  - Delegate the votes so that they can be used for voting
- Script2: Deploy the Timelock contract
- Script3: Deploy the GovernorDAO contract
- Script4: 
  - Will set the appropriate executor and proposor 
  - Proposor is set to be GovernorDAO address for now, other EOA addresses could also be added in future
  - Executor is set to be the deployer address, further address could also be added in future
  - Can only be set by the Admin
- Script5: Deploy the simple target contract, the proposal will be raised to made changes into this contract
- Script6: Create proposal and log the proposalId in the proposal.json file
- Script7: Vote on the proposal with the help of the proposalId
- Script8: Queue the proposal if voting is successful and then after waiting for the minimum delay execute the proposal

### Deployments on sepolia network
- Governance Token: 0x220Bf7f0230efe1e2EFD7d5bdcD681B2676F93a3
- TimeLock: 0xEF7bB1927fA98Db49DC48FD3C725dbC25993bCE4
- GovernorDAO: 0xd25316b9b5f1a31d221990eddbb4c8e84f6b9d80
- Storage: 0x3cAd2cBf262e4D6F647B538452F088844557604D

