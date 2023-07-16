const express = require("express");

const app = express();

// this is home routes
app.get("", (req, res) => {
  res.send(`<h1>This is home page</h1>`);
});

// this is about routes
app.get("/about", (req, res) => {
  res.send(`<h1>This is about page</h1>
  <button>click</button>
  `);
});

// sending json data

app.get("/emp", (req, res) => {
  res.send([
    {
      name: "suneel saroj",
      mobile: "7068209338",
      address: "shalimar bagh delhi",
    },
    {
      name: "anil saroj",
      mobile: "9975851238",
      address: "smiliyan jaunpur",
    },
  ]);
});

app.listen(5000);
