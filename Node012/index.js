const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});

app.get('/index2',(req,res)=>{
    res.sendFile(`${publicPath}/index2.html`);
});

app.get('/index3',(req,res)=>{
    res.sendFile(`${publicPath}/index3.html`);
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`);
});
app.listen(4040);