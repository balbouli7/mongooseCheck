const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const findByName=async(personId)=>{
    try {
        await connectDB()
        const user=await Person.findById(personId)
        console.log(user)
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
findByName("678d9285de3c0af3fe7d71a3")