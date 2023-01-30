const express=require('express');
const app=express();
const morgan=require('morgan');

//starting the server
app.use(morgan('dev'));


app.listen(3000, ()=>{
    console.log('Server on port ${3000}');
});
