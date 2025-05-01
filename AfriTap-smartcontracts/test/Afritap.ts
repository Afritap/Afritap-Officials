import { expect } from "chai";
import { ethers } from "hardhat";
import { AfriTapWallet } from "../typechain-types";

describe("AfriTapWallet", function () {
  let wallet: AfriTapWallet;
  let owner: any;
  let user1: any;
  let user2: any;

  beforeEach(async function () {
    [owner, user1, user2] = await ethers.getSigners();

    const Wallet = await ethers.getContractFactory("AfriTapWallet");
    wallet = await Wallet.deploy();
    await wallet.deployed();
  });

  describe("User Registration", function () {
    it("should register a user", async function () {
      await expect(wallet.connect(user1).register())
        .to.emit(wallet, "UserRegistered")
        .withArgs(user1.address);

      // Trying to register again should fail
      await expect(wallet.connect(user1).register()).to.be.revertedWith("User already registered");
    });
  });

  describe("Native Deposit and Transfer", function () {
    it("should deposit native tokens", async function () {
      await expect(wallet.connect(user1).depositNative({ value: ethers.parseEther("1") }))
        .to.emit(wallet, "DepositNative")
        .withArgs(user1.address, ethers.parseEther("1"));

      const balance = await wallet.getNativeBalance(user1.address);
      expect(balance).to.equal(ethers.parseEther("1"));
    });

    it("should transfer native tokens", async function () {
      await wallet.connect(user1).depositNative({ value: ethers.parseEther("1") });

      await expect(wallet.connect(user1).transferNative(user2.address, ethers.parseEther("0.5")))
        .to.emit(wallet, "TransferNative")
        .withArgs(user1.address, user2.address, ethers.parseEther("0.5"));

      const balance1 = await wallet.getNativeBalance(user1.address);
      const balance2 = await wallet.getNativeBalance(user2.address);

      expect(balance1).to.equal(ethers.parseEther("0.5"));
      expect(balance2).to.equal(ethers.parseEther("0.5"));
    });
  });

  describe("Group Functionality", function () {
    it("should create and join a group", async function () {
      await expect(wallet.connect(user1).createGroup("Test Group", 3600))
        .to.emit(wallet, "GroupCreated");

      await expect(wallet.connect(user2).joinGroup(0))
        .to.emit(wallet, "JoinedGroup")
        .withArgs(0, user2.address);
    });

    it("should allow contributions and distribute funds", async function () {
      // User1 creates a group
      await wallet.connect(user1).createGroup("Savings", 1); // lock duration 1 second

      // Deposit native by both users
      await wallet.connect(user1).depositNative({ value: ethers.parseEther("1") });
      await wallet.connect(user2).depositNative({ value: ethers.parseEther("2") });

      // User2 joins
      await wallet.connect(user2).joinGroup(0);

      // Contributions
      await wallet.connect(user1).contributeNativeToGroup(0, ethers.parseEther("1"));
      await wallet.connect(user2).contributeNativeToGroup(0, ethers.parseEther("2"));

      // Check group balance
      const groupBalance = await wallet.getGroupNativeBalance(0);
      expect(groupBalance).to.equal(ethers.parseEther("3"));

      // Wait for lock time to pass
      await ethers.provider.send("evm_increaseTime", [2]); // fast-forward 2 seconds
      await ethers.provider.send("evm_mine", []);

      // Distribute
      await expect(wallet.connect(user1).distributeGroupNativeFunds(0))
        .to.emit(wallet, "GroupFundsDistributed")
        .withArgs(0);

      // Check user balances after distribution
      const balance1 = await wallet.getNativeBalance(user1.address);
      const balance2 = await wallet.getNativeBalance(user2.address);

      // Proportional distribution
      expect(balance1).to.equal(ethers.parseEther("1"));
      expect(balance2).to.equal(ethers.parseEther("2"));
    });
  });
});
