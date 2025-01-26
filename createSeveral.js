const mongoose = require('mongoose')
const Person = require('./models/person') 
require('dotenv').config()
const connectDB= require('./config/database')

const createManyPeople = async () => {
  const manyPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Pizza', 'Salad'] },
    { name: 'Bob', age: 30, favoriteFoods: ['Burger', 'Pasta'] },
    { name: 'Charlie', age: 35, favoriteFoods: ['Sushi', 'Steak'] },
    { name: 'Mary', age: 28, favoriteFoods: ['Tacos', 'Ice Cream'] },
    { name: 'Ethan', age: 40, favoriteFoods: ['Ramen', 'Dumplings'] }
  ]
  try {
    await connectDB()

    const people = await Person.create(manyPeople)
    console.log('People saved successfully:', people)
  } catch (error) {
    console.error('Error saving people:', error)
  } finally {
    mongoose.connection.close();
}
}
createManyPeople()
