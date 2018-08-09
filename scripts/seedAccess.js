const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/roles"
);

const roleSeed = [
  {
    role: "MVP Team Member",
    news: 1,
    request_quote: 1,
    tracking_shipment: 1,
    create_delivery: 1,
    wms_app: 1,
    ltl_app: 1,
    calendar: 1,
    invoices: 1
  },
  {
    role: "Warehouse",
    news: 1,
    request_quote: 0,
    tracking_shipment: 0,
    create_delivery: 0,
    wms_app: 1,
    ltl_app: 0,
    calendar: 0,
    invoices: 0
  },
  {
    role: "Logistic",
    news: 1,
    request_quote: 1,
    tracking_shipment: 1,
    create_delivery: 0,
    wms_app: 0,
    ltl_app: 1,
    calendar: 0,
    invoices: 0
  },
  {
    role: "Carrier",
    news: 1,
    request_quote: 0,
    tracking_shipment: 0,
    create_delivery: 1,
    wms_app: 0,
    ltl_app: 0,
    calendar: 0,
    invoices: 0
  },
  {
    role: "Supply Chain Management",
    news: 1,
    request_quote: 1,
    tracking_shipment: 1,
    create_delivery: 0,
    wms_app: 1,
    ltl_app: 1,
    calendar: 0,
    invoices: 1
  },
  {
    role: "Supply Chain Specialist",
    news: 1,
    request_quote: 1,
    tracking_shipment: 1,
    create_delivery: 0,
    wms_app: 1,
    ltl_app: 1,
    calendar: 0,
    invoices: 0
  },
  {
    role: "Accounting",
    news: 1,
    request_quote: 0,
    tracking_shipment: 0,
    create_delivery: 0,
    wms_app: 0,
    ltl_app: 0,
    calendar: 0,
    invoices: 1
  },
  {
    role: "TT Access",
    news: 1,
    request_quote: 0,
    tracking_shipment: 0,
    create_delivery: 1,
    wms_app: 0,
    ltl_app: 0,
    calendar: 1,
    invoices: 0
  },
];

db.Role
  .remove({})
  .then(() => db.Role.access.insertMany(roleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
