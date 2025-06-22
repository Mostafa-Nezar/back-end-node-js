const mongoose = require("mongoose")
const schema = mongoose.Schema

const myschema = new schema({
    myname:String,
    age:Number,
})


const user = mongoose.model("user",myschema)

module.exports = user