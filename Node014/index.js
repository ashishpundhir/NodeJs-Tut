const express = require('express');


const app = express();
app.set('view engine','ejs');

app.get('',(req,res)=>{
    const user = {
        name : 'Ashish',
        email : 'ashishpundhir@example.com',
        city : 'noida',
        language : ['php','node','express']

    }
    res.render('profile',{user});
})

app.listen(4040);

