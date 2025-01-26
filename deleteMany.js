const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')
const deleteMany=async(name)=>{
    try {
        await connectDB()
        const user=await Person.deleteMany({name})
        console.log("users removed")
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
deleteMany("Mary")