require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/gme5T7ji5u4bHQvuyAc-MepeLGlmqW7Q",
      accounts: [
        "9cab7c614fce73a6f4d00c02a4bd885e41a2febc21613e78fbee22567c2d3dda",
      ],
    },
  },
};
