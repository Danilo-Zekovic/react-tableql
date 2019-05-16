export const typeDefs = `
type Film {
  title: String
  episodeID: Int
  releaseDate: String
  director: String
  producer: String
  created: String
  edited: String
}

type People {
  id: String
  name: String
  height: Int
  mass: Int
  hairColor: String
  skinColor: String
  eyeColor: String
  birthYear: String
  gender: String
}

type Query {
  allFilms: [Film]
  allPeople: [People]
}

schema {
  query: Query
}
`
