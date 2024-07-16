const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Files');
const likho = fs.writeFileSync;

// for(i=1;i<6;i++){
//     likho(`${dirPath}/hello${i}.txt`, 'a simple file');
// }

fs.readdir(dirPath,(err,item)=>{
    item.forEach((item2)=>{
        console.log("file name is ",item2);
    })
})

