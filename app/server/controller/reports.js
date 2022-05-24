const { getReport, getStudent } = require("../services/Assessment");

const getSkillReport = async (reportId) => {
    try {
        const report = await getReport(reportId);
        return report;
    } catch (error) {
        console.log(error);
    }
};

const getSutudent = async (studentId) => {
    console.log(studentId);
    try {
        const studentInfo = await getStudent(studentId);
        return studentInfo;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getSkillReport,
    getSutudent,
};

// // Initial data for a test
// const std = {
//     ID: "n10837353",
//     Name: "Yena Park",
//     Degree: "Master of Information Technology",
//     Major: "Computer Science",
//     AssessmentIDs: ["n10837353_IFN711_22se1_1", "n10837353_IFN666_21se1_2"],
// };
// const rpt = {
//     ID: "0002",
//     StudentID: "n10837353",
//     AssessmentIDs: ["n10837353_IFN711_22se1_1", "n10837353_IFN666_21se1_2"],
//     Status: "Pending",
// };
// // New mock data for a test
// const ast = {
//     ID: "n10837353_IFN680_21se2_22",
//     UnitId: "IFN680_21se2_1",
//     UnitName: "Artificial Intelligent",
//     AssessmentName: "Sokovan Programming",
//     Criteria: ["Implementation (60%)", "Report (40%)"],
//     Achievement: [
//         "The overall level of functionality successfully implemented",
//         "The robustness of the application",
//     ],
// };

// For test
// getStudent(std);
// addAssessment(ast, std); //showing in the command looks str inside str but you can get the object from the front-end in this way

// now get is included in add
// getAssessment(ast);

// we can include get to display here too
// addReport(rpt);

// we can include get to display here too
// approveReport(rpt);
// getReport("0001");