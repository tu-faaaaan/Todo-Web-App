const mongoose = require('mongoose');

// Code to connect to the MongoDb
mongoose.connect('mongodb://mongo:27017/toDoApp', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("Connection Unsuccessful", e);
})