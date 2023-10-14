const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Welcome"
    })
})

app.listen(PORT,(err)=>{
    if (err) return console.log("Some Error Occured!!");
    console.log(`Connected successfully, run at http://127.0.0.1:${PORT}`)
})