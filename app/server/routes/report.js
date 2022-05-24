// Import libraries
require("express-async-errors");
const router = require("express").Router();
const { getSkillReport } = require("../controller/reports");

/** Report endpoint */
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const report = await getSkillReport(id);

    res.send(report);
});

module.exports = router;
