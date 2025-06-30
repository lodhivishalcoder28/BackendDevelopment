
const express=require('express')
const app=express()
require('dotenv').config()
const port=4000;

app.get('/',(req,res)=>{
    res.send("hello world");
})


app.get('/twitter',(req,res)=>{
    res.send("this is twittter");
})

app.get("/login",(req,res)=>{
    res.send('<h1>please login at vishal website</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`)
})