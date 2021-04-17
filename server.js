const express = require("express");
const mongoose = require("mongoose");

const app = express();


const PORT= process.env.port|| 3001;

const dotenv = require("dotenv");
const morgan = require("morgan");


dotenv.config()
 //// MIDDLEWARE////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan("common"))

app.get("/",(req,res)=>){
  res.send("welcome!!!")
}

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/MY-SOCIAL-API', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});



// Use this to log mongo//
mongoose.set('debug', true);




app.listen(3301,() =>{
    console.log("we are working here!!!")
})