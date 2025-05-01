import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  // In newer versions of ethers.js, getBalance() is directly on the provider
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  const AfriTapSusu = await ethers.getContractFactory("AfriTapSusu");
  const afriTapSusu = await AfriTapSusu.deploy();

  // In newer ethers.js versions, `deployed()` might be deprecated
  // Use the deployment transaction confirmation instead
  await afriTapSusu.waitForDeployment();
  
  // Get the deployed contract address
  const contractAddress = await afriTapSusu.getAddress();
  console.log("AfriTapSusu deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});