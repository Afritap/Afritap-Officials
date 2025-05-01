import { ethers } from "hardhat";

async function main() {
  try {
    // Get the account that will deploy the contract
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying AfriTapWallet contract with account:", deployer.address);
    
    // Check account balance before deployment
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance), "ETH");
    
    // Deploy the contract
    const AfriTapWallet = await ethers.getContractFactory("AfriTapWallet");
    console.log("Deploying AfriTapWallet...");
    
    const afriTapWallet = await AfriTapWallet.deploy();
    await afriTapWallet.waitForDeployment();
    
    const contractAddress = await afriTapWallet.getAddress();
    console.log("AfriTapWallet deployed to:", contractAddress);
    
    // Optional: Verify contract on the explorer if deploying to a public network
    console.log("Don't forget to verify the contract on the explorer!");
    console.log(`npx hardhat verify --network <network_name> ${contractAddress}`);
    
    return contractAddress;
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exitCode = 1;
  }
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });