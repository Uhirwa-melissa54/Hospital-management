const mongoose=require('mongoose');

const hospitalSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        department:{
            type:String,
            required:true
        },
        disease:{
            type:String,
            required:true
        },
        id:{
            type:Number,
            required:true
        }
    }
)
const Model=mongoose.model("Patient", hospitalSchema);
module.exports=Model;