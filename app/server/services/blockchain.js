/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const { Gateway, Wallets } = require("fabric-network");
const path = require("path");
const fs = require("fs");

const config = {
    channelName: "mychannel",
    chaincodeName: "qut",
    orgUserId: "n10837353",
};

// To display the results
function prettyJSONString(inputString) {
    return JSON.stringify(JSON.parse(inputString), null, 2);
}

async function submitTransaction(funcName, ...args) {
    let buffer;
    try {
        // load the network configuration
        const ccpPath = path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "test-network",
            "organizations",
            "peerOrganizations",
            "org1.example.com",
            "connection-org1.json"
        );
        const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));
        // Create a new file system based wallet for managing identities
        const walletPath = path.join(
            __dirname,
            "../../../QutAssessments",
            "wallet"
        );
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        // Check to see if we've already enrolled the user
        const identity = await wallet.get(config.orgUserId);
        if (!identity) {
            console.log(
                `An identity for the user ${config.orgUserId} does not exist in the wallet`
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }
        const gateway = new Gateway();
        try {
            await gateway.connect(ccp, {
                wallet,
                identity: config.orgUserId,
                discovery: { enabled: true, asLocalhost: true },
            });
            const network = await gateway.getNetwork(config.channelName);
            const contract = network.getContract(config.chaincodeName);
            console.log(`\n--> Submit Transaction: ${funcName}`);
            buffer = await contract.submitTransaction(funcName, ...args);
            console.log("Transaction committed");
            // console.log(JSON.parse(buffer.toString()));
            // console.log(`*** Result: ${prettyJSONString(buffer.toString())}`);
        } finally {
            // Disconnect from the gateway when the application is closing
            // This will close all connections to the network
            gateway.disconnect();
        }
    } catch (error) {
        console.error(`Failed to submit transaction: ${error}`);
        process.exit(1);
    }
    const result = buffer.toString();
    return result;
}

async function evaluateTransaction(funcName, ...args) {
    let buffer;
    try {
        const ccpPath = path.resolve(
            __dirname,
            "..",
            "..",
            "..",
            "test-network",
            "organizations",
            "peerOrganizations",
            "org1.example.com",
            "connection-org1.json"
        );
        const ccp = JSON.parse(fs.readFileSync(ccpPath, "utf8"));
        const walletPath = path.join(
            __dirname,
            "../../../QutAssessments",
            "wallet"
        );
        const wallet = await Wallets.newFileSystemWallet(walletPath);
        const identity = await wallet.get(config.orgUserId);
        if (!identity) {
            console.log(
                `An identity for the user ${config.orgUserId} does not exist in the wallet`
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }
        const gateway = new Gateway();
        try {
            await gateway.connect(ccp, {
                wallet,
                identity: config.orgUserId,
                discovery: { enabled: true, asLocalhost: true },
            });
            const network = await gateway.getNetwork(config.channelName);
            const contract = network.getContract(config.chaincodeName);
            console.log(`\n--> Evaluate Transaction: ${funcName}`);
            buffer = await contract.evaluateTransaction(funcName, ...args);
            console.log("Transaction evaluated");
            console.log(`*** Result: ${prettyJSONString(buffer.toString())}`);
        } finally {
            gateway.disconnect();
        }
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
    const result = buffer.toString();
    return result;
}

// Export functions for retreiving data from front-end
// Maybe you return the student info and assessment info together
// Get a student information
// exports.getStudent = function(std) {
const getStudent = (ID) => {
    return evaluateTransaction("get", ID);
};

// Try without stringify if it's not array but string from the front-end
// Add a new assessment and update to the student object
// exports.addAssessment = function(ast, std) {
const addAssessment = (ast, std) => {
    return submitTransaction(
        "createAssessment",
        ast.ID,
        ast.UnitId,
        ast.UnitName,
        ast.AssessmentName,
        JSON.stringify(ast.Criteria),
        JSON.stringify(ast.Achievement)
    )
        .then(() => {
            return submitTransaction("updateAstToStd", std.ID, ast.ID);
        })
        .then(() => {
            return evaluateTransaction("get", ast.ID);
        });
};

const addReportToStudent = (studentId, reportId) => {
    return submitTransaction("updateReportToStd", studentId, reportId);
};

// Get an assessment
// exports.getAssessment = function(ast) {
const getAssessment = (AssessmentID) => {
    return evaluateTransaction("get", AssessmentID);
};

// Add a report
// exports.addReport = function(rpt) {
const addReport = (rpt) => {
    return submitTransaction(
        "createReport",
        rpt.ID,
        rpt.StudentID,
        JSON.stringify(rpt.AssessmentIDs),
        rpt.createdDate,
        rpt.Status
    );
};

// Update the report status to 'Approved' (Just for demo since we don't implement admin proto)
const approveReport = (rpt) => {
    return submitTransaction("updateState", rpt.ID);
};

// Get a report

const getReport = (reportId) => {
    return evaluateTransaction("get", reportId);
};

module.exports = {
    getReport,
    getStudent,
    prettyJSONString,
    getAssessment,
    addReport,
    addReportToStudent,
    addAssessment,
    approveReport,
};
