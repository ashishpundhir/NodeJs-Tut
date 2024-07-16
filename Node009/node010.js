const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'Files');
const filePath = `${dirPath}/file1.txt`;

//for create the file
// fs.writeFileSync(`${dirPath}/file1.txt`,'the file creator is Ashish Pundhir');



//for read file
// fs.readFile(filePath,(err,item)=>{
//  console.log(item);
// })



//for appand file
// fs.appendFile(filePath,' and he is the student of lpu',(err)=>{
//    if(!err) console.log("file is updated");
// });


// for rename

// fs.rename(filePath,`${dirPath}/fruits.txt`,(err)=>{
//     if(!err) console.log('file is updated');
// })


//for delete

// fs.unlink(`${dirPath}/fruits.txt`,(err)=>{
//     if(!err) console.log(`file is deleted`);
// })
