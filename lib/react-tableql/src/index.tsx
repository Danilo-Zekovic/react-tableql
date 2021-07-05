import React, { FC, useEffect } from 'react'

interface FooProps {
  foo: string
}

const Foo: FC<FooProps> = ({ foo }) => {
  const halo = (): void => {
    console.log('foo bar')
  }

  useEffect(() => {
    console.log('hi', foo)
  }, [foo])

  return (
    <div onClick={halo}>
      Hello World! {foo} is the best, but you knew that already.
    </div>
  )
}

export default Foo
