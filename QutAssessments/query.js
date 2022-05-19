/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const { Gateway, Wallets } = require("fabric-network");
const path = require("path");
const fs = require("fs");
const { get } = require("http");

async function main(studentID) {
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
        const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));

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

        // Evaluate the specified transaction.


        // Query student
        const result1 = await contract.evaluateTransaction("get", studentID);
        // Query assessment
        // const result2 = await contract.evaluateTransaction("get", assessmentID);
        // console.log("====================search assessment======================");
        // console.log(`This unit ${assessmentID} details is: ${result2}`);
        // Disconnect from the gateway.
        gateway.disconnect();
        return result1.toString();
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function getAll(studentID) {
    try {
        const studentInfo = await main(studentID)
        const studentInfoObject = JSON.parse(studentInfo)
        console.log(studentInfoObject)
        console.log(JSON.parse(studentInfoObject.AssessmentIDs))
            // const { Name, AssessmentIDs } = studentInfoObject
            // console.log("====================search student======================");
            // console.log(`This student ${studentID} details is: ${Name} ${AssessmentIDs}`);
    } catch (error) {}
    // try {
    //     const studentInfo = await get(ctx, studentID);
    //     const { AssessmentIDs } = studentInfo;
    //     const data = await Promise.all(AssessmentIDs.map((id) => {
    //         const assessments = await Get(ctx, id);
    //         return assessments
    //     }))
    //     return studentInfo + data
    // } catch (error) {
    // }
}

const studentID = "0003";

getAll(studentID);

// const student = {
//     ID: "N0001", //unique key
//     Name: "Yena",
//     Degree: "Master",
//     Major: "CS",
//     AssessmentIDs: ["11111111", "11111112", "11111113"]
// };
// const buffer = Buffer.from(JSON.stringify(student));

// console.log("buffer", buffer)

// var temp = JSON.parse(buffer);

// console.log("temp", temp.ID)