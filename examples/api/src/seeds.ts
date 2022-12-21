import mongoose from 'mongoose'
import Book from './@resources/Book/Book.model'

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

console.log('DATABASE_URL', DATABASE_URL)

mongoose
  .connect(DATABASE_URL, {
    dbName: 'react-tableql',
    appName: 'react-tableql',
  })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!!')
  })
  .catch((err) => {
    console.error(err)
  })

const seedBooks = [
  {
    title: 'Northanger Abbey',
    author: 'Austen, Jane',
    yearWritten: 1814,
    edition: 'Penguin',
    price: 18.2,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'War and Peace',
    author: 'Tolstoy, Leo',
    yearWritten: 1865,
    edition: 'Penguin',
    price: 12.7,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Anna Karenina',
    author: 'Tolstoy, Leo',
    yearWritten: 1875,
    edition: 'Penguin',
    price: 13.5,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Mrs. Dalloway',
    author: 'Woolf, Virginia',
    yearWritten: 1925,
    edition: 'Harcourt Brace',
    price: 25,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'The Hours',
    author: 'Cunnningham, Michael',
    yearWritten: 1999,
    edition: 'Harcourt Brace',
    price: 12.35,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Huckleberry Finn',
    author: 'Twain, Mark',
    yearWritten: 1865,
    edition: 'Penguin',
    price: 5.76,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Bleak House',
    author: 'Dickens, Charles',
    yearWritten: 1870,
    edition: 'Random House',
    price: 5.75,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Tom Sawyer',
    author: 'Twain, Mark',
    yearWritten: 1862,
    edition: 'Random House',
    price: 7.75,
    createdAt: new Date().toISOString(),
  },
  {
    title: "A Room of One's Own",
    author: 'Woolf, Virginia',
    yearWritten: 1922,
    edition: 'Penguin',
    price: 29,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Harry Potter',
    author: 'Rowling, J.K.',
    yearWritten: 2000,
    edition: 'Harcourt Brace',
    price: 19.95,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Marquez',
    yearWritten: 1967,
    edition: 'Harper  Perennial',
    price: 14.0,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Hamlet, Prince of Denmark',
    author: 'Shakespeare',
    yearWritten: 1603,
    edition: 'Signet  Classics',
    price: 7.95,
    createdAt: new Date().toISOString(),
  },
  {
    title: 'Lord of the Rings',
    author: 'Tolkien, J.R.',
    yearWritten: 1937,
    edition: 'Penguin',
    price: 27.45,
    createdAt: new Date().toISOString(),
  },
]

const seedDB = async () => {
  await Book.deleteMany({})
  await Book.insertMany(seedBooks)
}

seedDB().then(() => {
  mongoose.connection.close()
})
