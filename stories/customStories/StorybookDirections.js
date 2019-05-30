import React from 'react'

const StorybookDirections = () => (
  <div style={{ width: '960px' }}>
    <h1>Storybook Directions</h1>
    <p>
      "Storybook is an open source tool for developing UI components in
      isolation for React, Vue, and Angular. It makes building stunning UIs
      organized and efficient."
    </p>

    <a href="https://storybook.js.org/" target="blank">
      <h3>Visit official Storybook webpage!</h3>
    </a>

    <p>
      Most of the stories/sections of this Storybook presentation have in the
      lower part of the screen four tabs: Actions, JSX, Readme, and
      Accessability. They offer additional information about the mode/option
      that TableQL has to offer. Bellow you will find short explanations of each
      tab:
    </p>

    <h3>
      <b>Actions</b>
    </h3>
    <p>
      Displays all of the logs that happen. You can see it debug mode and error
      boundary stories
    </p>

    <h3>
      <b>JSX</b>
    </h3>
    <p>
      Represents the code needed to achieve given example. Note JSX and
      JavaScript in that tab is not the latest JavaScript as it transformed into
      ES5
    </p>

    <h3>
      <b>Readme</b>
    </h3>
    <p>
      Coming soon! Will contain additional details and explanations about given
      example and how to achieve it.
    </p>

    <h3>
      <b>Accessability</b>
    </h3>
    <p>
      Shows is the UI component accessible. Also, you can see by which rules it
      is or it is not.
    </p>
  </div>
)

export default StorybookDirections
