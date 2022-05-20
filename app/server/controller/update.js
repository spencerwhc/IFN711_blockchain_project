/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const { Gateway, Wallets } = require("fabric-network");
const fs = require("fs");
const path = require("path");

async function main() {
    try {
        // load the network configuration
        const ccpPath = path.resolve(
            __dirname,
            "..",
            "test-network",
            "organizations",
            "peerOrganizations",
            "org1.example.com",
            "connection-org1.json"
        );
        let ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));

        // Create a new file system based wallet for managing identities.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        const identity = await wallet.get("appUser");
        if (!identity) {
            console.log(
                'An identity for the user "appUser" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "appUser",
            discovery: { enabled: true, asLocalhost: true },
        });

        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        const contract = network.getContract("qut");

        // Submit the specified transaction.
        const StudentID = "n10837300";
        const NewAssessment = "n10837300_IFN680_21se2_1";

        console.log("=============Start:update state ============");
        const updateAstToStd = await contract.submitTransaction(
            "updateAstToStd",
            StudentID,
            NewAssessment,
        );
        //
        if (updateAstToStd == "true")
            console.log(
                `Update state ${studentID + "for" + newAssessment} has been submitted`
            );
        else
            console.log(`The Student ${studentID + "for" + newAssessment} does not exist`);
        console.log("=============END: update state ============");
        // Disconnect from the gateway.
        await gateway.disconnect();

        // //update state
        // console.log("=============Start:update state ============");
        // const updateState = await contract.submitTransaction(
        //     "updateState",
        //     reportID
        // );
        // //
        // if (updateState == "true")
        //     console.log(
        //         `update state ${studentID + "for" + unitID} has been submitted`
        //     );
        // else
        //     console.log(`The Student ${studentID + "for" + unitID} does not exist`);
        // console.log("=============END: update state ============");
        // // Disconnect from the gateway.
        // await gateway.disconnect();
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}

main();