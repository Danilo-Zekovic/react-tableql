# react-tableql

React table component that is harnessing the power of Apollo and GraphQL. Simple way to display your data.

Official React TableQL Storybook: https://danilo-zekovic.github.io/react-tableql/

### NOTE: Work on this component is in progress. Please stay tuned for future changes, upgrades

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

## Scripts

##### start

Builds the component with hot reload. Useful when developing and working on the TableQL.

##### build

Builds production ready component using Webpack.

##### build:all

Builds production ready component using Webpack, and builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

##### format

Formats the code using Prettier by rules defined in Pretier config file.

##### format:check

Checks if all the formating follows the defined rules.

##### storybook

Starts Storybook locally on port 6006, http://localhost:6006/

##### build-storybook

Builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

## Development/Contribution

When doing development on the component on local machine follow next steps to make your time more productive:

Start [Storybook]('https://storybook.js.org/'):

`npm run storybook`

Create a story in Storybook where you can test your changes.

OR

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

- React
- GraphQL
- Apollo

---

# Props

## query

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

This is the minimum requirement for TableQL to work, rest of the props are used to modify and customize it. query is mandatory prop, all other are optional.

## columns

Prop `columns` is very important when one wants to customize the columns.
It is an array. The simplest usage for it is making the order of the columns, of
course order can be made in query as well.

Example of order:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={['episodeID', 'releaseDate', 'title']} />
```

> NOTE: Order can be controlled in GraphQL query, which is recommended way as that improves performance because TableQL does not have to do extra work.

#### Columns Object Options

When column is represented as object then `id` property is required, so that TableQL knows which value to grab.
If data that needs to be displayed is in nested object then `id` should be a chain of keys separated with periods, Ex. 'foo.bar.blah'.

##### label

If you want to have a custom header label for the column use property `label`.

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    {id:'episodeID', label:'Episode Identification'},
    'releaseDate',
    'title'
    ]} />
```

##### format

To format values to our own liking use `format` prop, and pass it a function that receives one parameter value to be modified, and returns the value to be displayed.

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    {id:'episodeID', format: data => data.toUpperCase()},
    'releaseDate',
    'title'
    ]} />
```

##### component

To add your own column formating or custom React component use `component` parameter. Pass it a function that returns a React component or a function that formats the data. TableQL will return data that would have been displayed

Example with React component:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    { id: 'title', component: data => <Button data={data} />}
    ]} />
```

Example with formating function:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    { id: 'title', component: data => data.toUpperCase() />}
    ]} />
```

##### customColumn

This property indicates if the column is addition to existing columns that are extracted from returned data or if it is something that developer is adding to rest of the table. Pass `true` to `customColumn` property, and provide component so that TableQL knows how to render it. When `customColumn: true` then all the data for the given row is returned to component, which makes it easy to do manipulations such as edit, delete...

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    'title',
    {
      id: 'actions',
      component: props => <Button data={props} />,
      customColumn: true,
    },
  ]} />
```

##### headerStyle

Pass a class name to `headerStyle` to only style the header of that one column.

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    {
      id: 'title',
      headerStyle: 'custom-style-class'
    },
  ]} />
```

##### nodeStyle

To style nodes/cells of the column you can pass a string or function. When string passed then class name is passed. When function is passed TableQl will return the data for that row as parameters. It can be used for conditional styling such as make the color green when true.

Example with string:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    {
      id: 'title',
      nodeStyle: 'custom-style-class',
    },
  ]} />
```

Example with function:

```
<TableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    {
      id: 'title',
      nodeStyle: data => {
        if (data.title.length <= 10) return 'custom-style-class'
      },
    },
  ]} />
```

## pagination

To enable pagination pass `true` or config object to `pagination` prop. When `true` passed then component will use its default values to configure the pagination.
Config object has the following properties:

```
{
  pageLimit: 10,
  pageNeighbors: 0,
  currentPage: 1,
  onPageChanged: (currentPage, totalPages, pageLimit, totalRecords) => void
}
```

**pageLimit** - sets the number of records per page
**pageNeighbors** - sets the number of pages that will be shown around current page in pagination component
**currentPage** - sets the initial page
**onPageChanged** - returns the data about pagination

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  pagination={
    {
      pageLimit: 5,
      pageNeighbors: 2,
      currentPage: 1,
      onPageChanged: (currentPage, totalPages, pageLimit, totalRecords) => {
        alert(currentPage)
      }
    }
  } />
```

## onRowClick

If something is needed to happen when the row is clicked then pass a function to `onRowClick` prop. TableQl will return data that is found in the row that was clicked.

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  onRowClick={data => alert(data)} />
```

## Apollo Options

Pass data as you would to Apollo client to following props that match Apollo Client
props:

**variables** - pass the query variables as you would to Apollo client
**skip** -
**pollInterval** -

## Custom Styling

To add custom styling to the table create CSS class(es) and pass them in an object with properties as shown bellow:

```
{
  table: '',
  thead: '',
  theadTr: '',
  theadTh: '',
  tbody: '',
  tbodyTr: '',
  tbodyTd: '',
}
```

None of the properties are required, user can pass the classes just to the parts of table that they wish to change.

Example:

```
<TableQL
  query={GET_ALL_FILMS}
  styles={
    table:'custom-class',
    tbodyTd: 'custom-body-node-class'
  } />
```

If no custom styling is passed component will use its own styling.

## Debug Mode

To enable debug mode pass `true` to component props:

```
<TableQL query={GET_ALL_FILMS} debug={true} />
```

This mode will enable logs that are part of the component and are disabled by default.

### TODO

- Other Apollo configuration options
- More options for customization
- Subscribe for live updates
- Passing the custom functions
- Cleanup of node packages
- Improving the component
- Better documentation and user manual
- Tutorials
- Special cases (value is an array, ...)
- Column sorting
- Search
- Tests
- Continues integration

For more about TableQL visit **[Official React TableQL Storybook](https://danilo-zekovic.github.io/react-tableql/)** and explore all the options, and see some demo examples.
