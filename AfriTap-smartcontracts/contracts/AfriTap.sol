// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AfriTapWallet {
    // Events
    event DepositNative(address indexed user, uint256 amount);
    event DepositToken(address indexed user, address indexed token, uint256 amount);
    event TransferNative(address indexed from, address indexed to, uint256 amount);
    event TransferToken(address indexed from, address indexed to, address indexed token, uint256 amount);
    event UserRegistered(address indexed user);

    // User registration tracking
    mapping(address => bool) private registeredUsers;

    // User native token balances
    mapping(address => uint256) private nativeBalances;

    // User ERC20 token balances
    mapping(address => mapping(address => uint256)) private tokenBalances; // user => token => balance

    // Deposit native token (ETH/Celo)
    function depositNative() external payable {
        require(msg.value > 0, "Deposit must be greater than zero");

        nativeBalances[msg.sender] += msg.value;
        emit DepositNative(msg.sender, msg.value);
    }

    // Deposit any ERC20 token
    function depositToken(address tokenAddress, uint256 amount) external {
        require(tokenAddress != address(0), "Invalid token address");
        require(amount > 0, "Amount must be greater than zero");

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
        tokenBalances[msg.sender][tokenAddress] += amount;

        emit DepositToken(msg.sender, tokenAddress, amount);
    }

    // Transfer native token to another user
    function transferNative(address recipient, uint256 amount) external {
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than zero");
        require(nativeBalances[msg.sender] >= amount, "Insufficient native balance");

        nativeBalances[msg.sender] -= amount;
        nativeBalances[recipient] += amount;

        emit TransferNative(msg.sender, recipient, amount);
    }

    // Transfer ERC20 token to another user
    function transferToken(address tokenAddress, address recipient, uint256 amount) external {
        require(tokenAddress != address(0), "Invalid token address");
        require(recipient != address(0), "Invalid recipient address");
        require(amount > 0, "Amount must be greater than zero");
        require(tokenBalances[msg.sender][tokenAddress] >= amount, "Insufficient token balance");

        tokenBalances[msg.sender][tokenAddress] -= amount;
        tokenBalances[recipient][tokenAddress] += amount;

        emit TransferToken(msg.sender, recipient, tokenAddress, amount);
    }

    // Register user
    function register() external {
        require(!registeredUsers[msg.sender], "User already registered");
        
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    // Get native balance
    function getNativeBalance(address user) external view returns (uint256) {
        return nativeBalances[user];
    }

    // Get token balance
    function getTokenBalance(address user, address tokenAddress) external view returns (uint256) {
        return tokenBalances[user][tokenAddress];
    }
}
