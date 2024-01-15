const express = require("express");
const app = express();
const port = 3000;
const {connectDb}= require("./connection");
const UserModel=require("./models/UserModel");
const cors=require("cors");
connectDb();


app.use(express.json());
app.use(cors());


app.get("/api/getData", async (req,res)=>{
    try{

        let user = await UserModel.find({});
        if(!user){
          return res.status(404).json({ success:false, message: "no users found"})
        }
         return res.status(201).json({
            success:true,
            message:"User fetched successfully",user
         })
    }
    catch(error){
        res.status(500).json({ success:false, message:error.message});

    }    
});






app.post("/api/postData", async (req,res)=>{
    //   console.log(req.body.name,req.body.age);
    const {name,email,phone,message}=req.body;
    try{

        let user = await UserModel.create({ name,email,phone,message});
         await user.save();
         return res.status(201).json({
            success:true,
            message:"User created successfully"
         })
        

    }
    catch(error){
        res.status(500).json({ success:false, message:error.message});

    }    
});




app.delete("/api/deleteData/:id", async (req,res)=>{
    const {id}=req.params;
    try{
        let user = await UserModel.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({ success:false,message:"user not found"});
        }
         
         return res.status(201).json({
            success:true,
            message:"User deleted successfully"
         })
        

    }
    catch(error){
        res.status(500).json({ success:false, message:error.message});

    }    
});






// app.post("/api/postData", async (req,res)=>{
// //   console.log(req.body.name,req.body.age);
//  let user = await UserModel.create({
//     name:req.body.name,
//     age:req.body.age
//  })
//  await user.save();
//  return res.status(201).json({
//     success:true,
//     message:"User created successfully"
//  })

// });




// app.put("/api/updateData/:id",async (req,res)=>{
//     const id = req.params.id;
//     const age = req.body.age;

//     let user = await  UserModel.findByIdAndUpdate(id,{
//         age:age
//     });
    
//  res.status(200).json({ success:true, message:"user updated successfully"});

// });

// app.delete("/api/deleteData/:id",async(req,res)=>{
//     const { id }=req.params ;
//     let user = await UserModel.findByIdAndDelete(id);

//     res.status(200).json({ success:true,message:"user deleted successfully"});



// });



app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
