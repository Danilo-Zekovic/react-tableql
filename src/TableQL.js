import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.css'

import Pagination from './Pagination'
import Table from './Table'
import ErrorBoundary from './ErrorBaundary'

const TableQL = ({
  pagination,
  debug,
  errorMessage,
  columns,
  styles,
  onRowClick,
  loading = false,
  error = '',
  data,
  sort,
}) => {
  const [currentPage, setCurrentPage] = useState(
    pagination && pagination.currentPage ? pagination.currentPage : 1,
  )

  const [displayData, setDisplayData] = useState()
  const [fullData, setFullData] = useState()

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

  const onSort = column => {
    log('Sort by column: ', column)

    const property = typeof column === 'string' ? column : column.id
    let newOrder = [...fullData]

    if (column.sort && typeof column.sort === 'function') {
      newOrder = column.sort(newOrder, property)
    } else if ((column.sort && typeof column.sort === 'boolean') || sort) {
      newOrder.sort((a, b) => (a[property] > b[property] ? 1 : -1))
    }

    if (JSON.stringify(newOrder) === JSON.stringify(fullData)) {
      newOrder = newOrder.reverse()
    }

    setFullData(newOrder) // needed for pagination sort

    setDisplayData(newOrder)
  }

  log('Props: ', {
    pagination,
    debug,
    errorMessage,
    columns,
    styles,
    onRowClick,
  })

  if (loading) {
    log('Loading: ', loading)
    return <p>{`Loading...`}</p>
  }
  if (error) {
    log('Error: ', error)
    return (
      <p>{errorMessage || `Error while loading TableQL: ${error.message}`}</p>
    )
  }

  // TODO consider having something different when there is no data compared to empty array
  if (!data || data.length === 0) {
    log('No data found!')
    return <p>{`No data found!`}</p>
  }

  log('Data: ', data)

  // let displayData = traverseData(data)
  let traversedData = traverseData(data)

  if (!displayData) {
    setDisplayData(traversedData)
  }

  if (!fullData) {
    setFullData(traversedData)
  }

  let allData = traversedData
  let dataKeys = columns || getHeaderLabels(traversedData[0])

  let pageLimit
  if (pagination) {
    pageLimit = pagination.pageLimit || 10
    const offset =
      (currentPage - 1) *
      (pagination.pageLimit ? pagination.pageLimit : pageLimit)

    let dataToDisplay = displayData
      ? fullData.slice(offset).slice(0, pageLimit)
      : traversedData.slice(offset).slice(0, pageLimit)

    // it is ugly, but it will do it for now
    if (JSON.stringify(displayData) !== JSON.stringify(dataToDisplay)) {
      setDisplayData([...dataToDisplay])
    }
  }

  log('Data to be displayed (array): ', displayData)
  log('Data keys: ', dataKeys)

  // TODO probably bad idea not to display empty table
  if (!displayData || displayData.length == 0) {
    log('No data found!')
    return <p>{`No data found!`}</p>
  }
  return (
    <ErrorBoundary>
      <Table
        displayData={displayData}
        dataKeys={dataKeys}
        styles={styles}
        log={log}
        onRowClick={onRowClick}
        onSort={onSort}
        sort={sort}
      />

      {pagination && (
        <Pagination
          totalRecords={allData.length}
          pageLimit={pageLimit}
          pageNeighbors={pagination.pageNeighbors}
          selectedPage={currentPage}
          onPageChanged={returnedData => onPageChanged(returnedData)}
          styles={pagination.styles}
          log={log}
        />
      )}
    </ErrorBoundary>
  )
}

TableQL.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object).isRequired,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  error: PropTypes.object,
  errorMessage: PropTypes.string,
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
  sort: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  debug: PropTypes.bool,
}

export default TableQL
