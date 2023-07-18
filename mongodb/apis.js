const express = require("express");
const app = express();
const dbconnect = require("./mongodb");
const mongodb = require('mongodb');

app.use(express.json());

// geting data 
app.get("/", async (req, resp) => {
  let data = await dbconnect();
  let result = await data.find().toArray();
  resp.send({
    result,
  });
});

// insert new data in database through api
app.post("/", async (req, resp) => {
  console.log(req.body);
  let data = dbconnect();
  let result = (await data).insertOne(req.body);
  resp.send(req.body);
});

// updating data using api

app.put('/:name',async(req,resp)=>{
    let data = dbconnect();
    let result = (await data).updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    resp.send(req.body);
})

// delete data through api
app.delete('/:id', async(req,resp)=>{
    let data = await dbconnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send(result);
})

app.listen(5000);
