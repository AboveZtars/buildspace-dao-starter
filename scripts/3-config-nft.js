import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
//Importing and configuring our .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();
// Some quick checks to make sure our .env is working.
if (!process.env.DROP_MODULE_ADDRESS || process.env.DROP_MODULE_ADDRESS == "") {
  console.log("🛑 Drop Module address not found.");
}

const bundleDrop = sdk.getBundleDropModule(process.env.DROP_MODULE_ADDRESS);

const script3 = async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "8 Pixel Megaman",
        description: "This NFT will give you access to MegamanDAO!",
        image: readFileSync("scripts/assets/megaman_helmet.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
};
script3();
