const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const currentUser = async (req, res, next) => {
  console.log("NNNNNININN", req.session.userId)

  if (!(req.session && req.session.userId)) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  console.log("NNNNNININN", req.session.userId)
  const userId = req.session.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    // Attach the user to the request object
    req.user = user;
    next();
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = currentUser;
