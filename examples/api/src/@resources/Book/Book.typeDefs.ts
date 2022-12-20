const bookTypeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    pageNumber: Int
    createdAt: String
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  input BookInput {
    title: String
    author: String
    pageNumber: Int
  }

  type Mutation {
    createBook(book: BookInput): Book!
    deleteBook(id: ID!): Boolean
    editBook(id: ID!, book: BookInput): Book!
  }
`

export default bookTypeDefs
