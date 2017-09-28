const chalk = require("chalk");
const morgan = require("morgan");
const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const path = require("path");
const app = express();

////////////////////////// NUNJUCKS ////////////////////////////////

const locals = {
  title: "An Example",
  secondTitle: "Really, it is a very cool Example",
  people: [{ name: "Gandalf" }, { name: "Frodo" }, { name: "Hermione" }],
  things: [
    { property: "Car" },
    { property: "Boat" },
    { property: "Plane" },
    { property: "Train" }
  ]
};

const people = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];

app.set("view engine", "html");
app.engine("html", nunjucks.render);
nunjucks.configure("views", { noCache: true });

/////////////////////////// USE /////////////////////////////////////

app.use('/', routes);

app.use(express.static('public'))

app.use("/special/", function(req, res, next) {
  console.log("\nYou reached the special area.");
  //res.send(req.url);
  res.send("hello everybody in SPECIAL section");
  next();
});

// app.use(function(req, res, next) {
//   console.log("\nGET ", req.url);
//   //console.log(chalk.red("Time: %d", Date.now()));
//   console.log(req.method, req.path, res.statusCode);

// //   nunjucks.render("index.html", locals, function(err, output) {
// //     console.log(output);
// //   });
//   next();
// });

//////////////////////////// GET ////////////////////////////////////

// app.get('/stylesheets/style.css', function(req, res, next){
//     // ALL THE SAME:
//     //res.sendFile('twitter-js/public/stylesheets/style.css');
//     //res.sendFile('/Users/Oleksii/Fullstack/twitter-js/public/stylesheets/style.css');
//     //res.sendFile('~/public/stylesheets/style.css');
//     res.sendFile(path.join(__dirname,'twitter_js','../public','/stylesheets/style.css'));
//     //res.sendFile('/stylesheets/style.css', {root: path.join(__dirname, '../public')});
// });


// app.get("/", function(req, res) {
//   //res.send("Welcome to my MAIN webpage...");
//   res.render("index", locals);
//   //res.render("index", { title: "Hall of Fame", people: people });
// });

// app.get("/news", function(req, res) {
//   res.send("This is a NEWS page...");
// });

////////////////////////// LISTEN //////////////////////////////////

app.listen(3000, function() {
  process.stdout.write(chalk.blue("Server is listening..."));
});
