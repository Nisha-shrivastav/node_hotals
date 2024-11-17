const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/sunshinehotal'

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("conected to server");
})

db.on('error',(err)=>{
    console.log("conected to error");
})

db.on('disconnected',()=>{
    console.log("disconected to server");
})

module.exports = db;