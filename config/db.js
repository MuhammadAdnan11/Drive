// const mongoose=require('mongoose')
// const dotenv=require('dotenv')
// dotenv.config();
// function connectToDB(){
//     mongoose.connect("process.env.MONGO_URI").then(()=>{
//         console.log('Connected to DB')
//     })
// }

// module.exports=connectToDB;


const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
    });
}

module.exports = connectToDB;