// ---Package Imports
const express=require("express");
require('dotenv').config();

// ---Variables
const app=express();
const PORT=process.env.PORT;

// ---Api's

//Home Route
app.get("/",(req,res)=>{
    return res.send("Server Running");
})





// ---Server
app.listen(PORT,()=>{
    console.log(`Server is running on:https`);
})