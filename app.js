const express = require("express"); //Import express module
const app = express();  //create a new express app.

const bodyParser = require("body-parser");
const currentUser = require('./middlewares/current.user');
const demo = require('./middlewares/demo');
const redisClient = require('./utils/redis.client');
const cookieParser = require("cookie-parser");


const port = 4000;

// Middlewares 
app.use(bodyParser.json());
app.use(demo);
app.use(cookieParser()); 

// ROOT index.html
const path = require("path"); //Import path module which is used to join paths
app.get("/", (_req, res) => { //Route handler for the root path.
  res.sendFile(               //sends index.html as the response using sendFile() method.
    path.join(__dirname, "public", "index.html")
  )
});

// Routers
const authRouter = require('./routers/auth.router');
app.use('', authRouter);

app.use(currentUser); //Middleware

const folderRouter = require('./routers/folder.router');
app.use('', folderRouter);

const fileRouter = require('./routers/file.router');
app.use('', fileRouter);

app.listen(port, () => {
  console.log(`App is listening on: http://localhost:${port}`);
})

process.on('SIGINT', () => {
  redisClient.quit();
  process.exit();
});
