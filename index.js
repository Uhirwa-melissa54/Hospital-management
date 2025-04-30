const express=require('express');
const dbConnection=require("./Models/dbconnect")
const dbController=require("./controller/dbController")
const dotenv=require('dotenv').config()
const swaggerUi=require('swagger-ui-express');
const swaggerSpec=require('./swagger')
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/patients", dbController);
dbConnection();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(process.env.PORT, ()=>{
    console.log("Server is listening")
})





