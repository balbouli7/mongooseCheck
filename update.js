const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const updateAgeByName=async(name)=>{
    try {
        await connectDB()
        const updatePerson= await Person.findOneAndUpdate(
            { name },
            { age: 20 },
            { new: true },
        )
        console.log(updatePerson)
    } catch (error) {
        console.error(error)
    } finally {
        mongoose.connection.close();
    }
}
updateAgeByName("Bob")