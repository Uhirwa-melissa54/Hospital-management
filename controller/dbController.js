const express=require('express');
const UserModel=require("../Models/dbSchema")
const app=express();
const router=express.Router();

router.use((req,res,next)=>{
    console.log(" I will run on this routes");
    next();
})

router.post("/", async (req,res)=>{
    const user=new UserModel(req.body);

    try{
        
        await user.save();
        res.status(201).send(user);
    }
    catch (err){

        if(err.name==ValidationError){
            res.status(400).send({mesage:"Invalid Input"});
        };
        res.status(500).send(err);
        
    }
    

});
router.get("/", async (req,res)=>{
    try{
    const user= await UserModel.find({});
    res.status(200).send(user)
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

router.get("/:id",async (req,res)=>{
try{
    const user= await UserModel.findOne({id:req.params.id})
   

    if(!user){
        res.status(404).send(err)
    }
    res.status(200).send(user);
}
catch(err){
    res.status(500).send(err)
}
})

router.put("/:id",async (req,res)=>{
    try{
 const user=await UserModel.findOneAndUpdate({id:req.params.id},req.body,{new:true});
 if(!user){
    res.status(404).send({message:"User to update not found"});
 }
res.status(200).send({message:`The patient with the ${req.params.id} has beeen updated`})
    }
catch(err){
    res.status(500).send(err)
}

})

router.delete("/:id", async (req,res)=>{
    try{
        const user= await UserModel.findOneAndDelete({id:req.params.id});
        if(!user){
            res.status(404).send({message:"There is no user with that id"})
        }
        res.status(200).send({message:"User deleted succefully"})
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;