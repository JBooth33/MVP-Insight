const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/admin/partners"
);

const partnersSeed = [
  {
    companyID: 1,
    companyName: "MVP Logistics",
    address1:"10205 10th Ave N",
    address2:"",
    city:"Plymouth",
    state:"Minnesota",
    zip: 55441,
    primaryContact:"Kimberly Maturo-Hilt",
    companyPhoneNumber: 8883905320,
    status:"pending" ,
    date: new Date(Date.now())
  },
  {
    companyID: 66529932,
    companyName: "Bain & Company, Inc.",
    address1:"131 Dartmouth Street",
    address2:"",
    city:"Boston",
    state:"Massachusetts",
    zip: 02116,
    primaryContact:"Rebecca Owen",
    companyPhoneNumber: 6175722000,
    status:"pending" ,
    date: new Date(Date.now())
  },
  {
    companyID: 998574152,
    companyName: "Walmart",
    address1:"800 Nicollet Mall",
    address2:"#2690",
    city:"Minneapolis",
    state:"Minnesota",
    zip: 55402,
    primaryContact:"Michelle Penton",
    companyPhoneNumber: 6123414027,
    status:"pending" ,
    date: new Date(Date.now())
  },
  {
    companyID: 10850450,
    companyName: "Rockwell Automation",
    address1:"8047 Bond St",
    address2:"",
    city:"Lenexa",
    state:"Kansas",
    zip: 66214,
    primaryContact:"Mary Maxwell",
    companyPhoneNumber: 9135772500,
    status:"pending" ,
    date: new Date(Date.now())
  },
  {
    companyID: 10850451,
    companyName: "Rockwell Automation",
    address1:"651 Campus Drive",
    address2:"",
    city:"New Brighton",
    state:"Minnesota",
    zip: 55112,
    primaryContact:"Paul Black",
    companyPhoneNumber: 6126434400,
    status:"pending" ,
    date: new Date(Date.now())
  },
  {
    companyID: 11555941,
    companyName: "Amazon Fulfillment Center",
    address1:"24208 San Michele",
    address2:"",
    city:"Moreno Valley",
    state:"California",
    zip: 92551,
    primaryContact:"Jason Frost",
    companyPhoneNumber: 8662161072,
    status:"pending" ,
    date: new Date(Date.now())
  }, 
];

db.Partner
  .remove({})
  .then(() => db.Partner.profile.insertMany(partnersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
