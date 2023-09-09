const mongoose = require('mongoose');
const ToDo = require('../models/toDoModel').ToDo;
// const DB_URI = 'mongodb://127.0.0.1:27017/toDoApp';

// mongoose.connect(DB_URI).then(() => {
//   console.log('Listening on port: ' + PORT);
//   app.listen(PORT);
// });

mongoose.connect('mongodb://127.0.0.1:27017/toDoApp', {
    // useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>{
    console.log("Connection Unsuccessful", e);
})