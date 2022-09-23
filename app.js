const express = require('express');
const app = express();
const ExpressError = require('./expressError')

const f = require('./functions')


// MEAN
app.get('/mean/:num',(req,res,next)=>{
    // CHECK IF STRING CONTAINS A NUMBER .. I THINK THIS CODE IS WRONG
    if( req.params.num!=Number){
        throw new ExpressError(`{req.params.num} is not a number`,400)
    }
    else if(!req.params.num){
        throw new ExpressError(`numbers are required!`,400)
    }
    let num = req.params.num.split(',');
    num = Array.from(String(num));

    let result = {
        operation: "mean",
        value: f.mean(num)
    }

    // WHY IS MY CODE NOT HITTING THIS PART???
    res.send(`your numbers are : {num}. average is `+result);



    // res.send(req.headers)
});

// MEDIAN
app.get('/median/:num',(req,res,next)=>{
    if( req.params.num!=Number){
        throw new ExpressError(`{req.params.num} is not a number`,400)
    }
    else if(!req.params.num){
        throw new ExpressError(`numbers are required!`,400)
    }
    let num = req.params.num.split(',');
    num = Array.from(String(num));

    let result = {
        operation: "median",
        value: f.median(num)
    }

    res.send(`your numbers are : {num}. median is `+result);
});

// MODE
app.get('/mode/:num',(req,res,next)=>{
    if( req.params.num!=Number){
        throw new ExpressError(`{req.params.num} is not a number`,400)
    }
    else if(!req.params.num){
        throw new ExpressError(`numbers are required!`,400)
    }
    let num = req.params.num.split(',');
    num = Array.from(String(num));

    let result = {
        operation: "mode",
        value: f.mode(num)
    }

    res.send(`your numbers are : {num}. mode is `+result);
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

