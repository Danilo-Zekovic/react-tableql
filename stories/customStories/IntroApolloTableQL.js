import React from 'react'
import { linkTo } from '@storybook/addon-links'

import TableQL from '../../src/TableQL'

const PROPS = [
  {
    prop: 'query',
    required: 'Yes',
    type: 'String',
    defaultValue: '',
    description: 'GraphQL query',
  },
  {
    prop: 'loading',
    required: 'No',
    type: 'Boolean',
    defaultValue: 'false',
    description: 'Indicates that data is loading',
  },
  {
    prop: 'error',
    required: 'No',
    type: 'Error',
    defaultValue: "''",
    description: 'GraphQL query',
  },
  {
    prop: 'columns',
    required: 'No',
    type: 'Array',
    defaultValue: 'null',
    description: 'Customization of columns',
  },
  {
    prop: 'pagination',
    required: 'No',
    type: 'Object or Boolean',
    defaultValue: 'false',
    description: 'Adds pagination',
  },
  {
    prop: 'onRowClick',
    required: 'No',
    type: 'Function',
    defaultValue: 'null',
    description: 'Handle row click',
  },
  {
    prop: 'styles',
    required: 'No',
    type: 'Object',
    defaultValue: '{}',
    description: 'Change the look of part of a table',
  },
  {
    prop: 'errorMessage',
    required: 'No',
    type: 'String',
    defaultValue: "''",
    description: 'Custom error message',
  },
  {
    prop: 'debug',
    required: 'No',
    type: 'Boolean',
    defaultValue: 'false',
    description: 'Turns on and off the debug mode',
  },
]

const IntroApolloTableQL = () => (
  <div style={{ width: '960px' }}>
    <h1>ApolloTableQL</h1>
    <p>
      ApolloTableQL is TableQL wrapped with Apollo Client Query and its logic.
      It is a react component that fetches data using Apollo, and then parses
      data and renders it into grid/table.
    </p>
    <p>To import it all you need to do is:</p>
    <code>import {`{ ApolloTableQL }`} from 'react-tableql'</code>
    <p>And use it:</p>
    <code>{`<ApolloTableQL query={QUERY} />`}</code>
    <h3>IMPORTANT</h3>
    <p>
      All the props that TabelQL has are also applicable to ApolloTableQL.
      ApolloTableQL is TableQL wrapped in Apollo Client Query component.
    </p>
    <h2>Props</h2>
    <p>
      ApolloTableQL are same as for TableQL except instead of `data` there
      `query`
    </p>
    <TableQL
      data={PROPS}
      styles={{ tbodyTr: 'customRow TableQL-tr', theadTr: 'customRow' }}
    />
    * this table is created with TableQL :)
    <h2>What next?</h2>
    <p>
      Demonstration of component and all of its functionality will be done with{' '}
      <a onClick={linkTo('apollo-tableql-basic--default')}>ApolloTableQL</a>
      in its own section.
    </p>
    <p>
      Rest of TableQL section will just demonstrate how to wrap it with axios
      and Apollo. Shell we?
    </p>
  </div>
)

export default IntroApolloTableQL
