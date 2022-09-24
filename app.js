const express = require('express');
const app = express();
const ExpressError = require('./expressError')

const f = require('./functions')


// MEAN
app.get('/mean/:nums',(req,res,next)=>{
    console.log(req.params.nums);
    let nums = req.params.nums.split(',').map(Number);


    if(nums.find(isNaN) !== undefined){
        throw new ExpressError(`${req.params.nums} must contain only numbers`, 400)
    }

    let result = {
        operation: "mean",
        value: f.mean(nums)
    }

    console.log(result);

    res.send(`your numbers are: ${nums}. average is ${result.value}`);

});

// MEDIAN
app.get('/median/:nums',(req,res,next)=>{
    let nums = req.params.nums.split(',').map(Number);

    if(nums.find(isNaN) !== undefined){
        throw new ExpressError(`${req.params.num} is not a number`,400)
    }
    else if(!req.params.nums){
        throw new ExpressError(`numbers are required!`,400)
    }

    let result = {
        operation: "median",
        value: f.median(nums)
    }

    res.send(`your numbers are : ${nums}. median is ${result.value}`);
});



// MODE
app.get('/mode/:nums',(req,res,next)=>{
    let nums = req.params.nums.split(',').map(Number);

    if(nums.find(isNaN) !== undefined){
        throw new ExpressError(`${req.params.nums} must contain only numbers`, 400)
    }
    else if(!req.params.nums){
        throw new ExpressError(`numbers are required!`,400)
    }

    let result = {
        operation: "mode",
        value: f.mode(nums)
    }

    res.send(`your numbers are : ${nums}. mode is ${result.value}`);
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

