const mongoose=require("mongoose")
// create schema 
const { Schema } = mongoose;
const ContactSchema = new Schema({
   name:{
       type: String ,
       require:true,
       unique:true
   },
  email: {
    type: String ,
    require:true,
    unique:true
   },
   phone:Number
}
  );
  module.exports= Contact = mongoose.model('contact',ContactSchema)