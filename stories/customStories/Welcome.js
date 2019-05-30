import React from 'react'
import { linkTo } from '@storybook/addon-links'

const Welcome = () => {
  return (
    <div style={{ width: '960px' }}>
      <h1>Welcome to TableQL</h1>
      <h3>Universal Apollo Client and GraphQL table renderer component.</h3>

      <p>
        On this Storybook presentation you will be able to learn how to use
        React TableQL components, as well as to see all the different options
        that they have.
        <a onClick={linkTo('Getting Started')}> Get started with TableQL!</a>
      </p>
      <br />
      <h4>
        Visit our{' '}
        <a
          href="https://github.com/Danilo-Zekovic/react-tableql"
          target="blank"
        >
          {' '}
          GitHub: react-tableql
        </a>
      </h4>
    </div>
  )
}

export default Welcome
