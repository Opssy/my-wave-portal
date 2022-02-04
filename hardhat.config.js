require("@nomiclabs/hardhat-waffle");

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
    hardhat:{
      chainId:1337
    }
    // ,
    // rinkeby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/O4smZGEw0IFzqee896Ao3eQh8YJ3Cr6G",
    //   accounts: ["58d248e56263c4c73fad01ab93d416d53fd43eccaad8c7a8c2ee3b3af9402919"],
    // }
  }
};
