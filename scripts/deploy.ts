const hre = require("hardhat");

async function sleep(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("nothing happens")
  /*
    DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instances of our Whitelist contract.
    */
  // here we deploy the contract
  const whitelistContract = await hre.ethers.deployContract("Whitelist", [10]);
  // 10 is the Maximum number of whitelisted addresses allowed

  // wait for the contract to deploy
  await whitelistContract.waitForDeployment();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", whitelistContract.target);

  // Sleep for 30 seconds while Etherscan indexes the new contract deployment
  await sleep(30 * 1000); // 30s = 30 * 1000 milliseconds

  // Verify the contract on etherscan
  
  await hre.run("verify:verify", {
    address: whitelistContract.target,
    constructorArguments: [10],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xe489ae436A8292d3fBF66711d6efCAd08e04F389