# react-tableql
React table component that is integrated with Apollo and GraphQL

## Queries   
To pass the GraphQL query to the component, first create graphql-tag as follows:     
```
const GET_ALL_FILMS = gql`
  {
    allFilms(first:7){
      films{
        title
        episodeID
      }
    }
  }
`
```     
Then pass it as a query prop:
```
<TableQL query={GET_ALL_FILMS} />  
```

## Custom Styling   
To add custom styling to the table create CSS class(es) and pass them as a
string to the component props, as follows for the next parts of the table:    
table (master) - tableql    
thead - thead
tr inside thead - theadtr    
th inside tr that is inside thead - theadth     
tbody - tbody     
tr inside tbody - tbodytr     
td inside tr that is inside tbody - tbodytd      

Example:    
```
<TableQL query={GET_ALL_FILMS} tableql='custom-styling' />  
```      
If no custom styling is passed component will use its own styling.     

       
