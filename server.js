
var express = require("express");
var bodyParser = require("body-parser");
var MethodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(MethodOverride('X-HTTP-Method-Override'));

var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
