const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const colors = require("colors");

const cors = require("cors");
require("dotenv").config();

const appRoutes = require("./routes/appRoutes");
const { notFound, errorHandler } = require("./middlewares/middlewares");

// Connect to database
const connectDB = require("./config/db");
connectDB();
// Initialize express app
const app = express();

// Middleware initialization
app.use(morgan("common")); // Logging
app.use(helmet()); // Security
app.use(cors()); // Enable all cors request
app.use(express.json({ extended: false }));
// JSON parsing

// Routes
app.use("/", appRoutes);

app.use(notFound);
app.use(errorHandler);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
