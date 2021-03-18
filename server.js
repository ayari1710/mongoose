// require express
const express=require('express')
// instance 
const app=express()
// require dotenv et config
require('dotenv').config()
// middlewar bodypparser
app.use(express.json())
// connect db 
const connectDB=require("./config/connectDB")
connectDB()
// routes
const router =require("./route/contact")
app.use('/api/contacts',router)
// port 
const PORT=process.env.PORT
// server
app.listen(PORT,error=>{
    error ? console.log("error"):
    console.log(`le server is runnig ${PORT}`)
})