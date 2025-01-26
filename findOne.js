const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const findByFood=async(food)=>{
    try {
        await connectDB()
        const user=await Person.findOne({favoriteFoods:food})
        console.log(user)
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
findByFood("Burger")
