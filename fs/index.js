const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'files');


fs.writeFileSync(dirpath+"/docs.txt","this is file system");

for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+"/readme"+i+".txt", "this is readme file for "+i+"")
}

fs.readdir(dirpath,(error,file )=> {
    file.forEach((f)=>{
        console.log(f);
    })
})