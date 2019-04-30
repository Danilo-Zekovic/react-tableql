import React from 'react'
import { linkTo } from '@storybook/addon-links'

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to TableQL</h1>
      <h3>Universal Apollo Client and GraphQL table renderer component.</h3>

      <p>
        On this Storybook presentation you will be able to learn how to use
        TableQL component, as well as to see all the different options that it
        has.
        <a onClick={linkTo('Getting Started')}>Get started with TableQL!</a>
      </p>
    </div>
  )
}

export default Welcome
