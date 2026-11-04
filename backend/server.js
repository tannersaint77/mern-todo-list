// Entry point of the backend (A1, A2, A6)
require("dotenv").config(); // load variables from .env into process.env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();

// A6: allow requests only from the frontend's address, not every origin
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));

// A1: parse JSON request bodies
app.use(express.json());

// All task routes live under /api/tasks
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

// A2: connect to MongoDB using the connection string from .env, then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
