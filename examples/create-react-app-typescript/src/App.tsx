import { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import TableQL, { useTableQL, Foo } from 'react-tableql'

import logo from './logo.svg'
import './App.css'

const GET_BOOKS = gql`
  query Books {
    books {
      author
      title
      id
      edition
      price
      yearWritten
    }
  }
`

function App() {
  // TODO rm
  const { theme } = useTableQL()
  const { data } = useQuery(GET_BOOKS)

  // TODO rm
  useEffect(() => {
    // console.log('THEME', theme)
  }, [theme])

  // TODO rm
  useEffect(() => {
    // console.log('BOOKS', data)
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Foo foo="bar" />

      <div style={{ margin: '7rem' }}>
        <TableQL
          data={data}
          onRowClick={(data: object) =>
            console.log('ROW CLICKED, here is data: ', data)
          }
          columns={[
            'author',
            {
              id: 'title',
              label: 'Book Title',
              component: (value) => <h6>{String(value).toUpperCase()}</h6>,
            },
            'yearWritten',
            'price',
            {
              id: 'custom',
              customColumn: true,
              component: (data) => (
                <button
                  onClick={() =>
                    console.log(
                      'custom column button click, and here is the data:',
                      data,
                    )
                  }
                >
                  Click me
                </button>
              ),
            },
          ]}
        />
      </div>
    </div>
  )
}

export default App
