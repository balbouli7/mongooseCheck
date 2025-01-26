const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const findByName=async(name)=>{
    try {
        await connectDB()
        const user=await Person.find({name})
        console.log(user)
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
findByName("Mary")
