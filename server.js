const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// configure using our exported passport function.
// we need to pass the express app we want configured!
// order is important! you need to set up passport
// before you start using it in your routes.
require('./passport')(app);
// Add routes, both API and view
const routes = require("./routes");
app.use(routes);
// Here's a little custom error handling middleware
// that logs the error to console, then renders an
// error page describing the error.
app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error
  })
});
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/passport-examples",
  {
    useMongoClient: true
  }
);

// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
db.User.create({ name: "Admin" })
  .then(function(dbUser) {
    console.log(dbUser);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// Routes

// Route for retrieving all Partner from the db
app.get("/admin/partners", function(req, res) {
  // Find all Notes
  db.Partner.find({})
    .then(function(dbPartner) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbPartner);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for retrieving all Users from the db
app.get("/admin/users", function(req, res) {
  // Find all Users
  db.User.find({})
    .then(function(dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});


// Route for retrieving all Users from the db
app.get("/admin/role", function(req, res) {
  // Find all Users
  db.Role.find({})
    .then(function(dbRole) {
      // If all Users are successfully found, send them back to the client
      res.json(dbRole);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// // Route to get all User's and populate them with their company information and role access
// app.get("/userdetails", function(req, res) {
//   // Find all users
//   db.User.find({})
//     // Specify that we want to populate the retrieved users with any associated notes
//     .populate("partners")
//     .populate("role")
//     .then(function(dbUser) {
//       // If able to successfully find and associate all Users and Notes, send them back to the client
//       res.json(dbUser);
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://heroku_wsl4kwct:1tdue2s77s4noj3hhp6d2sprdk@ds119585.mlab.com:19585/heroku_wsl4kwct");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


