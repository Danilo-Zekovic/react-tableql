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

export const GET_ALL_PEOPLE = `
{
  allPeople {
    people {
      name
      gender
      birthYear
      eyeColor
      hairColor
      skinColor
    }
  }
}
`
