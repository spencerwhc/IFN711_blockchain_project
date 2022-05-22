/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const { Contract } = require("fabric-contract-api");

class QUTAssessment extends Contract {
    //1 initleger
    async initLedger(ctx) {
        console.info("============= START : Initialize Ledger ===========");
        const students = [{
            ID: "n10837353",
            Name: "Yena Park",
            Degree: "Master of Information Technology",
            Major: "Computer Science",
            AssessmentIDs: ["n10837353_IFN711_22se1_1", "n10837353_IFN666_21se1_2"]
        }, ];
        const assessments = [{
                ID: "n10837353_IFN711_22se1_1", // combination of studentID, unitID and n(th) assessment
                UnitId: "IFN711_22se1",
                UnitName: "Industry Project",
                AssessmentName: "Project Plan",
                Criteria: ["Introduction (10%)", "Background (20%)", "Body (50%)", "Conclusion (20%)"],
                Achievement: [
                    "The overall level of functionality successfully implemented",
                    "The robustness of the application",
                    "The user interface design of the application",
                    "Application architecture and code quality",
                ],
            },
            {
                ID: "n10837353_IFN666_21se1_2",
                UnitId: "IFN666_21se2",
                UnitName: "Web and Mobile Application Development",
                AssessmentName: "React Application Development",
                Criteria: ["Introduction (10%)", "Background (20%)", "Body (50%)", "Conclusion (20%)"],
                Achievement: [
                    "The overall level of functionality successfully implemented",
                    "The robustness of the application",
                    "The user interface design of the application",
                    "Application architecture and code quality",
                ],
            }
        ];
        const reports = [{
            ID: "0001",
            StudentID: "n10837353",
            AssessmentIDs: ["n10837353_IFN711_22se1_1", "n10837353_IFN666_21se1_2"],
            Status: "Pending"
        }, ];

        for (const student of students) {
            await ctx.stub.putState(student.ID, Buffer.from(JSON.stringify(student)));
            console.info(`Asset ${student.ID} initialized`);
        }
        for (const assessment of assessments) {
            await ctx.stub.putState(assessment.ID, Buffer.from(JSON.stringify(assessment)));
            console.info(`Asset ${assessment.ID} initialized`);
        }
        for (const report of reports) {
            await ctx.stub.putState(report.ID, Buffer.from(JSON.stringify(report)));
            console.info(`Asset ${report.ID} initialized`);
        }
        console.info("============= Success : Initialize Ledger ===========");
    }

    async myAssetExists(ctx, myAssetId) {
        const buffer = await ctx.stub.getState(myAssetId);
        return !!buffer && buffer.length > 0;
    }

    async createAssessment(ctx, AssessmentID, UnitID, UnitName, AssessmentName, Criteria, Achievement) {
        const exists = await this.myAssetExists(ctx, AssessmentID);
        if (exists) {
            throw new Error(`The Assessment: ${AssessmentID} already exists`);
        }
        const assessment = {
            ID: AssessmentID,
            UnitID,
            UnitName,
            AssessmentName,
            Criteria,
            Achievement
        };
        const assessmentBuffer = Buffer.from(JSON.stringify(assessment));
        await ctx.stub.putState(AssessmentID, assessmentBuffer);
        return true;
    }

    async updateAstToStd(ctx, StudentID, NewAssessment) {
        console.info("============= START : Add assessment to Student Detail ===========");
        const studentAsBytes = await ctx.stub.getState(StudentID);
        if (!studentAsBytes || studentAsBytes.length === 0) {
            return false;
        } else {
            const student = JSON.parse(studentAsBytes.toString());
            student.AssessmentIDs = [...student.AssessmentIDs, NewAssessment]; // we have to append
            const buffer = Buffer.from(JSON.stringify(student));
            await ctx.stub.putState(StudentID, buffer);
            return true;
        }
    }

    async get(ctx, ID) {
        console.log("============= Start : Search Ledger ===========");
        const exists = await this.myAssetExists(ctx, ID);
        if (!exists) {
            throw new Error(`The provided ID ${ID} does not exist`);
        }
        const InfoJSON = await ctx.stub.getState(ID);
        console.log("============= End : Search Ledger ===========");
        return InfoJSON.toString();
    }

    async createReport(ctx, ID, StudentID, AssessmentIDs) {
        const exists = await this.myAssetExists(ctx, ID);
        if (exists) {
            throw new Error(`The report: ${ID} already exists`);
        }
        const report = {
            ID,
            StudentID,
            AssessmentIDs,
            State: "Pending",
        };
        const reportBuffer = Buffer.from(JSON.stringify(report));
        await ctx.stub.putState(ID, reportBuffer);
        return true;
    }

    async updateState(ctx, reportID) {
        console.info("============= START : changeCarOwner ===========");
        const reportAsBytes = await ctx.stub.getState(reportID);
        if (!reportAsBytes || reportAsBytes.length === 0) {
            return false;
            //throw new Error(`The Report: ${reportID} does not exist`);
        } else {
            const report = JSON.parse(reportAsBytes.toString());
            report.State = "Approved";
            const buffer = Buffer.from(JSON.stringify(report));
            await ctx.stub.putState(reportID, buffer);
            return true;
        }
    }

    async delete(ctx, ID) {
        const exists = await this.myAssetExists(ctx, ID);
        if (!exists) {
            return false;
        }
        await ctx.stub.deleteState(ID);
    }
}
module.exports = QUTAssessment;