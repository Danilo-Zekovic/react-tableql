export const GET_ALL_FILMS = `
{
  allFilms(first:7){
    films{
      title
      episodeID
      releaseDate
    }
  }
}
`
