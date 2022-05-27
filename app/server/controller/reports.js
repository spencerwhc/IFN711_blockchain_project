const {
    getReport,
    getStudent,
    getAssessment,
    addReport,
    addReportToStudent,
} = require("../services/blockchain");

const { sendEtherealEmail } = require("../services/nodemail");

const getSkillReport = async (reportId) => {
    const report = await getReport(reportId);

    const { AssessmentIDs } = JSON.parse(report);

    let AssIds;
    if (typeof AssessmentIDs === "string") AssIds = JSON.parse(AssessmentIDs);
    else AssIds = AssessmentIDs;

    const assessments = await Promise.all(
        AssIds.map(async (id) => {
            const assessment = await getAssessment(id);

            return JSON.parse(assessment);
        })
    );
    return assessments;
};

const getSutudent = async (studentId) => {
    try {
        const studentInfo = await getStudent(studentId);
        return studentInfo;
    } catch (error) {
        console.log(error);
    }
};

const getStudentReports = async (studentId) => {
    const studentInfo = await getStudent(studentId);
    const { ReportIds } = JSON.parse(studentInfo);

    const reports = await Promise.all(
        ReportIds.map(async (id) => {
            const assessment = await getReport(id);
            return JSON.parse(assessment);
        })
    );

    return reports;
};

const addNewReport = async (data) => {
    const { StudentID, ID } = data;
    try {
        await addReport(data);
        await addReportToStudent(StudentID, ID);
    } catch (error) {
        console.log(error);
        return error;
    }
};

const shareReport = async (data) => {
    const { email } = data;

    const URL = await sendEtherealEmail(email);

    return URL;
};

module.exports = {
    getSkillReport,
    getSutudent,
    getStudentReports,
    addNewReport,
    shareReport,
};
