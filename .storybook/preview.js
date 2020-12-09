import { addDecorator, addParameters } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
// import { withA11y } from '@storybook/addon-a11y'
import { addReadme } from 'storybook-readme'
// all the console.logs, errors, warnings, and so on print to the Actions
import '@storybook/addon-console'
import { withConsole } from '@storybook/addon-console'
// mock Apollo, it uses graphql-tools in the background
// import apolloStorybookDecorator from 'apollo-storybook-react'
import apolloStorybookDecorator from './apollo-react'
import { mocks } from './../__mocks__/mocks'
import { typeDefs } from './../__mocks__/typeDefs' // set jsx decorator for all the stories

addDecorator(jsxDecorator)

// when logs are shown in actions add the tag from which story originates the log
addDecorator((storyFn, context) => withConsole()(storyFn)(context))

// compliance of stories with web accessibility standards
// addDecorator(withA11y)

// adds possibility to add docs in markdown format for each story
addDecorator(addReadme)

// mock Apollo client
addDecorator(
  apolloStorybookDecorator({
    typeDefs,
    mocks,
  }),
)

// setup global parameters
addParameters({
  options: {
    name: 'React TableQL',
    showPanel: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: '|',
    // theme: {
    // brandImage: square, // path to image
    // },
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})
