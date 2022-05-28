// Import libraries
require("dotenv-flow").config({ node_env: process.env.DEPLOYMENT_PLATFORM });
const path = require("path");
const cors = require("cors");
const express = require("express");

// Initialise an Express application
const app = express();

// Configure CORS settings
const WHITELISTED_ORIGINS = ["http://localhost:3000", "http://localhost:8080"];
app.use(cors({ origin: WHITELISTED_ORIGINS, credentials: true }));

// Add body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", require("./routes"));

app.use(express.static(path.join(__dirname, "../student_portal/build")));

// If none of the above matched, render client views
app.get("/*", (_, res) =>
    res.sendFile(path.join(__dirname, "../student_portal/build", "index.html"))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`App server listening on port: ${PORT}`);
});
