const dbconnect = require("./mongodb");


const insert = async() => {
    const db = await dbconnect();
    const result = await db.insertMany(
        [
            {name:"redmi 11",ram:"6gb",brand:"mi",system:"android",price:10000},
            {name:"redmi 5",ram:"4gb",brand:"mi",system:"android",price:8000}
]);

    if(result.acknowledged){
        console.log("Successfully inseted");
    }
}

insert();