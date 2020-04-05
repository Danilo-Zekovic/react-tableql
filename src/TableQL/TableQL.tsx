import React, { useState, FC } from 'react'

import '../index.css'

import Pagination, { PaginationData } from '../components/Pagination/Pagination'
import Table, { Styles, ColumnConfig } from '../components/Table/Table'
import ErrorBoundary from '../components/ErrorBaundary/ErrorBaundary'
import Loader from '../components/Loader/Loader'

export interface PaginationConfig {
  pageLimit?: number
  pageNeighbors?: number
  currentPage?: number
  onPageChanged?: (
    currentPage?: number,
    totalPages?: number,
    pageLimit?: number,
    totalRecords?: number,
  ) => void
  styles?: string
}

export interface Props {
  data: object[]
  loading?: boolean
  error?: Error
  errorMessage?: string
  columns?: (string | ColumnConfig)[]
  pagination?: PaginationConfig | boolean
  styles?: Styles
  onRowClick?: (data: { [key: string]: unknown }) => void
  sort?: boolean
  debug?: boolean
}

const TableQL: FC<Props> = ({
  pagination,
  debug,
  errorMessage,
  columns,
  styles,
  onRowClick,
  loading = false,
  error,
  data,
  sort,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(
    pagination && typeof pagination !== 'boolean' && pagination.currentPage
      ? pagination.currentPage
      : 1,
  )

  const [displayData, setDisplayData] = useState<any[]>([])
  const [fullData, setFullData] = useState<any[]>([])

  // traverse data to find the array of objects and return it
  const traverseData = (data: any) => {
    log('Traverse data called.')
    for (let key in data) {
      if (Array.isArray(data)) {
        return data
      } else {
        return traverseData(data[key])
      }
    }
  }

  const getHeaderLabels = (data: any) => {
    log('Get header labels.')
    let labels = [] as string[]
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
  }: PaginationData) => {
    log(
      `On page changed: Current Page > ${currentPage}, Total Pages > ${totalPages}, Page Limit > ${pageLimit}, Total Records > ${totalRecords}`,
    )
    if (currentPage) setCurrentPage(currentPage)

    // expose the values to parent if onPageChanged is passed as part of pagination
    if (typeof pagination === 'object' && pagination.onPageChanged) {
      pagination.onPageChanged(currentPage, totalPages, pageLimit, totalRecords)
    }
  }

  // when debug true log messages and data
  const log = (tag: string, load = '' as any) => {
    if (debug) {
      console.log(tag, load)
    }
  }

  const onSort = (column: string | ColumnConfig) => {
    log('Sort by column: ', column)

    const property = typeof column === 'string' ? column : column.id
    let newOrder = [...fullData] as any

    if (
      typeof column !== 'string' &&
      column.sort &&
      typeof column.sort === 'function'
    ) {
      newOrder = column.sort(newOrder, property)
    } else if (
      (typeof column !== 'string' &&
        column.sort &&
        typeof column.sort === 'boolean') ||
      sort
    ) {
      newOrder.sort((a: unknown[], b: unknown[]) =>
        a[property] > b[property] ? 1 : -1,
      )
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
    return <Loader />
  }
  if (error) {
    log('Error: ', error)
    return (
      <p>{errorMessage || `Error while loading TableQL: ${error.message}`}</p>
    )
  }

  // TODO consider having something different when there is no data compared to empty array
  if (data.length === 0) {
    log('No data found!', data.length)
    return <p>{`No data found!`}</p>
  }

  log('Data: ', data)

  // let displayData = traverseData(data)
  let traversedData = traverseData(data)
  // TODO this is not going to be good, potential infinte loop here
  if (displayData.length === 0) {
    setDisplayData(traversedData)
  }

  if (fullData.length === 0) {
    setFullData(traversedData)
  }

  let allData = traversedData
  let dataKeys = columns || getHeaderLabels(traversedData[0]) // TODO probably should rename this variable as it does not hold only keys

  let pageLimit = 10
  if (pagination) {
    pageLimit =
      typeof pagination !== 'boolean' && pagination.pageLimit
        ? pagination.pageLimit
        : 10
    const offset =
      (currentPage - 1) *
      (typeof pagination !== 'boolean' && pagination.pageLimit
        ? pagination.pageLimit
        : pageLimit)

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
    log('No data found!', displayData)
    return <p>{`No data found!`}</p>
  }
  return (
    <ErrorBoundary>
      <Table
        displayData={displayData}
        // @ts-ignore
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
          pageNeighbors={
            typeof pagination !== 'boolean'
              ? pagination.pageNeighbors
              : undefined
          }
          selectedPage={currentPage}
          onPageChanged={(returnedData: PaginationData) =>
            onPageChanged(returnedData)
          }
          styles={
            typeof pagination !== 'boolean' ? pagination.styles : undefined
          }
          log={log}
        />
      )}
    </ErrorBoundary>
  )
}

export default TableQL
