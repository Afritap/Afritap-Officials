// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AfriTapSusu {
    struct Group {
        string name;
        address owner;
        uint256 contributionAmount;
        uint256 duration; // in seconds
        bool isTokenBased;
        address tokenAddress; // ERC20 address if token-based
        uint256 startTime;
        address[] members;
        bool isActive;
    }

    // Group ID to Group details
    mapping(uint256 => Group) public groups;

    // Track user contributions per week: groupId => weekNumber => user => bool
    mapping(uint256 => mapping(uint256 => mapping(address => bool))) public hasContributed;

    // Group counter
    uint256 public groupIdCounter;

    // Events
    event GroupCreated(uint256 indexed groupId, string name, address indexed owner);
    event JoinedGroup(uint256 indexed groupId, address indexed member);
    event Contributed(uint256 indexed groupId, address indexed member, uint256 amount);
    event GroupDistributed(uint256 indexed groupId);

    // Create a new Susu group
    function createGroup(
        string memory name,
        uint256 contributionAmount,
        uint256 duration,
        bool isTokenBased,
        address tokenAddress
    ) external {
        require(contributionAmount > 0, "Contribution must be greater than zero");
        if (isTokenBased) {
            require(tokenAddress != address(0), "Invalid token address for token-based group");
        }

        groupIdCounter++;
        
        address[] memory initialMembers = new address[](0);
        
        groups[groupIdCounter] = Group({
            name: name,
            owner: msg.sender,
            contributionAmount: contributionAmount,
            duration: duration,
            isTokenBased: isTokenBased,
            tokenAddress: tokenAddress,
            startTime: block.timestamp,
            members: initialMembers,
            isActive: true
        });

        emit GroupCreated(groupIdCounter, name, msg.sender);
    }

    // Join a Susu group
    function joinGroup(uint256 groupId) external {
        Group storage group = groups[groupId];
        require(group.isActive, "Group is not active");

        // Check if user already joined
        for (uint256 i = 0; i < group.members.length; i++) {
            require(group.members[i] != msg.sender, "Already joined group");
        }

        group.members.push(msg.sender);
        emit JoinedGroup(groupId, msg.sender);
    }

    // Contribute to a Susu group (for current week)
    function contribute(uint256 groupId) external payable {
        Group storage group = groups[groupId];
        require(group.isActive, "Group is not active");

        uint256 currentWeek = getCurrentWeek(group.startTime);

        if (group.isTokenBased) {
            IERC20 token = IERC20(group.tokenAddress);
            require(
                token.transferFrom(msg.sender, address(this), group.contributionAmount),
                "Token transfer failed"
            );
        } else {
            require(msg.value == group.contributionAmount, "Incorrect native token amount sent");
        }

        hasContributed[groupId][currentWeek][msg.sender] = true;
        emit Contributed(groupId, msg.sender, group.contributionAmount);
    }

    // Distribute funds equally to members after the Susu lock period (only those who contributed)
    function distribute(uint256 groupId) external {
        Group storage group = groups[groupId];
        require(group.isActive, "Group is not active");
        require(msg.sender == group.owner, "Only owner can distribute");
        require(block.timestamp >= group.startTime + group.duration, "Group is still locked");

        uint256 currentWeek = getCurrentWeek(group.startTime);
        uint256 totalMembers = group.members.length;
        require(totalMembers > 0, "No members to distribute to");

        uint256 totalFunds;
        if (group.isTokenBased) {
            IERC20 token = IERC20(group.tokenAddress);
            totalFunds = token.balanceOf(address(this));
            uint256 eligibleCount = 0;
            for (uint256 i = 0; i < totalMembers; i++) {
                address member = group.members[i];
                if (hasContributed[groupId][currentWeek][member]) {
                    eligibleCount++;
                }
            }

            uint256 share = totalFunds / eligibleCount;
            for (uint256 i = 0; i < totalMembers; i++) {
                address member = group.members[i];
                if (hasContributed[groupId][currentWeek][member]) {
                    token.transfer(member, share);
                }
            }
        } else {
            totalFunds = address(this).balance;
            uint256 eligibleCount = 0;
            for (uint256 i = 0; i < totalMembers; i++) {
                address member = group.members[i];
                if (hasContributed[groupId][currentWeek][member]) {
                    eligibleCount++;
                }
            }

            uint256 share = totalFunds / eligibleCount;
            for (uint256 i = 0; i < totalMembers; i++) {
                address member = group.members[i];
                if (hasContributed[groupId][currentWeek][member]) {
                    payable(member).transfer(share);
                }
            }
        }

        group.isActive = false; // close the group after distribution
        emit GroupDistributed(groupId);
    }

    // Get group members
    function getGroupMembers(uint256 groupId) external view returns (address[] memory) {
        return groups[groupId].members;
    }

    // Helper to get current week number
    function getCurrentWeek(uint256 startTime) public view returns (uint256) {
        return (block.timestamp - startTime) / 1 weeks + 1;
    }
}