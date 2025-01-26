const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')
const pizza=async() => {
    try {
        await connectDB()
        const pipeline=[
            {$sort:{name:1}},
            {$limit:2},
            {$project:{age:0}}]
            const pizzaLover=await Person.aggregate(pipeline)
          console.log(pizzaLover)
      } catch (error) {
          console.error(error)
      } finally {
          mongoose.connection.close();
      }
  }
pizza("Pizza")


// const pizza = async () => {
//   try {
//     await connectDB()

//     const pizzaLover = await Person.find()
//       .sort({ name: 1 })
//       .limit(2)
//       .select('-age')

//     console.log(pizzaLover)
//   } catch (error) {
//     console.error('Error fetching pizza lovers:', error)
//   } finally {
//     mongoose.connection.close()
//   }
// }

// pizza()

