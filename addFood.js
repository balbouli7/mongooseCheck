const mongoose = require('mongoose')
const Person = require('./models/person')
require('dotenv').config()
const connectDB = require('./config/database')

const updateFavoriteFoods = async (personId) => {
  try {
    await connectDB()
    const person = await Person.findById(personId)
    person.favoriteFoods.push('hamburger')
    person.markModified('favoriteFoods')
    await person.save()
    console.log(person)
  } catch (error) {
    console.error(error)
  } finally {
    mongoose.connection.close()
  }
}
updateFavoriteFoods("678d9285de3c0af3fe7d71a3");
