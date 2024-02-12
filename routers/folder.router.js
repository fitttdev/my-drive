const express = require("express");
const router = express.Router();

// Folder CRUD
// POST /folders
router.post("/folders", (req, res) => {
  console.log("BODY", req.body);
  // res.cookie("_suzal_sesiion", "ksdnvlsdnvldsvnlsjdnvsdnvjldsnvjsdlnvsdjlvjs")
  res.status(201).json({ "msg": "Folder creation successful" });
});

// PUT /folders/:id
router.put("/folders/:id", (req, res) => {
  res.status(200).json({ "msg": "Folder updation successful" });
})

// GET /folders
router.get("/folders", (req, res) => {
  res.status(200).json(
    { "myFolders": ["Folder 1", "Folder 2"] }
  );
})

// GET /folder/:id
router.get("/folders/:id", (req, res) => {
  res.status(200).json(
    { "folder": "Folder 1" }
  );
})

// DELETE /folders/:id
router.delete("/folders/:id", (req, res) => {
  res.status(200).json({ "msg": "Folder deletion successful" });
})

module.exports = router;  