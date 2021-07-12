<div style="width: 100%; display: flex; align-items: center; flex-direction: column;">
  <div><img alt="react-tableql logo" src="docs/media/react-tableql-logo.png" style="margin: 0 20px 0 0; width: 300px;"></div>
  <h1>react-tableql</h1>
  <h6>React component for generating tables from data sets or GraphQL calls</h6>
  <div>
    <img alt="Travis CI Build" src="https://travis-ci.com/Danilo-Zekovic/react-tableql.svg?branch=master">
    <img alt="CodeCov" src="https://codecov.io/gh/Danilo-Zekovic/react-tableql/branch/master/graph/badge.svg">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/react-tableql.svg">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/react-tableql.svg?style=flat">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg">
    <img alt="PRs" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </div>
  <div>
    <img alt="Twitter Follow" src="https://img.shields.io/github/stars/Danilo-Zekovic/react-tableql.svg?style=social&label=Star">
    <img alt="Twitter Follow" src="https://img.shields.io/github/forks/Danilo-Zekovic/react-tableql.svg?style=social&label=Fork">
    <img alt="Twitter Follow" src="https://img.shields.io/github/watchers/Danilo-Zekovic/react-tableql.svg?style=social&label=Watch">
  </div>
  <div>
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/danilo_zekovic?label=Follow&style=social">
  </div>
</div>

##Installing and Using react-tableql

First install

`npm install react-tableql`
or
`yarn install react-tableql`

Then import it into your React component:

`import TableQL from 'react-tableql'`

or for ApolloTableQL:

`import { ApolloTableQL } from 'react-tableql'`

Component in which ApolloTableQL is used must be wrapped in Apollo Client Provider:

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

For more information how to setup Apollo Client please visit their Get Started page: https://www.apollographql.com/docs/react/essentials/get-started.html

## Docs

For detailed examples and API visit the documentation.

[Documentation Content](docs/README.md)

- Coming soon
