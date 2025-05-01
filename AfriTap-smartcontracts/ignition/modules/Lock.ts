// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const AfriTapWalletModule = buildModule("AfriTapWalletModule", (m) => {
  
  const afriTapWallet = m.contract("AfriTapWallet", [], {
    
  });

  return { afriTapWallet };
});

export default AfriTapWalletModule;
