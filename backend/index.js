const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const businessRoutes = require("./routes/businessRoutes");
const db = require("./config/db");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/business", businessRoutes);

// Server Port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
