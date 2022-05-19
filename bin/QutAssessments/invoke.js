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
        // const student = {
        //     ID: "n10101010", //unique key
        //     Name: "Yena",
        //     Degree: "Master",
        //     Major: "CS",
        //     AssessmentIDs: ["11111111", "11111112", "11111113"]
        // };

        const assessments = {
            ID: "n10837300_IFN680_3",
            UnitId: "IFN680_21se2",
            UnitName: 'Artificial Intelligent',
            AssessmentName: "Sokovan Programming",
            Criteria: ["Introduction (10%)", "Background (20%)", "Body (10%)", "Conclusion (10%)"],
            Achievement: [
                "1.	The overall level of functionality successfully implemented",
                "2.	The robustness of the application",
                "3.	The user interface design of the application",
                "4.	Application architecture and code quality",
            ],
        };

        // const assessments = {
        //     ID: "abcde", // unique assessment id belongs to one student
        //     UnitId: "IFN711_22se1",
        //     UnitName: "Industry Project",
        //     AssessmentName: "Project Plan",
        //     Criteria: ["Introduction (10%)", "Background (20%)", "Body (50%)", "Conclusion (20%)"],
        //     Achievement: [
        //         "The overall level of functionality successfully implemented",
        //         "The robustness of the application",
        //         "The user interface design of the application",
        //         "Application architecture and code quality",
        //     ],
        // }

        // Add Student and return a string, "ture" means success,"false" means
        // The Student id already existed
        // console.log("=============Start:Add student ============");
        // const AddStudent = await contract.submitTransaction(
        //     "createStudent",
        //     student.ID,
        //     student.Name,
        //     student.Degree,
        //     student.Major,
        //     JSON.stringify(assessments.AssessmentIDs)
        // );
        // //
        // if (AddStudent)
        //     console.log(`Add student ${student.ID} has been submitted`);
        // else console.log(`The Student ${student.ID} already existed`);
        // console.log("=============END: Add student ============");

        console.log("=============Start:Add unique assessment for one student ============");


        const addAssessment = await contract.submitTransaction(
            "createAssessment",
            assessments.ID,
            assessments.UnitId,
            assessments.UnitName,
            assessments.AssessmentName,
            JSON.stringify(assessments.Criteria),
            JSON.stringify(assessments.Achievement)
        );

        if (addAssessment)
            console.log(`Create the assessment ${assessments.ID} has been submitted`);
        else console.log(`The assessment ${assessments.ID} already existed`);
        console.log("=============END: Add assessment ============");

        // Disconnect from the gateway.
        await gateway.disconnect();
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}


main();