const express = require("express");
const connectDB = require("./config/dbConnect");

require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/list", (req, res) => {
  // res.send("Get All Data");
  res.json({ message: "Get All Data" });
});

// ...............................................run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
