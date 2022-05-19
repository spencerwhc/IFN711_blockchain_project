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

        const assessment = {
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

        // const assessment = {
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

        // Submit the specified transaction.
        const report = {
            ID: "0003",
            studentID: "n10837300",
            AssessmentIDs: ["n10837300_IFN711_22se1_1", "n10837300_IFN680_3"]
        };

        // Add assessment
        // console.log("=============Start:Add unique assessment for one student ============");
        // const addAssessment = await contract.submitTransaction(
        //     "createAssessment",
        //     assessment.ID,
        //     assessment.UnitId,
        //     assessment.UnitName,
        //     assessment.AssessmentName,
        //     JSON.stringify(assessment.Criteria),
        //     JSON.stringify(assessment.Achievement)
        // );
        // if (addAssessment)
        //     console.log(`Create the assessment ${assessment.ID} has been submitted`);
        // else console.log(`The assessment ${assessment.ID} already existed`);
        // console.log("=============END: Add assessment ============");

        // Add report
        console.log("=============Start:Add report ============");
        const AddReport = await contract.submitTransaction(
            "createReport",
            report.ID,
            report.studentID,
            JSON.stringify(report.AssessmentIDs)
        );
        //
        if (AddReport)
            console.log(`Add report ${report.ID} has been submitted`);
        else console.log(`The report ${report.ID} already existed`);
        console.log("=============END: Add student ============");

        // Disconnect from the gateway.
        await gateway.disconnect();
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
}


main();