import React, { FC, useEffect } from 'react'
import { TableProvider, useTableState } from '../../TableProvider'

import { logStuff } from '../../utils'

import './Foo.css'

interface FooProps {
  foo: string
}
// TODO remove this component entirely
const Foo: FC<FooProps> = ({ foo }) => {
  const { theme } = useTableState()

  const halo = (): void => {
    logStuff('foo bar')
  }

  useEffect(() => {
    console.log('hi', foo, theme)
  }, [foo, theme])

  return (
    <div className={`foo Foo`}>
      <button onClick={halo}>Click me</button>
      Hello World! {foo} is the best, but you knew that already.
    </div>
  )
}

const FooWithProvider: FC<FooProps> = ({ foo }) => {
  return (
    <TableProvider>
      <Foo foo={foo} />
    </TableProvider>
  )
}

export default FooWithProvider
