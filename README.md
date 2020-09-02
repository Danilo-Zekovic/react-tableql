# react-tableql

[![Build Status](https://travis-ci.com/Danilo-Zekovic/react-tableql.svg?branch=master)](https://travis-ci.com/Danilo-Zekovic/react-tableql) [![codecov](https://codecov.io/gh/Danilo-Zekovic/react-tableql/branch/master/graph/badge.svg)](https://codecov.io/gh/Danilo-Zekovic/react-tableql) [![downloads](https://img.shields.io/npm/dm/react-tableql.svg)](https://npmjs.com/package/react-tableql) [![npm version](https://img.shields.io/npm/v/react-tableql.svg?style=flat)](https://www.npmjs.com/package/react-tableql) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Danilo-Zekovic/react-tableql/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Danilo-Zekovic/react-tableql/blob/master/CONTRIBUTING.md)

[![stars](https://img.shields.io/github/stars/Danilo-Zekovic/react-tableql.svg?style=social&label=Star)](https://github.com/Danilo-Zekovic/react-tableql) [![fork](https://img.shields.io/github/forks/Danilo-Zekovic/react-tableql.svg?style=social&label=Fork)](https://github.com/Danilo-Zekovic/react-tableql) [![watch](https://img.shields.io/github/watchers/Danilo-Zekovic/react-tableql.svg?style=social&label=Watch)](https://github.com/Danilo-Zekovic/react-tableql)

![Twitter Follow](https://img.shields.io/twitter/follow/danilo_zekovic?label=Follow&style=social)

Easy to use React components for creating data grids with zero to no configuration. Simple way to display your data.

If this project helped you improve and simplify your application, consider supporting it by [buying me a beer.](https://www.paypal.me/danilozekovic)

Official React TableQL Storybook: https://danilo-zekovic.github.io/react-tableql/

Example app: https://github.com/Danilo-Zekovic/react-tableql-example-app  
TypeScript example app: https://github.com/Danilo-Zekovic/react-tableql-typescript-example-app  
Next.js example app: https://github.com/Danilo-Zekovic/react-tableql-nextjs-example-app

If you have any suggestions please let me know or join the project.

> Latest code can be found on [GitHub](https://github.com/Danilo-Zekovic/react-tableql)

## Installing and Using react-tableql

First install it:

```
npm install react-tableql
```

Then import it into your React component:

```
import TableQL from 'react-tableql'
```

or for ApolloTableQL:

```
import { ApolloTableQL } from 'react-tableql'
```

Component in which is ApolloTableQL used must be wrapped in Apollo Client Provider:

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

## Dependencies

These packages are required to be able to use TableQL and ApolloTableQL:

- React

```
npm install --save react
```

Additionally for ApolloTableQL:

- GraphQL
- Apollo Client

```
npm install --save graphql @apollo/client
```

For version 0.1.0-beta.4 or older, or 0.0.10 and older

```
npm install --save graphql apollo-boost react-apollo
```

## TypeScript (>= v0.1.0-beta.0)

react-tableql supports type definitions for TypeScript out of the box. It ships with definitions in its npm package, so installation should be done for you after the library is included in your project. Available from version v0.1.0-beta.0

## Server-Side Rendering (SSR)

#### Next.js

```
import dynamic from 'next/dynamic'

const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
  const { ApolloTableQL } = m
  return ApolloTableQL
}), { ssr: false })
```

```
import dynamic from 'next/dynamic'

const TableQL = dynamic(() => import('react-tableql'), { ssr: false })
```

### [Scripts for running this project are at the bottom!](#scripts)

---

# Props

| Prop                                    | Required | Type                       | Default Value | Description                                                                                                     | TableQL            | ApolloTableQL      |
| --------------------------------------- | -------- | -------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| [**query**](#query)                     | Yes      | String                     | -             | Graphql query                                                                                                   | :x:                | :white_check_mark: |
| [**data**](#data)                       | Yes      | Array or Object            | -             | Data to be parsed and rendered                                                                                  | :white_check_mark: | :x:                |
| [**columns**](#columns)                 | No       | Array                      | `null`        | Customization of columns                                                                                        | :white_check_mark: | :white_check_mark: |
| [**pagination**](#pagination)           | No       | Object or Boolean          | `false`       | Adds pagination                                                                                                 | :white_check_mark: | :white_check_mark: |
| [**onRowClick**](#onrowclick)           | No       | Function                   | `null`        | Handle row click                                                                                                | :white_check_mark: | :white_check_mark: |
| [**onEmpty**](#onempty)                 | No       | React Functional Component | `null`        | Component to render if data is empty                                                                            | :white_check_mark: | :white_check_mark: |
| [**styles**](#styles)                   | No       | Object                     | `{}`          | Change the look of part of a table                                                                              | :white_check_mark: | :white_check_mark: |
| [**debug**](#debug)                     | No       | Boolean                    | `false`       | Turns on and off the debug mode                                                                                 | :white_check_mark: | :white_check_mark: |
| [**loading**](#loading)                 | No       | Boolean                    | `false`       | Indicates if data is loading                                                                                    | :white_check_mark: | :x:                |
| [**error**](#error)                     | No       | Error                      | `''`          | Error object                                                                                                    | :white_check_mark: | :x:                |
| [**sort**](#sort)                       | No       | Boolean                    | `false`       | All columns can be sorted by                                                                                    | :white_check_mark: | :white_check_mark: |
| **errorMessage**                        | No       | String                     | ''            | When error occurs display this message                                                                          | :white_check_mark: | :white_check_mark: |
| [**_Apollo Options_**](#Apollo_Options) | No       | -                          | -             | See [Apollo Client](https://www.apollographql.com/docs/react/essentials/get-started.html) site for more details | :x:                | :white_check_mark: |

> NOTE: ApolloTableQL has yet to be tested for all the options that Apollo Client has to offer. See the once that have been tested in the section Apollo Options bellow.

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
<ApolloTableQL query={GET_ALL_FILMS} />
```

This is the minimum requirement for ApolloTableQL to work, rest of the props are used to modify and customize it. query is mandatory prop, all other are optional.

## data

It should be an array of objects, or an object which has at least one property that is an array. TableQL will take it and parse it.

Example:

```
const PEOPLE = [
  { id:1, name: 'Luke Skywalker', age: 25 },
  { id:2, name: 'Leia Organa' , age: 25 },
  { id:3, name: 'R2-D2', age: 100 }
]
```

```
<TableQL data={PEOPLE} />
```

This example will render a table with three columns and four rows (including headers). Where columns will be id, name, and age.

## columns

Prop `columns` is very important when one wants to customize the columns.
It is an array. The simplest usage for it is making the order of the columns, of
course order can be made in query as well.

Example of order:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  columns={['episodeID', 'releaseDate', 'title']} />
```

> NOTE: Order can be controlled in GraphQL query, which is recommended way as that improves performance because TableQL does not have to do extra work.

#### Columns Object Options

| Property         | Required                         | Type                | Default Value | Description                                            |
| ---------------- | -------------------------------- | ------------------- | ------------- | ------------------------------------------------------ |
| **id**           | Yes                              | String              | -             | Accessor                                               |
| **label**        | No                               | String              | -             | Table header label                                     |
| **component**    | No, Yes when customColumn `true` | Function            | `null`        | Change the value, or inject a component or value       |
| **customColumn** | No                               | Boolean             | `false`       | Adds a column that is not populated by data from query |
| **headerStyle**  | No                               | String              | `''`          | CSS class for header style                             |
| **nodeStyle**    | No                               | String or Function  | `''`          | CSS class style for nodes in column                    |
| **sort**         | No                               | Boolean or Function | `false`       | Sort by this column                                    |

##### id

When column is represented as object then `id` property is required, so that TableQL knows which value to grab.
If data that needs to be displayed is in nested object then `id` should be a chain of keys separated with periods, Ex. 'foo.bar.blah'.

##### label

If you want to have a custom header label for the column use property `label`.

Example:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  columns={[
    {id:'episodeID', label:'Episode Identification'},
    'releaseDate',
    'title'
    ]} />
```

##### component

To add your own column formating or custom React component use `component` parameter. Pass it a function that returns a React component or a function that formats the data. TableQL will return data that would have been displayed

Example with React component:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    { id: 'title', component: data => <Button data={data} />}
    ]} />
```

Example with formating function:

```
<ApolloTableQL
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
<ApolloTableQL
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
<ApolloTableQL
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
<ApolloTableQL
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
<ApolloTableQL
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

##### sort

Sort can be boolean or a function that takes array of objects as first argument and string property which was clicked to be sorted, and it should return the array of objects that were reorder:

Example when sort boolean:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    {
      id: 'title',
      sort: true,
    },
  ]} />
```

Example when sort function:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  columns={[
    'episodeID',
    'releaseDate',
    {
      id: 'title',
      sort: (data, property) => data.sort(property),
    },
  ]}
/>
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

| Property          | Required | Type     | Default Value | Description                                                                    |
| ----------------- | -------- | -------- | ------------- | ------------------------------------------------------------------------------ |
| **pageLimit**     | No       | Number   | `10`          | Number of rows per page                                                        |
| **pageNeighbors** | No       | Number   | `0`           | Number of pages that will be shown around current page in pagination component |
| **currentPage**   | No       | Number   | `1`           | The initial page                                                               |
| **onPageChanged** | No       | Function | `null`        | On page change returns data about pagination                                   |

Example:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  pagination={
    {
      pageLimit: 5,
      pageNeighbors: 2,
      currentPage: 1,
      onPageChanged: ({currentPage, totalPages, pageLimit, totalRecords}) => {
        alert(currentPage)
      }
    }
  } />
```

## onRowClick

If something is needed to happen when the row is clicked then pass a function to `onRowClick` prop. TableQL will return data that is found in the row that was clicked.

Example:

```
<ApolloTableQL
  query={GET_ALL_FILMS}
  onRowClick={data => alert(data)} />
```

## onEmpty

If you need to render another component in case of an empty table, TableQL will do so calling onEmpty, a React Functional Component, with "reason" (string) as a prop.

Example:

```
const FailSafe = ({reason}) => <h3>You don't have data yet</h3>;

<ApolloTableQL
  query={GET_ALL_FILMS}
  onEmpty={FailSafe} />
```

## loading

Pass it to indicate if data loading. This is only for TableQL, ApolloTableQL takes care of it.

Example:

```
<TableQL
  data={GET_ALL_FILMS}
  loading={true} />
```

## error

Pass the JavaScript Error object if there is an error while fetching the data, or if server returned an error. This is only for TableQL, ApolloTableQL takes care of it.

Example:

```
<TableQL
  data={GET_ALL_FILMS}
  error={new Error('Some error!')} />
```

## sort

Pass `true` to add sort on all of the columns. When header label clicked sort the table by that column.

Example:

```
<ApolloTableQL query={GET_ALL_FILMS} sort />
```

## errorMessage

Error message to be displayed when error occurs.

Example:

```
<ApolloTableQL query={GET_ALL_FILMS} errorMessage="There was an error! Try again." />
```

## Apollo Options

Pass data as you would to Apollo client to following props that match Apollo Client
props. For details on Apollo Query Props please visit official documentation https://www.apollographql.com/docs/react/essentials/queries

| Apollo Query Props              | Tested             | Works              |
| ------------------------------- | ------------------ | ------------------ |
| **query**                       | :white_check_mark: | :white_check_mark: |
| **variable**                    | :white_check_mark: | :white_check_mark: |
| **pollInterval**                | :white_check_mark: | :white_check_mark: |
| **notifyOnNetworkStatusChange** | :white_check_mark: | :white_check_mark: |
| **fetchPolicy**                 | :x:                | :interrobang:      |
| **errorPolicy**                 | :x:                | :interrobang:      |
| **ssr**                         | :x:                | :interrobang:      |
| **displayName**                 | :white_check_mark: | :interrobang:      |
| **skip**                        | :white_check_mark: | :white_check_mark: |
| **onCompleted**                 | :white_check_mark: | :white_check_mark: |
| **onError**                     | :white_check_mark: | :white_check_mark: |
| **context**                     | :x:                | :interrobang:      |
| **partialRefetch**              | :x:                | :interrobang:      |
| **children**                    | :white_check_mark: | :x:                |
| **client**                      | :x:                | :interrobang:      |
| **returnPartialData**           | :x:                | :interrobang:      |

> NOTE: children is already taken care of by ApolloTableQL. There is no option to pass children to ApolloTableQL yet.

Those props that are not yet tested can also be passed to the ApolloTableQL just as you would to Query component from Apollo Client.

Example:

```
<ApolloTableQL query={SOME_QUERY_WITH_VAR} variable={someValue} />
```

## styles

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
<ApolloTableQL
  query={GET_ALL_FILMS}
  styles={
    {
      table:'custom-class',
      tbodyTd: 'custom-body-node-class'
    }
  }
/>
```

If no custom styling is passed component will use its own styling.

## debug

To enable debug mode pass `true` to component props:

```
<ApolloTableQL query={GET_ALL_FILMS} debug={true} />
```

This mode will enable logs that are part of the component and are disabled by default.

---

### Licence

MIT

---

# Scripts

##### start

Builds the component with hot reload. Useful when developing and working on the TableQL.

##### build

Builds production ready component using Webpack.

##### build:all

Builds production ready component using Webpack, and builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

##### test

Run all the tests.

##### test:watch

Runs tests in watch mode.

##### test:coverage

Check how much of the code do tests cover. To see it visually and explore what is not covered open `./coverage/lcov-report/index.html` in your browser.

##### format

Formats the code using Prettier by rules defined in Pretier config file.

##### format:check

Checks if all the formating follows the defined rules.

##### storybook

Starts Storybook locally on port 6006, http://localhost:6006/

##### build-storybook

Builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

## Travis

Continues Deployment is triggered on tag change. On every commit Travis will run tests, format check, Storybook build, and component build. It needs to be built with Node >= 9 for everything to pass.

---

### TODO

- Column sorting when pagination enabled
- Sticky header
- Special cases (value is an array, ...)
- Continues integration
- Better documentation and user manual
- Search
- Resizable header/columns
- Filters
- Improving the component
- Cleanup of node packages
- Subscribe for live updates
- Context where global info can be set, ex. theming
- Tutorials
- pre-commit hooks (run tests and prettier before every commit)
- add linter: eslint

For more about TableQL visit **[Official React TableQL Storybook](https://danilo-zekovic.github.io/react-tableql/)** and explore all the options, and see some demo examples.
