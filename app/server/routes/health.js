// Import libraries
require('express-async-errors');
const router = require('express').Router();

/** Health check endpoint */
router.get('/', async (_, res) =>
    res.send({ healthy: true, env: process.env.DEPLOYMENT_PLATFORM })
);

module.exports = router;
