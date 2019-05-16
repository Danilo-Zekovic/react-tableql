import React from 'react'
import { render } from 'react-testing-library'
import { MockedProvider } from 'react-apollo/test-utils'
import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import TableQL from '../index'
import { testMocks } from '../../__mocks__/mocks'
import { GET_ALL_FILMS } from '../../__mocks__/queries'

const Default = () => <TableQL query={GET_ALL_FILMS} />
const Pagination = () => <TableQL query={GET_ALL_FILMS} pagination />
const CustomColumn = () => (
  <TableQL
    query={GET_ALL_FILMS}
    columns={[
      { id: 'episodeID', label: 'Episode Identification' },
      'releaseDate',
      'title',
    ]}
  />
)

const wait = time => new Promise(resolve => setTimeout(resolve, time))

describe('<TableQL>', () => {
  it('testing loading state', () => {
    const { container } = render(
      <MockedProvider mocks={testMocks} addTypename={false}>
        <TableQL query={GET_ALL_FILMS} />
      </MockedProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  it('snapshot default', async () => {
    const { container } = render(
      <MockedProvider mocks={testMocks} addTypename={false}>
        <Default />
      </MockedProvider>,
    )

    await wait(0)

    expect(container).toMatchSnapshot()
  })

  it('snapshot default pagination', async () => {
    const { container } = render(
      <MockedProvider mocks={testMocks} addTypename={false}>
        <Pagination />
      </MockedProvider>,
    )

    await wait(0)

    expect(container).toMatchSnapshot()
  })

  it('snapshot custom columns', async () => {
    const { container } = render(
      <MockedProvider mocks={testMocks} addTypename={false}>
        <CustomColumn />
      </MockedProvider>,
    )

    await wait(0)

    expect(container).toMatchSnapshot()
  })
})
