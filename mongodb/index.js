const dbconnect = require("./mongodb");

// using async and await for promiss data
// async function getData() {
//   //connect to client it will return promiss
//   let result = await client.connect();
//   // tell for data
//   let db = result.db("e-comm");
//   let collection = db.collection("products");
//   let resp = await collection.find({}).toArray()
//   console.log(resp);
// }

// getData();

// second and modern way

// dbconnect().then((resp) => {
//   resp
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray();
    console.log(data);
}
main();
