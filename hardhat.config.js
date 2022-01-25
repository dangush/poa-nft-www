require("@nomiclabs/hardhat-waffle");


const INFURA_KEY = "37fa56a33acf45b0bff61299c7c59775";
const RINKEBY_PRIVATE_KEY = "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
}); 

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/7be9f796ecd344b29b57b20f8bc76d5a`,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  }
};
