import sdk from "./1-initialize-sdk.js";

//Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();
// Some quick checks to make sure our .env is working.
if (!process.env.DROP_MODULE_ADDRESS || process.env.DROP_MODULE_ADDRESS == "") {
  console.log("🛑 Drop Module address not found.");
}

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_MODULE_ADDRESS);

const script4 = async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      "✅ Successfully set claim condition on bundle drop:",
      bundleDrop.address
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
};
script4();
