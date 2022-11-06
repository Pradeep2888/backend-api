const express=require("express")
require("dotenv").config()
const app=express()
const PORT=process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("welcome to home")
})

app.listen(PORT,()=>{
    console.log(`listen to ${PORT}`)
})