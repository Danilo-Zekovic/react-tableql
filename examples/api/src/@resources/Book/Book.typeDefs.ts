const bookTypeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    createdAt: String
    yearWritten: Int
    edition: String
    price: Float
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  input BookInput {
    title: String
    author: String
    yearWritten: Int
    edition: String
    price: Float
  }

  type Mutation {
    createBook(book: BookInput): Book!
    deleteBook(id: ID!): Boolean
    editBook(id: ID!, book: BookInput): Book!
  }
`

export default bookTypeDefs
