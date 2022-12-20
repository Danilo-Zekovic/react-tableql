import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  createdAt: String,
  yearWritten: Number,
  edition: String,
  price: Number,
})

export default mongoose.model('Book', bookSchema)
