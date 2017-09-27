const chalk = require("chalk");
const express = require("express");
const app = express();

/////////////////////////// USE /////////////////////////////////////

app.use("/special/", function(req, res, next) {
  console.log("\nYou reached the special area.");
  //res.send(req.url);
  res.send('hello everybody in SPECIAL section');
  next();
});

app.use(function(req, res, next) {
  console.log('\nGET ', req.url);
  //console.log(chalk.red("Time: %d", Date.now()));
  console.log(req.method, req.path, res.statusCode);
  next();
});

//////////////////////////// GET ////////////////////////////////////

app.get("/", function(req, res) {
  res.send("Welcome to my MAIN webpage...");
});

app.get("/news", function(req, res) {
  res.send("This is a NEWS page...");
});

app.listen(3000, function() {
  //console.log('server is listening...');
  process.stdout.write(chalk.blue("Server is listening..."));
});
