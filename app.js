const express = require('express');
const app = express();
const ExpressError = require('./expressError')

const f = require('./functions')

app.get('/mean/:num',(req,res,next)=>{
    if(req.params.num!=Number){
        throw new ExpressError(`{req.params.num} is not a number`,400)
    }
    else if(!req.params.num){
        throw new ExpressError(`numbers are required!`,400)
    }
    const num = req.params.num;
    let result = {
        operation: "mean",
        value: f.mean(num)
    }
    res.send(`your numbers are : {num}. average is `+result);

    // res.send(req.headers)
});

app.get('/median/:num',(req,res,next)=>{
    res.send('this is a median page!')
});

app.get('/mode/:num',(req,res,next)=>{
    console.log('mode')
});

// error handling 
app.use((req,res,next)=>{
    const e = new ExpressError("Not Found",404)
    next(e);
});



app.use((error,req,res,next)=>{
    res.status(error.status||500)

    return res.json(
        {
            error: error,
            message: error.message
        });
});



// app.listen needs to always be at the very bottom
app.listen(3000, ()=>{
    console.log('App on port 3000')
})

