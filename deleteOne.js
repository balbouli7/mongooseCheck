const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const deleteOne=async(personId)=>{
    try {
        await connectDB()
        const user=await Person.findByIdAndDelete(personId)
        console.log("user removed")
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
deleteOne("678d9285de3c0af3fe7d71a2")