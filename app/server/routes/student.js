// Import libraries
require("express-async-errors");
const router = require("express").Router();
const { getSutudent, getStudentReports } = require("../controller/reports");

/** Health check endpoint */
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const studentInfo = await getSutudent(id);

    res.send(studentInfo);
});

router.get("/:id/reports", async (req, res) => {
    const { id } = req.params;

    const reports = await getStudentReports(id);
    console.log(reports, "testteste");

    res.send(reports);
});

module.exports = router;
