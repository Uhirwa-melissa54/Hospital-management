const mongoose=require('mongoose');
require('dotenv').config();
const url= process.env.MONGO_URL;
function dbConnect(){
mongoose.connect(url,{
    useNewUrlParser:true,
useUnifiedTopology:true}
);

const dbConnection=mongoose.connection;
dbConnection.once("open" ,(_)=>{
console.log("Database connected successfully")
})
dbConnection.on("error", (err)=>{
    console.error(err);
})
}
module.exports=dbConnect;