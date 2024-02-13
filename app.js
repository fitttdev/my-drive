const express = require("express"); //Import express module
const app = express();  //create a new express app
const port = 4000;

// ROOT index.html
const path = require("path"); //Import path module which is used to join paths
app.get("/", (_req, res) => { //Route handler for the root path.
  res.sendFile(               //sends index.html as the response using sendFile() method
    path.join(__dirname, "public", "index.html")
  )
});

// Routers
const folderRouter = require('./routers/folder.router');
app.use('', folderRouter);

app.listen(port, () => {
  console.log(`App is listening on: http://localhost:${port}`);
})
