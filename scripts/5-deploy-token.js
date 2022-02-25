import sdk from "./1-initialize-sdk.js";
import dotenv from "dotenv";
dotenv.config();

// Some quick checks to make sure our .env is working.
if (!process.env.APP_ADDRESS || process.env.APP_ADDRESS == "") {
  console.log("🛑 App address not found.");
}

const app = sdk.getAppModule(process.env.APP_ADDRESS);

const script5 = async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "MegamanDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "MGMDAO",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
};
script5();
