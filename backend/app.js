const express=require('express')
const cors=require('cors');
const { db } = require('./db/db');
// const {readdirSync} = require('fs');
const app=express();
const transactionRoutes=require('./routes/transactions');

require('dotenv').config()
const  PORT=process.env.PORT


// //middlewares
app.use(express.json()); //we want our data to be in jSon
app.use(cors({
    origin: 'https://expense-tracker-frontend-ochre.vercel.app',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));


//routes
// readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route)))
app.use('/api/v1', transactionRoutes);

db();

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

// const server=()=>{
//     db();
//     app.listen(PORT,() =>{
//         console.log("Listening to port : ",PORT);
//     })
// }

module.exports=app;