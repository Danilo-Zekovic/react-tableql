# react-tableql
React table component that is integrated with Apollo and GraphQL. Simple way to
display your data.

### NOTE: Work on this component is in progress. Please stay tuned for future changes upgrades
If you have any suggestions please let me know or join the project.

## Dependencies    
React      
GraphQL       
Apollo        

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

## Apollo Options   

variables - pass the query variables as you would to Apollo client   
skip -    
pollInterval -      


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


## Debug Mode
To enable debug mode pass ```true``` to component props:
```
<TableQL query={GET_ALL_FILMS} debug={true} />  
```     
This mode will enable logs that are part of the component and are disabled by default.     

### TODO    
Other Apollo configuration options    
Pagination     
More options for customization    
Subscribe for live updates     
Passing the custom functions      
Cleanup of node packages      
Improving the component    
Better documentation and user manual      
Tutorials        
