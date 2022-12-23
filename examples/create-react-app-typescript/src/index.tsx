import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { TableQLProvider } from 'react-tableql'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  uri: 'http://localhost:8080/',
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <TableQLProvider theme={{ primary: 'tomato' }}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </TableQLProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
