import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'

import TableCell from './TableCell'

// TODO replace snapshot testing with some more appropriate tests.

describe('<TableCell>', () => {
  it('default snapshot', () => {
    const tr = document.createElement('tr')
    const { container } = render(
      <TableCell column={{ id: 'foo' }} data={{ foo: 'Foo' }} />,
      {
        container: document.body.appendChild(tr),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('pass component to column', () => {
    const tr = document.createElement('tr')
    const { container } = render(
      <TableCell
        column={{
          id: 'foo',
          component: (value): ReactNode => (
            <h6>{String(value).toUpperCase()}</h6>
          ),
        }}
        data={{ foo: 'Foo' }}
      />,
      {
        container: document.body.appendChild(tr),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('custom column snapshot', () => {
    const tr = document.createElement('tr')
    const { container } = render(
      <TableCell
        column={{
          id: 'foo',
          customColumn: true,
          component: (): ReactNode => <div>Foo bar</div>,
        }}
        data={{ foo: 'Foo' }}
      />,
      {
        container: document.body.appendChild(tr),
      },
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('component missing throw error', () => {
    const tr = document.createElement('tr')
    expect(() =>
      render(
        <TableCell
          column={{
            id: 'foo',
            customColumn: true,
          }}
          data={{ foo: 'Foo' }}
        />,
        {
          container: document.body.appendChild(tr),
        },
      ),
    ).toThrow(
      new Error(`When customColumn true, component property must be provided!`),
    )
  })
})
