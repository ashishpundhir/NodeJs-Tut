//global module and core module in node js

console.log("ashish"); //global module 

// const fs = require('fs');
//this will get all the function of fs and will save it in 'cons fs' we can also change the name of constant and use the same in the code. 



const gs = require('fs').writeFileSync;
gs('hello.txt', "hello guyz how are you");

