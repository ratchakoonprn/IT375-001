const express = require('express');
const logger = require('./middleware/logger');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

const restaurantsRouter = require('./routes/restaurants');
const port = process.env.PORT || 8000;


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// Custom Middleware
app.use(logger);

// view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Route
app.use('/api/restaurants',restaurantsRouter);
app.use('/',indexRouter);

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to requrest on port ${port}`);
});