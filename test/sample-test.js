const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("basic-test", function () {
  it("Should mint and trasnfer an NFT to someone", async function () {
    const Attend = await ethers.getContractFactory("AttendanceJan19");
    const attend = await Attend.deploy();
    await attend.deployed();

    const recipient = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';
    const metadataURI = 'cid/test.png'

    let balance = await attend.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await attend.safeMint(recipient, metadataURI, { value: ethers.utils.parseEther('0.02') });

    await newlyMintedToken.wait();

    balance = await attend.balanceOf(recipient);
    expect(balance).to.equal(1);
  });
});

describe("double mint test", function () {
  it("should test minting twice with the same address and fail", async function () {
    const Attend = await ethers.getContractFactory("AttendanceJan19");
    const attend = await Attend.deploy();
    await attend.deployed();

    const recipient = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';
    const metadataURI = 'cid/test.png'

    let balance = await attend.balanceOf(recipient);
    expect(balance).to.equal(0);

    const newlyMintedToken = await attend.safeMint(recipient, metadataURI, {});

    await newlyMintedToken.wait();

    balance = await attend.balanceOf(recipient);
    expect(balance).to.equal(1);

    const secondMintedToken = attend.safeMint(recipient, 'cid/tetest.png', { value: ethers.utils.parseEther('0.02') });
    
    await expect(secondMintedToken).to.be.revertedWith('You already have an NFT!');

  });
});