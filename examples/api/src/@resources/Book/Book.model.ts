import { isDefinitionNode } from 'graphql'
import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  author: String,
  title: String,
  pageNumber: Number,
  createdAt: String,
})

export default mongoose.model('Book', bookSchema)
