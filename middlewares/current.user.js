const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const currentUser = async (req, res, next) => {
  const sessionCookie = req.headers._my_drive_session;
  if (!sessionCookie) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  // some_random_value-2 => ["some_random_value", 2]
  const userId = sessionCookie.split('-')[1];

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
