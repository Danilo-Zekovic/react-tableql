import React, { FC, useEffect } from 'react'

import { logStuff } from '../../utils'

import './Foo.css'

interface FooProps {
  foo: string
}

const Foo: FC<FooProps> = ({ foo }) => {
  const halo = (): void => {
    logStuff('foo bar')
  }

  useEffect(() => {
    console.log('hi', foo)
  }, [foo])

  return (
    <div className={`foo Foo`}>
      <button onClick={halo}>Click me</button>
      Hello World! {foo} is the best, but you knew that already.
    </div>
  )
}

export default Foo
