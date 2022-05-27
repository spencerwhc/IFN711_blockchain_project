// Import libraries
require("express-async-errors");
const router = require("express").Router();
const {
    getSkillReport,
    addNewReport,
    shareReport,
} = require("../controller/reports");

/** Report endpoint */
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const report = await getSkillReport(id);

    res.send(report);
});

router.post("/", async (req, res) => {
    const response = await addNewReport(req.body);
    res.send(response);
});

router.post("/share", async (req, res) => {
    const response = await shareReport(req.body);
    res.send(response);
});

module.exports = router;
