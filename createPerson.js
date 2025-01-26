const mongoose = require('mongoose')
const Person = require('./models/person')
require('dotenv').config()
const connectDB= require('./config/database')

const createPerson = async () => {
  const person = new Person({
    name: 'Alice',
    age: 30,
    favoriteFoods: ['Pizza', 'Ice Cream'],
  })

  try {
    await connectDB()

    const savedPerson = await person.save();
    console.log('Person saved:', savedPerson)
  } catch (err) {
    console.error('Error saving person:', err)
  } finally {
    mongoose.connection.close();
}
}

createPerson()

