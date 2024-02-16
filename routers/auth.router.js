const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: { ...req.body }
    });
    const randomValue = 'some-random-value';
    res.cookie("_my_drive_session", `${randomValue}-${newUser.id}`);

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating folder:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
