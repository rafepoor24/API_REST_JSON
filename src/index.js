
const express=require('express');
const { json } = require('express/lib/response');
const app=express();
const morgan=require('morgan');

//setings
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2)



app.use(morgan('dev'));


// allow to received data since forms html, js and css
app.use(express.urlencoded({extended:false}));

// setting the app in order to allow received json data 
app.use(express.json());


//routes
app.use('/api/users',require('./routes/users'))
app.use('/api/movies',require('./routes/movies.Js'))


// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
