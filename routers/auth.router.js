const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const newUser = await prisma.user.create(
      { data: { ...req.body } }
    )
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Email must exist" });
  }
})

router.post("/login", async (req, res) => {
  try {
    // NOTE: findMany   => [{ id: 1 }]
    //       findUnique = { id: 1 }
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    });

    if (user) {
      res.cookie("_my_drive_session", `some-random-value-${user.id}`)
      res.status(200).json(user);
    } else {
      res.status(400).json({ error: "User must exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
})

module.exports = router;
