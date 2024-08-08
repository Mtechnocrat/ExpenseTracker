const express=require('express')
const cors=require('cors');
const app=express()

require('dotenv').config()
const  PORT=process.env.PORT


// //middlewares
app.use(express.json()); //we want our data to be in jSon
app.use(cors());


const server=()=>{

    console.log('Listening to port:',PORT);
}

server();