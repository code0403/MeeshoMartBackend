
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();


const connection = mongoose.connect("mongodb+srv://abhishek:abhishekmasai@cluster0.y8lffxx.mongodb.net/MeeshoMart?retryWrites=true&w=majority")
module.exports = { connection }