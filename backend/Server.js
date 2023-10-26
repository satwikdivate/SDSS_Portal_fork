const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
const userRouter=require("./router/userRouter");
app.use(bodyParser.json());


app.listen(5000,(req,res)=>{
  console.log("Conneted at 5000")
})

app.use("/v1/user",userRouter);


















