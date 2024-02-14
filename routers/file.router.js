const express = require('express');
const router = express.Router();

//CRUD operations for files

//Post /files
router.post('/files', (req, res) => {
    res.status(201).json("msg: File creation successful");
})

//Put /files
router.put('/files', (req, res) => {
    res.status(200).json("msg: File updated successfully")
})

//Get /files
router.get('/files', (req, res) => {
    res.status(200).json("msg: File retrieved successfully")
})

//Get specific /files
router.get('/files/:id', (req, res) => {
    res.status(200).json(["msg: Specific File retrieved successfully with id " + req.params.id])
})

//Delete /files
router.delete('/files/:id', (req, res) => {
    res.status(200).json(["msg: File deleted successfully", req.params.id])
})

module.exports = router;