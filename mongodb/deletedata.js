const dbconnect = require("./mongodb");

const deleteData = async()   => {
    let data = await dbconnect();
    let result = await data.deleteMany({
        name:"redmi 5"
    })
    console.log(result);
}
deleteData();