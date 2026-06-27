const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker and bind mount tested third time");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});