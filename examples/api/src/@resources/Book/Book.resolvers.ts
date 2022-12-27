import Book from './Book.model'

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const bookResolvers = {
  Query: {
    async book(_: unknown, { id }: { id: string }) {
      return await Book.findById(id)
    },
    books: async () => await Book.find().sort({ createdAt: -1 }),
  },
  Mutation: {
    createBook: async (
      _: unknown,
      {
        book,
      }: {
        book: {
          title: string
          author: string
          yearWritten: number
          edition: string
          price: number
        }
      },
    ) => {
      // TODO needs some data validation
      const createdBook = new Book({
        title: book.title,
        author: book.author,
        yearWritten: book.yearWritten,
        edition: book.edition,
        price: book.price,
        createdAt: new Date().toISOString(),
      })

      const res = await createdBook.save()

      return res
    },
    deleteBook: async (_: unknown, { id }: { id: string }) => {
      return (await Book.deleteOne({ _id: id })).deletedCount!!
    },
    editBook: async (
      _: unknown,
      {
        id,
        book,
      }: {
        id: string
        book: {
          title?: string
          author?: string
          yearWritten?: number
          edition?: string
          price?: number
        }
      },
    ) => {
      // TODO
    },
  },
}

export default bookResolvers