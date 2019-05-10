module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TableQL = function TableQL(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.pagination && props.pagination.currentPage ? props.pagination.currentPage : 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1]; // traverse data to find the array of objects and return it


  var traverseData = function traverseData(data) {
    log('Traverse data called.');

    for (var key in data) {
      if (Array.isArray(data)) {
        return data;
      } else {
        return traverseData(data[key]);
      }
    }
  };

  var getHeaderLabels = function getHeaderLabels(data) {
    log('Get header labels.');
    var labels = [];

    for (var key in data) {
      // exception to eliminate meta fields
      if (!key.includes('__')) {
        labels.push(key);
      }
    }

    return labels;
  };

  var _onPageChanged = function onPageChanged(_ref) {
    var currentPage = _ref.currentPage,
        totalPages = _ref.totalPages,
        pageLimit = _ref.pageLimit,
        totalRecords = _ref.totalRecords;
    log("On page changed: Current Page > ".concat(currentPage, ", Total Pages > ").concat(totalPages, ", Page Limit > ").concat(pageLimit, ", Total Records > ").concat(totalRecords));
    setCurrentPage(currentPage); // expose the values to parent if onPageChanged is passed as part of pagination

    if (props.pagination.onPageChanged) {
      props.pagination.onPageChanged(currentPage, totalPages, pageLimit, totalRecords);
    }
  }; // when debug true log messages and data


  var log = function log(tag) {
    var load = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (props.debug) {
      console.log(tag, load);
    }
  };

  log('Props: ', props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(props.query),
    variables: props.variables,
    skip: props.skip,
    pollInterval: props.pollInterval || 0
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data,
        startPolling = _ref2.startPolling,
        stopPolling = _ref2.stopPolling;

    if (loading) {
      log('Loading: ', loading);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Loading TableQL...");
    }

    if (error) {
      log('Error: ', error);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, props.errorMessage || 'Error while loading TableQL');
    }

    log('Data: ', data);
    var displayData = traverseData(data);
    var allData = displayData;
    var dataKeys = props.columns || getHeaderLabels(displayData[0]);
    var pageLimit;

    if (props.pagination) {
      pageLimit = props.pagination.pageLimit || 10;
      var offset = (currentPage - 1) * (props.pagination.pageLimit ? props.pagination.pageLimit : pageLimit);
      displayData = displayData.slice(offset).slice(0, pageLimit);
    }

    log('Data to be displayed (array): ', displayData);
    log('Data keys: ', dataKeys); // TODO probably bad idea not to display empty table

    if (!displayData || displayData.length == 0) {
      log('No data found!');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No data found!");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
      displayData: displayData,
      dataKeys: dataKeys,
      styles: props.styles,
      log: log
    }), props.pagination && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_4__["default"], {
      totalRecords: allData.length,
      pageLimit: pageLimit || 10,
      pageNeighbors: props.pagination.pageNeighbors,
      selectedPage: currentPage,
      onPageChanged: function onPageChanged(returnedData) {
        return _onPageChanged(returnedData);
      },
      styles: props.pagination.styles,
      log: log
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TableQL);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danilo/DELETE/react-tableql/node_modules/react-apollo/react-apollo.esm.js'");

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danilo/DELETE/react-tableql/node_modules/graphql-tag/src/index.js'");

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(54);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(56)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// Module
exports.push([module.i, ".TableQL {\n  background-color: transparent;\n  width: 100%;\n  margin: 0.5rem 0;\n  text-align: left;\n  padding: 0 0.4rem;\n  border-collapse: collapse;\n  display: table;\n  border-spacing: 2px;\n  border-width: gray;\n}\n\n.TableQL-thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-thead-th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.TableQL-tr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n}\n\n.TableQL-thead-th {\n  text-align: inherit;\n  font-weight: bold;\n}\n\n.TableQL-tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-td,\n.TableQL-thead-th {\n  padding: 0.69rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  display: table-cell;\n  vertical-align: inherit;\n}\n\n/* PAGINATION */\n.PaginationContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n/* ========== */\n", ""]);



/***/ }),

/***/ 55:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danilo/DELETE/react-tableql/node_modules/css-loader/dist/runtime/api.js'");

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/danilo/DELETE/react-tableql/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import PropTypes from 'prop-types'

var LEFT_PAGE = 'LEFT';
var RIGHT_PAGE = 'RIGHT';
/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */

var range = function range(from, to) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var i = from;
  var range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}; // pageNeighbors can be: 0, 1 or 2


var Pagination = function Pagination(_ref) {
  var _ref$totalRecords = _ref.totalRecords,
      totalRecords = _ref$totalRecords === void 0 ? null : _ref$totalRecords,
      _ref$pageLimit = _ref.pageLimit,
      pageLimit = _ref$pageLimit === void 0 ? 10 : _ref$pageLimit,
      _ref$pageNeighbors = _ref.pageNeighbors,
      pageNeighbors = _ref$pageNeighbors === void 0 ? 0 : _ref$pageNeighbors,
      onPageChanged = _ref.onPageChanged,
      log = _ref.log,
      _ref$selectedPage = _ref.selectedPage,
      selectedPage = _ref$selectedPage === void 0 ? 1 : _ref$selectedPage,
      styles = _ref.styles;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(selectedPage),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var totalPages = Math.ceil(totalRecords / pageLimit);
  pageNeighbors = typeof pageNeighbors === 'number' ? Math.max(0, Math.min(pageNeighbors, 2)) : 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var paginationData = {
      currentPage: currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords
    };
    log('Pagination Return Data: ', _objectSpread({}, paginationData));
    onPageChanged(paginationData);
  }, [currentPage]);

  var gotoPage = function gotoPage(page) {
    setCurrentPage(Math.max(0, Math.min(page, totalPages)));
  };

  var handleClick = function handleClick(page) {
    log('Handle pagination page click, page: ', page);
    gotoPage(page);
  };

  var handleMoveLeft = function handleMoveLeft() {
    log('Handle move left');
    gotoPage(currentPage - 1);
  };

  var handleMoveRight = function handleMoveRight() {
    log('Handle move left');
    gotoPage(currentPage + 1);
  };
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


  var fetchPageNumbers = function fetchPageNumbers() {
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    var totalNumbers = pageNeighbors * 2 + 3;
    var totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      var startPage = Math.max(2, currentPage - pageNeighbors);
      var endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

      var _pages = range(startPage, endPage);
      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */


      var hasLeftSpill = startPage > 2;
      var hasRightSpill = totalPages - endPage > 1;
      var spillOffset = totalNumbers - (_pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill:
          {
            var extraPages = range(startPage - spillOffset, startPage - 1);
            _pages = [LEFT_PAGE].concat(_toConsumableArray(extraPages), _toConsumableArray(_pages));
            break;
          }
        // handle: (1) {2 3} [4] {5 6} > (10)

        case !hasLeftSpill && hasRightSpill:
          {
            var _extraPages = range(endPage + 1, endPage + spillOffset);

            _pages = [].concat(_toConsumableArray(_pages), _toConsumableArray(_extraPages), [RIGHT_PAGE]);
            break;
          }
        // handle: (1) < {4 5} [6] {7 8} > (10)

        case hasLeftSpill && hasRightSpill:
        default:
          {
            _pages = [LEFT_PAGE].concat(_toConsumableArray(_pages), [RIGHT_PAGE]);
            break;
          }
      }

      log('Fetch page numbers, pages: ', _pages);
      return [1].concat(_toConsumableArray(_pages), [totalPages]);
    }

    log('Fetch page numbers, pages: ', pages);
    return range(1, totalPages);
  };

  if (!totalRecords || totalPages === 1) return null;
  var pages = fetchPageNumbers();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styles ? styles : 'PaginationContainer'
  }, pages.map(function (page, index) {
    if (page === LEFT_PAGE) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "aria-label": "Previous",
        onClick: handleMoveLeft,
        key: index
      }, "\xAB");
    }

    if (page === RIGHT_PAGE) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: handleMoveRight,
        "aria-label": "Next",
        key: index
      }, "\xBB");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: index,
      className: "".concat(currentPage === page ? ' active' : ''),
      onClick: function onClick() {
        return handleClick(page);
      }
    }, page);
  })));
}; // Pagination.propTypes = {
//   totalRecords: PropTypes.number.isRequired,
//   pageLimit: PropTypes.number,
//   pageNeighbors: PropTypes.number,
//   onPageChanged: PropTypes.func
// };


/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Table = function Table(_ref) {
  var log = _ref.log,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? {} : _ref$styles,
      displayData = _ref.displayData,
      dataKeys = _ref.dataKeys;

  /*
    Formating passed string to be title case, where each word starts with a upper case letter
  */
  var formatLabel = function formatLabel(label) {
    log('Format label called.'); // insert spaces in between words in camel case

    var formatedLabel = label.replace(/([a-z\d])([A-Z])/g, '$1' + ' ' + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + ' ' + '$2').replace(/([-,_,~,=,+])/g, ' '); // replace unwanted characters with spaces
    // title case the label (make first letters of words capital)

    formatedLabel = formatedLabel.split(' ');
    formatedLabel = formatedLabel.map(function (label) {
      return label.charAt(0).toUpperCase() + label.slice(1);
    });
    return formatedLabel.join(' ');
  };

  var getNodeValue = function getNodeValue(column, data) {
    var value = data; // will hold the final return value

    var keys = column.id ? column.id.split('.') : column.split('.');
    keys.forEach(function (key) {
      value = value[key];
    });
    return String(value);
  };

  var renderTableRows = function renderTableRows(displayData, dataKeys) {
    return displayData.map(function (data) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: JSON.stringify(data),
        className: styles.tbodyTr || 'TableQL-tr'
      }, dataKeys.map(function (column, columnIndex) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: styles.tbodyTd || 'TableQL-td',
          key: "".concat(column + columnIndex)
        }, getNodeValue(column, data));
      }));
    });
  };

  var renderTableHeader = function renderTableHeader(dataKeys) {
    return dataKeys.map(function (column, columnIndex) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: styles.theadTh || 'TableQL-thead-th',
        key: "".concat(column + columnIndex)
      }, typeof column === 'string' ? formatLabel(column) : column.label);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: styles.table || 'TableQL'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: styles.thead || 'TableQL-thead'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    className: styles.theadTr || 'TableQL-tr'
  }, renderTableHeader(dataKeys))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: styles.tbody || 'TableQL-tbody'
  }, renderTableRows(displayData, dataKeys)));
};

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

/******/ });