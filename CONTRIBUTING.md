# Contributing

Thank you for wanting to contribute and improve react-tableql for everyone!

Feel free to contact me with any questions or recommendations.

## Project setup

1. Fork and clone the repo
2. Install dependencies `npm install`
3. Create a branch for your changes `git checkout -b pr/branch-name`
4. Create something awesome!

## Thinks to consider

All new features must:

- not break existing features
- have unit tests (coverage over 90%)
- have Storybook demo/example
- have up to date README

## Scripts

##### start

Builds the component with hot reload. Useful when developing and working on the TableQL.

##### build

Builds production ready component using Webpack.

##### build:all

Builds production ready component using Webpack, and builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

##### test

Run all the tests.

##### test:watch

Runs tests in watch mode.

##### test:coverage

Check how much of the code do tests cover. To see it visually and explore what is not covered open `./coverage/lcov-report/index.html` in your browser.

##### format

Formats the code using Prettier by rules defined in Pretier config file.

##### format:check

Checks if all the formating follows the defined rules.

##### storybook

Starts Storybook locally on port 6006, http://localhost:6006/

##### build-storybook

Builds static Storybook files that will be used on GitHub pages as [online TableQL documentation and component demonstration](https://danilo-zekovic.github.io/react-tableql/).

## Development

When doing development on the component on local machine follow next steps to make your time more productive:

Start [Storybook]('https://storybook.js.org/'):

`npm run storybook`

Create a story in Storybook where you can test your feature, and to see if it will impact existing features.

OR

Hot-reload

```
npm start
```

Linking react-tableql in local:
First run

```
npm link
```

inside the react-tableql directory, then in the project that you wish to test the component

```
npm link react-tableql
```

Check is everything formatted by the set rules in Prettier:

```
npm run format:check
```

And to format everything run:

```
npm run format
```

My advice would be to set up your editor to format code on save.
