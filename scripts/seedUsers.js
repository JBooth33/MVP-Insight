const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/admin/users"
);

const userSeed = [
  {
    companyID: "1",
    firstName: "Admin",
    lastName: "Admin",
    title: "Admin",
    role: "MVP Team Member",
    emailAddress:"kimberly@mvp.com",
    phoneNumber:"8883905320",
    password:"1234567890",
    status:"active",
    date: new Date(Date.now())
  },
  {
    companyID: "66529932",
    firstName: "Rebecca",
    lastName: "Owen",
    title: "Project Manager",
    role: "Supply Chain Management",
    emailAddress:"rebecca.owne@bain.com",
    phoneNumber:"6175722000",
    password:"1234567890",
    status:"pending",
    date: new Date(Date.now())
  },
  {
    companyID: "998574152",
    firstName: "Michelle",
    lastName: "Penton",
    title: "Warehouse Specialist",
    role: "Warehouse",
    emailAddress:"m.penton@walmart.com",
    phoneNumber:"6123414027",
    password:"1234567890",
    status:"pending",
    date: new Date(Date.now())
  },
  {
    companyID: "10850450",
    firstName: "Adam",
    lastName: "Bose",
    title: "Accountant",
    role: "Accounting",
    emailAddress:"adam.bose@rockwell.com",
    phoneNumber:"9135772505",
    password:"1234567890",
    status:"pending",
    date: new Date(Date.now())
  },
  {
    companyID: "11555941",
    firstName: "Nick",
    lastName: "Ruso",
    title: "Logistics Specialist",
    role: "Logistics",
    emailAddress:"nick.ruso@amazon.com",
    phoneNumber:"8662161072",
    password:"1234567890",
    status:"pending",
    date: new Date(Date.now())
  },
  {
    companyID: "10850450",
    firstName: "Nate",
    lastName: "Smith",
    title: "Carrier Relations Manager",
    role: "Carrier",
    emailAddress:"nate.smith@rockwell.com",
    phoneNumber:"9135772501",
    password:"1234567890",
    status:"pending",
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.profile.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
