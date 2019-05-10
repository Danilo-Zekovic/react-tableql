import React from 'react'

const Setup = () => (
  <div>
    <h1>Getting Started</h1>
    <p>
      To use TableQL first you need to have React and ReactDOM added to the
      project, as well as Apollo Client setup. Then install TableQL:
    </p>
    <code>npm install --save react-tableql</code>
    <p>
      Once you installed the app all you need to do is import it and configure
      it to your own liking. <b>Happy Coding!</b>
    </p>
    <br />
    <blockquote>
      NOTE: Component in which is TableQL used must be wrapped in Apollo Client.
    </blockquote>
  </div>
)

export default Setup
