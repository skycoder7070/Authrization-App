const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Db connected Successfully")
    })
    .catch( (err) =>{
        console.log("DB connection Issue");
        console.error(err);
        process.exit(1);
    })
}
