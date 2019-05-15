// queries for mocked API
export const GET_ALL_FILMS = `
{
  allFilms {
    title
    episodeID
    releaseDate
  }
}
`

export const GET_ALL_PEOPLE = `
{
  allPeople {
    name
    gender
    birthYear
    eyeColor
    hairColor
    skinColor
  }
}
`

export const FALSE = `
{
  allFilms {
    title {
      foo
      bar
    }
    episodeID
    releaseDate
    foo
    bar
  }
}
`

// queries for SWAPI
export const GET_ALL_FILMS_SWAPI = `
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

export const GET_ALL_PEOPLE_SWAPI = `
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
