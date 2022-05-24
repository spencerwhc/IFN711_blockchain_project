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
        const students = [
            {
                ID: "n10864989",
                Name: "Ho Sze Wong",
                Degree: "Master of Information Technology",
                Major: "Software Development",
                ReportIds: ["R0001", "R0002"],
            },
        ];
        const assessments = [
            {
                ID: "n10864989_IFN711_22se1_1",
                Semester: "1",
                StartDate: "23/05/2022",
                UnitId: "IFN711",
                UnitName: "Industry Project",
                AssessmentName: "Project Plan",
                Criteria: [
                    "Introduction (10%)",
                    "Project Management Activities & Team Contracts (25%)",
                    "Scope,Deliverables,Solution,Delivery & Implmentation Assignment (50%)",
                ],
                Achievement: [
                    "Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content.",
                    "An appropriate PM approach is adopted clearly along with some justification and alignment for the given scope and deliverables.",
                    "Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content.",
                ],
            },
            {
                ID: "n10864989_IFN711_22se1_2",
                Semester: "1",
                StartDate: "04/06/2022",
                UnitId: "IFN711",
                UnitName: "Industry Project",
                AssessmentName: "Reflectioin Assessment",
                Criteria: [
                    "Comprehension of project (60%) ",
                    "Communication and engagement (40%)",
                ],
                Achievement: [
                    "Demonstrates sophisticated reasoning-the ability to break down the pertinent information into component parts and to detect relationships of one part to another and to the whole.",
                    "The nature of the project (or component) and its significance were communicated in a sophisticated fashion.",
                ],
            },
            {
                ID: "n10864989_IFN666_21se2_1",
                Semester: "2",
                StartDate: "16/06/2021",
                UnitId: "IFN666",
                UnitName: "Web and Mobile Application Development",
                AssessmentName: "Client-Side Web Dev with React",
                Criteria: [
                    "Functionality",
                    "Peformance",
                    "UI Design",
                    "Code Quality",
                ],
                Achievement: [
                    "Home/Stocks/Screener page. No direct quote/history page. Search + table + paging + sorting+ date picker + Chart implemented. router used",
                    "Very good structure, modular",
                    "Very good. some color. Good home page.",
                    "Good seperation of style and functions. Components used: axios, Ag-grid, recharts, router, antd and more.",
                ],
            },
            {
                ID: "n10864989_IFN666_21se2_2",
                Semester: "2",
                StartDate: "24/06/2021",
                UnitId: "IFN666",
                UnitName: "Web and Mobile Application Development",
                AssessmentName: "Capstone Project",
                Criteria: [
                    "Front-end Mobile Application Functionality",
                    "Front-end Application Robustness ",
                    "Front-end Application UI Design",
                    "Backend functionality, error responses and application reliability.",
                ],
                Achievement: [
                    "The client side application implements all of the functionality as listed, and is thoroughly professional in its implementation and performance.",
                    "The application is robust, without any noticeable errors and handles service failures and errors gracefully.",
                    "The application looks professional mostly, and the principal use cases are readily executed, though there may be some clumsiness in the workflow. The user generally has little trouble navigating the app.",
                    "The application is robust and executes without noticeable error and handles service failures and errors gracefully. Error conditions are returned and response codes are perfectly according to specification.",
                ],
            },
            {
                ID: "n10864989_IFN662_21se2_1",
                Semester: "2",
                startDate: "12/04/2021",
                UnitId: "IFN662",
                UnitName: "Enterprise Systems and Applications",
                AssessmentName: "Assessment Task 1",
                Criteria: [
                    "Business Elements Diagram and Rationale",
                    "Business Process Model",
                    "UML Class Diagram ",
                ],
                Achievement: [
                    "Your graphical depiction of the business elements diagram was consistently clear, correct, logical and well structured, with all elements consistently and accurately labelled and connected. ",
                    "Your business process model thoroughly and accurately reflected the fulfilment processes effectively",
                    "Your UML class diagram and explanation was consistently clear and logical.",
                ],
            },
            {
                ID: "n10864989_IFN662_21se2_2",
                Semester: "2",
                StartDate: "12/04/2021",
                UnitId: "IFN662",
                UnitName: "Enterprise Systems and Applications",
                AssessmentName: "Assessment Task 2",
                Criteria: [
                    "Configuration",
                    "Bill of Materials",
                    "ERP Extensions",
                ],
                Achievement: [
                    "You configured the required business elements for SHIP BUILDERS in a manner that was consistently clear, correct, and logical.",
                    "You clearly, concisely and consistently articulated your understanding of the bill of materials and related processes.",
                    "You produced an extremely compelling document that clearly, concisely, and accurately detailed why SHIP BUILDERS should invest in BI, SCM and CRM.",
                ],
            },
        ];
        const reports = [
            {
                ID: "R0001",
                StudentID: "n10864989",
                AssessmentIDs: [
                    "n10864989_IFN711_22se1_1",
                    "n10864989_IFN666_21se2_1",
                ],
                Status: "Approved",
                createdDate: "22/05/2022",
            },
            {
                ID: "R0002",
                StudentID: "n10864989",
                AssessmentIDs: [
                    "n10864989_IFN666_21se2_1",
                    "n10864989_IFN662_21se2_2",
                ],
                Status: "Approved",
                createdDate: "24/05/2022",
            },
        ];

        for (const student of students) {
            await ctx.stub.putState(
                student.ID,
                Buffer.from(JSON.stringify(student))
            );
            console.info(`Asset ${student.ID} initialized`);
        }
        for (const assessment of assessments) {
            await ctx.stub.putState(
                assessment.ID,
                Buffer.from(JSON.stringify(assessment))
            );
            console.info(`Asset ${assessment.ID} initialized`);
        }
        for (const report of reports) {
            await ctx.stub.putState(
                report.ID,
                Buffer.from(JSON.stringify(report))
            );
            console.info(`Asset ${report.ID} initialized`);
        }
        console.info("============= Success : Initialize Ledger ===========");
    }

    async myAssetExists(ctx, myAssetId) {
        const buffer = await ctx.stub.getState(myAssetId);
        return !!buffer && buffer.length > 0;
    }

    async createAssessment(
        ctx,
        AssessmentID,
        UnitID,
        UnitName,
        AssessmentName,
        Criteria,
        Achievement,
        StartDate,
        Semester
    ) {
        const exists = await this.myAssetExists(ctx, AssessmentID);
        if (exists) {
            throw new Error(`The Assessment: ${AssessmentID} already exists`);
        }
        const assessment = {
            ID: AssessmentID,
            Semester,
            StartDate,
            UnitID,
            UnitName,
            AssessmentName,
            Criteria,
            Achievement,
        };
        const assessmentBuffer = Buffer.from(JSON.stringify(assessment));
        await ctx.stub.putState(AssessmentID, assessmentBuffer);
        return true;
    }

    async updateReportToStd(ctx, StudentID, reportID) {
        console.info(
            "============= START : Add report to Student Detail ==========="
        );
        const studentAsBytes = await ctx.stub.getState(StudentID);
        if (!studentAsBytes || studentAsBytes.length === 0) {
            return false;
        } else {
            const student = JSON.parse(studentAsBytes.toString());
            student.ReportIds = [...student.ReportIds, reportID]; // we have to append
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

    async createReport(ctx, ID, StudentID, AssessmentIDs, createdDate, Status) {
        const exists = await this.myAssetExists(ctx, ID);
        if (exists) {
            throw new Error(`The report: ${ID} already exists`);
        }
        const report = {
            ID,
            StudentID,
            AssessmentIDs,
            Status,
            createdDate,
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
            report.Status = "Approved";
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
