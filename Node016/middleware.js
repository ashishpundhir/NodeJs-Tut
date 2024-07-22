module.exports = reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('what is your age mention');

    }
    else if(req.query.age<18){
        res.send(`your age is ${req.query.age} , And this website is only for 18 or 18+ people`);

    }

    else{
        next();}
   
}
