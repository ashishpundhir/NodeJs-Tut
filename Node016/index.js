const express = require('express');
const reqFilter = require('./middleware');


const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('hyello');

})

app.get('/home', reqFilter, (req,res)=>{
    res.send('welcome brother');

})
route.get('/contact', reqFilter, (req,res)=>{
    res.send('welcome brother contact page');

})

route.get('/about', reqFilter, (req,res)=>{
    res.send('welcome brother about page');

})

app.use('/',route);
app.listen(4040);