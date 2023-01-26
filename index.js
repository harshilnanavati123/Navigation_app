require('./models/User')
require('./models/Track')
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')


const app = express();
app.use(bodyparser.json())
app.use(authRoutes)
app.use(trackRoutes)
const mongoUri = 'mongodb+srv://harshill:gaumata@cluster0.v7zslml.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)
mongoose.connection.on('connected',()=>{
    console.log('yes connected')
})
mongoose.connection.on('error',(err)=>{
    console.error('not connected', err)
})

app.get('/',requireAuth,(req,res)=>{
    res.send(`Your email:${req.user.email}`)
})
app.listen(3000,()=>{
    console.log('listening on port 3000')
})