const dbconnect = require("./mongodb");

const update = async () => {
  let data = await dbconnect();
  let result = await data.updateOne(
    { name: "redmi 14" },
    { $set: { name: "redmi 15" } }
  );
  if (!result.acknowledged) {
    console.log("Failed to update");
  } else if (result.modifiedCount) {
    console.log("Updated Succesfully");
  } else if (result.upsertedCount) {
  }
  console.log(result);
};

update();
