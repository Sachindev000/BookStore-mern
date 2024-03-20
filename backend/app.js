const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
require("./connection/connection");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json(), bookRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
