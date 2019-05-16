import React, { useState } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import './index.css'

import Pagination from './Pagination'
import Table from './Table'
import ErrorBoundary from './ErrorBaundary'

const TableQL = ({
  pagination,
  debug,
  query,
  errorMessage,
  columns,
  styles,
  onRowClick,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(
    pagination && pagination.currentPage ? pagination.currentPage : 1,
  )

  // traverse data to find the array of objects and return it
  const traverseData = data => {
    log('Traverse data called.')
    for (let key in data) {
      if (Array.isArray(data)) {
        return data
      } else {
        return traverseData(data[key])
      }
    }
  }

  const getHeaderLabels = data => {
    log('Get header labels.')
    let labels = []
    for (let key in data) {
      // exception to eliminate meta fields
      if (!key.includes('__')) {
        labels.push(key)
      }
    }

    return labels
  }

  const onPageChanged = ({
    currentPage,
    totalPages,
    pageLimit,
    totalRecords,
  }) => {
    log(
      `On page changed: Current Page > ${currentPage}, Total Pages > ${totalPages}, Page Limit > ${pageLimit}, Total Records > ${totalRecords}`,
    )
    setCurrentPage(currentPage)

    // expose the values to parent if onPageChanged is passed as part of pagination
    if (pagination.onPageChanged) {
      pagination.onPageChanged(currentPage, totalPages, pageLimit, totalRecords)
    }
  }

  // when debug true log messages and data
  const log = (tag, load = '') => {
    if (debug) {
      console.log(tag, load)
    }
  }

  log('Props: ', {
    pagination,
    debug,
    query,
    errorMessage,
    columns,
    styles,
    onRowClick,
    ...props,
  })

  return (
    <ErrorBoundary>
      <Query
        query={typeof query === 'string' ? gql(query) : query}
        {...props} // skip, pollInterval, notifyOnNetworkStatusChange, onError, onCompleted, variables
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) {
            log('Loading: ', loading)
            return <p>{`Loading...`}</p>
          }
          if (error) {
            log('Error: ', error)
            return <p>{errorMessage || 'Error while loading TableQL'}</p>
          }

          log('Data: ', data)

          if (!data) {
            return <p>{`No data found!`}</p>
          }

          let displayData = traverseData(data)
          let allData = displayData
          let dataKeys = columns || getHeaderLabels(displayData[0])

          let pageLimit
          if (pagination) {
            pageLimit = pagination.pageLimit || 10
            const offset =
              (currentPage - 1) *
              (pagination.pageLimit ? pagination.pageLimit : pageLimit)

            displayData = displayData.slice(offset).slice(0, pageLimit)
          }

          log('Data to be displayed (array): ', displayData)
          log('Data keys: ', dataKeys)

          // TODO probably bad idea not to display empty table
          if (!displayData || displayData.length == 0 || !data) {
            log('No data found!')
            return <p>{`No data found!`}</p>
          }
          return (
            <>
              <Table
                displayData={displayData}
                dataKeys={dataKeys}
                styles={styles}
                log={log}
                onRowClick={onRowClick}
              />

              {pagination && (
                <Pagination
                  totalRecords={allData.length}
                  pageLimit={pageLimit || 10}
                  pageNeighbors={pagination.pageNeighbors}
                  selectedPage={currentPage}
                  onPageChanged={returnedData => onPageChanged(returnedData)}
                  styles={pagination.styles}
                  log={log}
                />
              )}
            </>
          )
        }}
      </Query>
    </ErrorBoundary>
  )
}

TableQL.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  columns: PropTypes.array,
  pagination: PropTypes.oneOfType([
    PropTypes.shape({
      pageLimit: PropTypes.number,
      pageNeighbors: PropTypes.number,
      currentPage: PropTypes.number,
      onPageChanged: PropTypes.func,
      styles: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
  errorMessage: PropTypes.string,
  styles: PropTypes.shape({
    table: PropTypes.string,
    thead: PropTypes.string,
    theadTr: PropTypes.string,
    theadTh: PropTypes.string,
    tbody: PropTypes.string,
    tbodyTr: PropTypes.string,
    tbodyTd: PropTypes.string,
  }),
  onRowClick: PropTypes.func,
  debug: PropTypes.bool,
}

export default TableQL
