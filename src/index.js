
const express=require('express');
const { json } = require('express/lib/response');
const app=express();
const morgan=require('morgan');

//setings
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2)



app.use(morgan('dev'));
//routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies.Js'))

// setting the app in order to allow received json data 
app.use(express.json());

// allow to received data since forms html, js and css
app.use(express.urlencoded({extended:false}));


// starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});
