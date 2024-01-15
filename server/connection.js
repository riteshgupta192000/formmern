const mongoose=require("mongoose");
const connectDb= async () =>{
  const connection = await mongoose.connect("mongodb://localhost:27017/formmern");
  if(connection){
    console.log("connection to db");
  }
  else{
    console.log("connection failed");
  }
}

module.exports= { connectDb };