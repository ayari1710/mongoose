// appel mongoose
const mongoose=require("mongoose")
// connect to base de donnes 
const connectDB= async ()=>{
    try {
     await   mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("data base is connected")
    } catch (error) {
        console.log("the data disconnected")
    }
    
}
module.exports =  connectDB