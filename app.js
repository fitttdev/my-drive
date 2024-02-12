const express = require("express");
const app = express();
const port = 4000;

// ROOT index.html
const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  )
})

app.listen(port, () => {
  console.log(`App is listening on: http://localhost:${port}`);
})
