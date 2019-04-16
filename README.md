# react-tableql

React table component that is integrated with Apollo and GraphQL. Simple way to
display your data.

### NOTE: Work on this component is in progress. Please stay tuned for future changes upgrades

If you have any suggestions please let me know or join the project.

## Installing and Using react-tableql

First install it:

```
npm install react-tableql
```

Then import it into your React component:

```
import TableQL from 'react-tableql'
```

Component in which is TableQL used must be wrapped in Apollo Client:

```
ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root')
)
```

For more information how to setup Apollo Client please visit their Get Started page:
https://www.apollographql.com/docs/react/essentials/get-started.html

#### Development

When doing development on the component on local machine follow next steps to make your
time more productive:  
Hot-reload

```
npm start
```

Linking react-tableql in local:  
First run

```
npm link
```

inside the react-tableql directory, then in the project that you wish to test the component

```
npm link react-tableql
```

Check is everything formatted by the set rules in Prettier:

```
npm run format:check
```

And to format everything run:

```
npm run format
```

My advice would be to set up your editor to format code on save.

## Dependencies

React  
GraphQL  
Apollo

## Queries

To pass the GraphQL query to the component, all you have to do is create a string with backticks as follows:

```
const GET_ALL_FILMS = `
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

## Columns

Prop `columns` is very important when one wants to customize the columns.
It is an array. The simplest usage for it is making the order of the columns, of
course order can be made in query as well.

Example of order:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={['episodeID', 'releaseDate', 'title']} />
```

If you want to have a custom header label for the column use property `label`:
Example of order:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[{id:'episodeID', label:'Episode Identification'}, 'releaseDate', 'title']} />
```

When column is represented as object then `id` property is required, so that TableQL
knows which value to grab.  
If data that needs to be displayed is in nested object then `id` should be a chain
of keys separated with periods, Ex. 'foo.bar.blah'.

## Apollo Options

Pass data as you would to Apollo client to following props that match Apollo Client
props:

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

To enable debug mode pass `true` to component props:

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
PropTypes  
Special cases (value is an array, ...)  
Column sorting
Search
Tests
