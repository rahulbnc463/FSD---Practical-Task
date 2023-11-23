const express = require("express");
const connectDB = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");
require("dotenv").config();

// ..................connect with database call
connectDB();
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing
app.use(express.json());

app.use("/api/user", authRouter);

// ...............................................run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
