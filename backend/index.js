const express = require("express");
const app = express();

app.listen(process.env.PORT, ()=>{
    console.log("Backend is  running");
})