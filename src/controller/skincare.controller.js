const  express=require("express");
const Skincare=require("../models/skincare.model");

const router=express.Router();
router.get("",async (req,res)=>{
    try{
        const skincares=await Skincare.find().lean().exec();
        return res.status(200).send(skincares)
    }catch(err){
        return res.status(500).send({message:err.message});
    }
});
// router.post("",upload.single("profilePic"),async (req,res)=>{
//     try{
//         const user= await User.create({
//             firstName:req.body.firstName,
//             lastName:req.body.lastName,
//             profilepic:req.file.path,
//         });
//         return res.status(200).send(user);
//     }
//     catch(err){
//         console.log(err)
//         return res.status(500).send({message:err.message})
//     }
// })
router.post("",async(req,res)=>{
   try{
       
       const skincare =await Skincare.create(req.body);
       return res.status(200).send(skincare)
   } 
   catch(err){
    return res.status(500).send({message:err.message})
   }
});


module.exports=router;