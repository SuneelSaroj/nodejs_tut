const { MongoClient } = require("mongodb");

// url connection
const url = "mongodb://0.0.0.0:27017";
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    let db = result.db("e-comm");
    let collection = db.collection("products");
  
    return collection;
  }
  
  module.exports = dbconnect;