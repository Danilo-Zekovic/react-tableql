import { useEffect } from 'react'
import TableQL, { useTableQL, Foo } from 'react-tableql'
import logo from './logo.svg'
import './App.css'

function App() {
  // TODO rm
  const { theme } = useTableQL()

  // TODO rm
  useEffect(() => {
    console.log('THEME', theme)
  }, [theme])

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

      <div style={{ margin: '10rem' }}>
        <TableQL />
      </div>
    </div>
  )
}

export default App
