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

##### bootstrap

Install all the dependencies for all the packages.

##### bootstrap:clean

Before installing all the dependencies first remove all the lock files and node_modules.

##### dev

Run all the example apps and the libraries in the watch mode (hot reload). All the process will be started in the background. NOTE: for this command to work [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) needs to be installed globally!

Optional flags:

- `-i` install dependencies.
- `-c` clean node packages and lock files before installing dependencies.
- `-h` help; list all the options

##### devLife

Run Docker container with all examples and libraries in the watch mode (see `dev` command). Note: Docker has to be installed for the script to work.

##### graph

To see the graph of relations in the monorepo.

##### lint

Run eslint and fix all auto fixable problems.

##### build

Builds production ready component using Webpack.

##### test

Run all the tests, in every example and library.

##### format

Formats the code using Prettier by rules defined in Prettier config file.

##### format:check

Checks if all the formatting follows the defined rules. Throw error if rules are not followed.

## Development

When doing development on the component on the local machine there are three recommended approaches:

1. Dev mode
2. Docker container
3. Manual setup

Before I explain all three of the approaches it is important to understand all of the components in thi monorepo project. There are two major parts `examples` and `lib`. In examples one can locate all of the example apps in different react frameworks (next.js, create react app...), and the API app that is feeding those front-end apps. And in the lib folder we can find the react-tableql library source code (more libraries in the future).

#### Dev mode

Requirements: `pm2`, `docker`

run `yarn dev` or `yarn dev -i` (if dependencies are not installed), it will start all the example apps and the component itself in the background. All the changes will show automatically in example apps. TO quit it press `Ctrl` + `C`, it will stop all the processes in the background.

#### Docker

Requirements: `docker`

Run `yarn devLife`, it will start the dev mode in docker container using docker-compose.

#### Manual setup

First install all the dependencies `yarn bootstrap`. Next, go to `./lib/react-tableql` and run the component in watch mode `yarn dev`. To see the changes to the library, run one of the example apps or all of them. To run the example apps go to `./examples` folder, first start the `api` app. In `./examples/api` run `yarn start`. Then go to the example app of your choice and run it (See README.md located in respective example app).
