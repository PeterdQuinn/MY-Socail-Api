const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dotenv = require("dotenv");


dotenv.config()



app.listen(8800,() =>{
    console.log("we are working here!!!")
})