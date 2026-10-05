const express = require('express');
const cors = require('cors');
 require('dotenv').config();

 const app = express();

 const PORT = process.env.PORT || 5000

 // Middleware

 app.use(cors());
 app.use(express.json());

 // Health Check route

 app.get('/', (req,res)=>{
    res.json({
        success:true,
        message:"TaskFlow API is running",
    });
 });

 // Start server

 app.listen(PORT, ()=>{
    console.log(`TaskFlow API is running on the port ${PORT}`);
 })