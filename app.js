const express = require("express");
const app = express();
const port = 4000;

// ROOT index.html
const path = require("path");
app.get("/", (_req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "index.html")
  )
});
// Folder CRUD

// POST /folders
app.post("/folders", (req, res) => {
  // res.cookie("_suzal_sesiion", "ksdnvlsdnvldsvnlsjdnvsdnvjldsnvjsdlnvsdjlvjs")
  res.status(201).json({ "msg": "Folder creation successful" });
});

// PUT /folders/:id
app.put("/folders/:id", (req, res) => {
  res.status(200).json({ "msg": "Folder updation successful" });
})

// GET /folders
app.get("/folders", (req, res) => {
  res.status(200).json(
    { "myFolders": ["Folder 1", "Folder 2"] }
  );
})

// GET /folder/:id
app.get("/folders/:id", (req, res) => {
  res.status(200).json(
    { "folder": "Folder 1" }
  );
})

// DELETE /folders/:id
app.delete("/folders/:id", (req, res) => {
  res.status(200).json({ "msg": "Folder deletion successful" });
})

app.listen(port, () => {
  console.log(`App is listening on: http://localhost:${port}`);
})
