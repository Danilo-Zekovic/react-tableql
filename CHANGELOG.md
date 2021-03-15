# Changelog

## next

- Refactor, break table into smaller more independent components. Export them all so user can use any of them independently.
- TableQLProvider - React provider that will hold the data about table configuration in one place
- themes and configuring the table in one place for the entire app

## v0.2.1

bugfix:

- fix on data change table does not refresh displayed data ([#62](https://github.com/Danilo-Zekovic/react-tableql/issues/62))
- fix unique key for TableCell

## v0.2.0

update:

- bump `react` to v17

## v0.1.1

bugfix:

- fix type for query prop so it accepts string

## v0.1.0

new:

- TypeScript
- Loader component `import { Loader } from 'react-tableql'`
- `onEmtpy` option/prop

breaking:

- move from `react-apollo` to `@apollo/client`
- `onPageChanged` pagination configuration parameter takes in the function with one object containing four values as parameter, instead of four separate values

update:

- move `graphql` dependency from v14 to v15

bugfix:

- fix so TableQL component can properly handle empty array nested in an object

## v0.1.0-beta.7

bugfix:

- fix spelling of `@apollo/client` in webpack externals

## v0.1.0-beta.6

new:

- onEmpty option added

## v0.1.0-beta.5

breaking:

- move from `react-apollo` to `@apollo/client`

new:

- update `graphql` dependency from v14 to v15

## v0.1.0-beta.4

new:

- export Loader component

bugfix:

- when document does not exist do not try render of TableQL

## v0.1.0-beta.3

bugfix:

- when windows does not exist do not try render of TableQL

## v0.1.0-beta.2

bugfix:

- fix so TableQL component can properly handle empty array nested in an object

## v0.1.0-beta.1

breaking:

- onPageChanged pagination configuration parameter takes in the function with one object containing four values as parameter, instead of four separate values

## v0.1.0-beta.0

new:

- TypeScript
