require('dotenv').config()

const mysql=require('mysql2')
const express=require('express')
const app=express()


const connection=mysql.createConnection({
    host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

connection.connect((err)=>{
    if(err){
        console.log("Not connected")
        return
    }
    err
})

app.listen(process.env.PORT,()=>{
    console.log("Server Started")
})