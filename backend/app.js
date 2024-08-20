const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
const app=express()
const transactionRoutes=require('./routes/transactions');

require('dotenv').config()
const  PORT=process.env.PORT


// //middlewares
app.use(express.json()); //we want our data to be in jSon
app.use(cors());


//routes
// readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route)))
app.use('/api/v1', transactionRoutes);


const server=()=>{
    db();
    app.listen(PORT,() =>{
        console.log("Listening to port : ",PORT);
    })
}

server();
module.exports=app;