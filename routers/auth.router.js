const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const newUser = await prisma.user.create(
      { data: { ...req.body } }
    )
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Email must exist" });
  }
})

module.exports = router;
