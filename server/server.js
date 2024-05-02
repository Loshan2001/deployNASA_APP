const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser'); // Import cookie-parser
const app = express()
const cors = require('cors')
const auth = require('./routes/auth')
dotenv.config()
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser : true})
const con = mongoose.connection 
con.on('open',()=>{
    console.log('mongoDB connected.....')
})

//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser());
//user route middleware 
app.use('/api/user',auth)
app.listen(8086 ,()=>{
    console.log("server running on port 8080.....")
})