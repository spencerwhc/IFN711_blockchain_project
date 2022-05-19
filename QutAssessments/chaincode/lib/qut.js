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
            ID: "n10837300",
            Name: "Doris Che",
            Degree: "Master of Information Technology",
            Major: "Computer Science",
            AssessmentIDs: ["n10837300_IFN711_22se1_1"]
        }, ];
        const assessments = [{
            ID: "n10837300_IFN711_22se1_1", // unique assessment id belongs to one student
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
        }];
        const reports = [{
            ID: "0001",
            StudentID: "n10837300",
            AssessmentIDs: ["n10837300_IFN711_22se1_1", "n10837300_IFN680_3"]
        }, ];

        for (const student of students) {
            await ctx.stub.putState(student.ID, Buffer.from(JSON.stringify(student)));
            console.info(`Asset ${student.ID} initialized`);
        }
        for (const assessment of assessments) {
            await ctx.stub.putState(assessment.ID, Buffer.from(JSON.stringify(assessment)));
            console.info(`Asset ${assessment.ID} initialized`);
        }

        console.info("============= Success : Initialize Ledger ===========");
    }

    async myAssetExists(ctx, myAssetId) {
        const buffer = await ctx.stub.getState(myAssetId);
        return !!buffer && buffer.length > 0;
    }

    async createAssessment(ctx, AssessmentID, UnitName, unitID, AssessmentName, Criteria, Achievement) {
        console.log(AssessmentID, "AssessmentIDAssessmentID")
        const exists = await this.myAssetExists(ctx, AssessmentID);

        console.log("isExists", exists)
        if (exists) {

            throw new Error(`The Assessment: ${AssessmentID} already exists`);
        }
        const assessment = {
            ID: AssessmentID,
            unitID,
            UnitName,
            AssessmentName,
            Criteria,
            Achievement
        };
        const assessmentBuffer = Buffer.from(JSON.stringify(assessment));
        await ctx.stub.putState(AssessmentID, assessmentBuffer);
        return assessment.toString();
    }

    async createReport(ctx, ID, studentID, AssessmentIDs) {
        const exists = await this.myAssetExists(ctx, ID);
        if (exists) {
            throw new Error(`The report: ${ID} already exists`);
        }
        const report = {
            ID,
            studentID,
            AssessmentIDs
        };
        const reportBuffer = Buffer.from(JSON.stringify(report));
        await ctx.stub.putState(ID, reportBuffer);
        return report.toString();
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

    async updateState(ctx, studentID, newAssessment) {
        console.info("============= START : Add assessment to Student Detail ===========");
        const studentAsBytes = await ctx.stub.getState(studentID);
        if (!studentAsBytes || studentAsBytes.length === 0) {
            return false;
        } else {
            const student = JSON.parse(studentAsBytes.toString());
            student.AssessmentIDs = [...student.AssessmentIDs, newAssessment]; // we have to append
            const buffer = Buffer.from(JSON.stringify(student));
            await ctx.stub.putState(studentID, buffer);
            return true;
        }
    }

    async deleteMyAsset(ctx, ID) {
        const exists = await this.myAssetExists(ctx, ID);
        if (!exists) {
            return false;
        }
        await ctx.stub.deleteState(ID);
    }
}
module.exports = QUTAssessment;