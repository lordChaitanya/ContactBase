const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config(); 
const app = express();

const port= process.env.PORT||5000;
app.use(express.json()); //parser

app.use("/api/contacts",require("./routes/contactRoutes"))

app.use(errorHandler);






 app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
 })