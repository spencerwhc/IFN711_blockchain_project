// Import libraries
require("express-async-errors");
const router = require("express").Router();
const { getSutudent } = require("../controller/reports");

/** Health check endpoint */
router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const studentInfo = await getSutudent(id);

    res.send(studentInfo);
});

module.exports = router;
