const express = require('express');
const app = express();

const restaurantsRouter = require('./routes/restaurants');
const port = process.env.PORT || 8000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Route
app.use('/api/restaurants',restaurantsRouter);
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to requrest on port ${port}`);
});