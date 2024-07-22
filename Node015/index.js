const express = require('express');
const app = express();

const reqFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send('what is your age mention');

    }
    else if(req.query.age<18){
        res.send(`your age is ${req.query.age} , And this website is only for 18 or 18+ people`);

    }

    else{
        res.send(`<h1>your age is ${req.query.age} , And you are eligible for this website</h1>`);

    }
  //ashish
}


app.use(reqFilter);

app.get('',(req,res)=>{
    res.send('working');

})
app.listen(4040);