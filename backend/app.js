const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
const app=express()

require('dotenv').config()
const  PORT=process.env.PORT


// //middlewares
app.use(express.json()); //we want our data to be in jSon
app.use(cors());



const server=()=>{
    db();
    app.listen(PORT,() =>{
        console.log("Listening to port : ",PORT);
    })
}

server();