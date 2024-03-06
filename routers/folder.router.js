const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new folder
router.post("/folders", async (req, res) => {
  try {
    const createdFolder = await prisma.folder.create({
      data: { userId: req.userInfo.id, ...req.body }
    });
    res.status(201).json(createdFolder);
  } catch (error) {
    console.error('Error creating folder:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update an existing folder
router.put("/folders/:id", async (req, res) => {
  const folderId = parseInt(req.params.id);
  try {
    const updatedFolder = await prisma.folder.update({
      where: {
        id: folderId
      },
      data: {
        // Add your folder update data here based on your schema
      }
    });
    res.status(200).json(updatedFolder);
  } catch (error) {
    console.error('Error updating folder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all folders
router.get("/folders", async (req, res) => {
  try {
    const folders = await prisma.folder.findMany();
    res.status(200).json(folders);
  } catch (error) {
    console.error('Error retrieving folders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get specific folder by ID
router.get("/folders/:id", async (req, res) => {
  const folderId = parseInt(req.params.id);
  try {
    const folder = await prisma.folder.findUnique({
      where: {
        id: folderId
      }
    });
    res.status(200).json(folder);
  } catch (error) {
    console.error('Error retrieving specific folder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a folder by ID
router.delete("/folders/:id", async (req, res) => {
  const folderId = parseInt(req.params.id);
  try {
    await prisma.folder.delete({
      where: {
        id: folderId
      }
    });
    res.status(200).json({ message: 'Folder deleted successfully' });
  } catch (error) {
    console.error('Error deleting folder:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
