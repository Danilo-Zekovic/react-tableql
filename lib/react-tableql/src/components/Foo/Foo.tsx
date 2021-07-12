import React, { FC, useEffect } from 'react'

import logStuff from '../../utils/logStuff'

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
    <div onClick={halo} className={`foo Foo`}>
      Hello World! {foo} is the best, but you knew that already.
    </div>
  )
}

export default Foo
