import React, { FC } from 'react'

interface FooProps {
  foo: string
}

const Foo: FC<FooProps> = ({ foo }) => {
  return <div>Hello World! {foo} is the best, but you knew that already</div>
}

export default Foo
