import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const LEFT_PAGE = 'LEFT'
const RIGHT_PAGE = 'RIGHT'

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from
  const range = []

  while (i <= to) {
    range.push(i)
    i += step
  }

  return range
}

// pageNeighbors can be: 0, 1 or 2

const Pagination = ({
  totalRecords,
  pageLimit = 10,
  pageNeighbors = 0,
  onPageChanged,
  log,
  selectedPage = 1,
  styles,
}) => {
  const [currentPage, setCurrentPage] = useState(selectedPage)
  const totalPages = Math.ceil(totalRecords / pageLimit)

  pageNeighbors =
    typeof pageNeighbors === 'number'
      ? Math.max(0, Math.min(pageNeighbors, 2))
      : 0

  useEffect(() => {
    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    }

    log('Pagination Return Data: ', { ...paginationData })

    if (onPageChanged) {
      onPageChanged(paginationData)
    }
  }, [currentPage])

  const gotoPage = page => {
    setCurrentPage(Math.max(0, Math.min(page, totalPages)))
  }

  const handleClick = page => {
    log('Handle pagination page click, page: ', page)
    gotoPage(page)
  }

  const handleMoveLeft = () => {
    log('Handle move left')
    gotoPage(currentPage - 1)
  }

  const handleMoveRight = () => {
    log('Handle move left')
    gotoPage(currentPage + 1)
  }

  /**
   * Let's say we have 10 pages and we set pageNeighbors to 2
   * Given that the current page is 6
   * The pagination control will look like the following:
   *
   * (1) < {4 5} [6] {7 8} > (10)
   *
   * (x) => terminal pages: first and last page(always visible)
   * [x] => represents current page
   * {...x} => represents page neighbors
   */
  const fetchPageNumbers = () => {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbors * 2 + 3
    const totalBlocks = totalNumbers + 2

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbors)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors)

      let pages = range(startPage, endPage)

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1)
          pages = [LEFT_PAGE, ...extraPages, ...pages]
          break
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset)
          pages = [...pages, ...extraPages, RIGHT_PAGE]
          break
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE]
          break
        }
      }

      log('Fetch page numbers, pages: ', pages)

      return [1, ...pages, totalPages]
    }

    log('Fetch page numbers, pages: ', pages)

    return range(1, totalPages)
  }

  if (!totalRecords || totalPages === 1) return null

  const pages = fetchPageNumbers()

  return (
    <>
      <div
        className={styles ? styles : 'PaginationContainer'}
        data-testid="pagination"
      >
        {pages.map((page, index) => {
          if (page === LEFT_PAGE) {
            return (
              <button
                aria-label="Previous"
                onClick={handleMoveLeft}
                key={index}
              >
                &laquo;
              </button>
            )
          }
          if (page === RIGHT_PAGE) {
            return (
              <button onClick={handleMoveRight} aria-label="Next" key={index}>
                &raquo;
              </button>
            )
          }

          return (
            <button
              key={index}
              className={`${currentPage === page ? ' active' : ''}`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          )
        })}
      </div>
    </>
  )
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbors: PropTypes.number,
  onPageChanged: PropTypes.func,
  selectedPage: PropTypes.number,
  log: PropTypes.func,
  styles: PropTypes.string,
}

export default Pagination
