AfriTapWallet Smart Contract
Overview
The AfriTapWallet is a decentralized wallet designed to facilitate group savings (Susu) where users can deposit native tokens (ETH or Celo) and ERC20 tokens. They can then transfer tokens to other users, contribute to Susu groups, and withdraw funds after a lock period. The contract allows users to create and join Susu groups, deposit funds, and perform transfers between wallet addresses.

Key Features
Deposit and Transfer Tokens:

Users can deposit native tokens (ETH or Celo) and ERC20 tokens into their wallets.

Users can transfer both native and ERC20 tokens to other users.

Create and Join Susu Groups:

Users can create new Susu groups and join existing ones.

Contributions to the groups can be made using both native tokens and ERC20 tokens.

Funds in the group are locked for a specified duration and distributed proportionally to contributors once the lock period ends.

Fund Distribution:

After the lock period ends, the group funds are distributed proportionally among contributors based on their individual contributions.

Contract Structure and Flow
1. User Registration (Implicit)
No explicit registration is needed. Users are identified by their wallet address (either Ethereum or Celo address). A user must simply interact with the contract (deposit, transfer, or join a group) to be considered "active."

2. Functions
2.1 Deposits
depositNative(): Allows users to deposit native tokens (ETH or Celo).

How it works: The contract accepts native tokens from the sender and updates their balance in the contract.

Frontend Integration: Use the connected wallet’s provider to trigger a depositNative() transaction.

depositToken(address tokenAddress, uint256 amount): Allows users to deposit ERC20 tokens.

How it works: The contract accepts ERC20 tokens by transferring them from the user’s wallet to the contract.

Frontend Integration: For ERC20 tokens, the frontend needs to interact with the token’s contract and call depositToken().

2.2 Transfers
transferNative(address recipient, uint256 amount): Allows users to transfer native tokens (ETH/Celo) to another user.

How it works: Native tokens are transferred from one user’s balance to another’s. The transaction is logged with an event.

Frontend Integration: Trigger a native transfer by calling transferNative().

transferToken(address tokenAddress, address recipient, uint256 amount): Allows users to transfer ERC20 tokens.

How it works: ERC20 tokens are transferred to the recipient, updating their token balances.

Frontend Integration: Call transferToken() and pass in the token address, recipient, and amount.

2.3 Susu Group Functions
createGroup(string calldata name, uint256 lockDuration): Allows a user to create a new Susu group with a lock duration.

How it works: This function creates a new Susu group with a unique ID and sets a lock duration (e.g., 30 days). Only the group creator can set the lock duration.

Frontend Integration: After connecting the wallet, the frontend should call createGroup() and pass in the group name and lock duration.

joinGroup(uint256 groupId): Allows a user to join an existing Susu group by providing the group ID.

How it works: The user is added to the group’s member list, enabling them to contribute tokens to the group.

Frontend Integration: Use joinGroup(groupId) to allow users to join a group.

2.4 Group Contributions
contributeNativeToGroup(uint256 groupId, uint256 amount): Allows a user to contribute native tokens to a Susu group.

How it works: Native tokens are contributed to the group and tracked based on the user's address.

Frontend Integration: When contributing to a group, call contributeNativeToGroup(groupId, amount) and pass the group ID and contribution amount.

contributeTokenToGroup(uint256 groupId, address tokenAddress, uint256 amount): Allows a user to contribute ERC20 tokens to a Susu group.

How it works: ERC20 tokens are contributed to the group and tracked for that user.

Frontend Integration: Call contributeTokenToGroup(groupId, tokenAddress, amount) for token contributions.

2.5 Fund Distribution
distributeGroupNativeFunds(uint256 groupId): After the lock period ends, the group funds (native tokens) are distributed proportionally to contributors based on their contributions.

How it works: The function calculates each user’s share based on their contribution and transfers the appropriate native tokens back to the contributors.

Frontend Integration: The frontend can allow users to trigger this function once the lock period has ended.

2.6 View Functions
getNativeBalance(address user): Returns the native token balance of a user in the contract.

getTokenBalance(address user, address tokenAddress): Returns the ERC20 token balance of a user for a specific token.

getGroupNativeBalance(uint256 groupId): Returns the total native token balance of a specific Susu group.

getGroupLockEndTime(uint256 groupId): Returns the lock end time of a group.

