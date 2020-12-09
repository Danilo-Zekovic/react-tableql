;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1235: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(371),
        content = __webpack_require__(2190)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    1276: function (module, exports, __webpack_require__) {
      __webpack_require__(1277),
        __webpack_require__(1450),
        __webpack_require__(1451),
        __webpack_require__(1897),
        __webpack_require__(1939),
        __webpack_require__(1945),
        __webpack_require__(1996),
        __webpack_require__(2031),
        __webpack_require__(2041),
        (module.exports = __webpack_require__(2179))
    },
    1351: function (module, exports) {},
    1451: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      __webpack_require__(219)
    },
    173: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(360),
        __webpack_require__(765),
        __webpack_require__(766),
        __webpack_require__(238),
        __webpack_require__(2184),
        __webpack_require__(499),
        __webpack_require__(504),
        __webpack_require__(1230),
        __webpack_require__(1231),
        __webpack_require__(1232),
        __webpack_require__(365),
        __webpack_require__(2187),
        __webpack_require__(768),
        __webpack_require__(769),
        __webpack_require__(22)
      var react = __webpack_require__(3),
        react_default = __webpack_require__.n(react),
        Pagination = (__webpack_require__(1235), __webpack_require__(380)),
        Table = __webpack_require__(381)
      __webpack_require__(2198),
        __webpack_require__(500),
        __webpack_require__(2199),
        __webpack_require__(2200),
        __webpack_require__(2201),
        __webpack_require__(2202)
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj
              })(obj)
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function')
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i]
          ;(descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o
          })(o, p)
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived)
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor
            result = Reflect.construct(Super, arguments, NewTarget)
          } else result = Super.apply(this, arguments)
          return _possibleConstructorReturn(this, result)
        }
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function _assertThisInitialized(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                )
              return self
            })(self)
          : call
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o)
            })(o)
      }
      var ErrorBaundary_ErrorBoundary = (function (_Component) {
          !(function _inherits(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            ;(subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass)
          })(ErrorBoundary, _Component)
          var _super = _createSuper(ErrorBoundary)
          function ErrorBoundary() {
            var _this
            _classCallCheck(this, ErrorBoundary)
            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key]
            return (
              ((_this = _super.call.apply(
                _super,
                [this].concat(args),
              )).state = { hasError: !1, error: new Error() }),
              _this
            )
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              )
            })(ErrorBoundary, [
              {
                key: 'componentDidCatch',
                value: function componentDidCatch(error, info) {
                  this.setState(
                    Object.assign({}, this.state, {
                      hasError: !0,
                      error: error,
                    }),
                  ),
                    console.log(
                      'React-TableQL Error: ',
                      error,
                      '\nMore info about error: ',
                      info,
                    )
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this$state = this.state,
                    error = _this$state.error
                  return _this$state.hasError
                    ? react_default.a.createElement(
                        'div',
                        { className: 'ErrorBoundary' },
                        react_default.a.createElement(
                          'h1',
                          null,
                          'Something went wrong!',
                        ),
                        react_default.a.createElement(
                          'p',
                          { style: { color: 'red' } },
                          react_default.a.createElement('b', null, 'ERROR: '),
                          error.message,
                        ),
                      )
                    : this.props.children
                },
              },
            ]),
            ErrorBoundary
          )
        })(react.Component),
        ErrorBaundary = ErrorBaundary_ErrorBoundary
      try {
        ;(ErrorBaundary_ErrorBoundary.displayName = 'ErrorBoundary'),
          (ErrorBaundary_ErrorBoundary.__docgenInfo = {
            description: '',
            displayName: 'ErrorBoundary',
            props: {},
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/ErrorBaundary/ErrorBaundary.tsx#ErrorBoundary'
            ] = {
              docgenInfo: ErrorBaundary_ErrorBoundary.__docgenInfo,
              name: 'ErrorBoundary',
              path:
                'src/components/ErrorBaundary/ErrorBaundary.tsx#ErrorBoundary',
            })
      } catch (__react_docgen_typescript_loader_error) {}
      var Loader = __webpack_require__(383)
      __webpack_require__(770), __webpack_require__(1238)
      function utils_typeof(obj) {
        return (utils_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj
              })(obj)
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter)
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function TableQL_typeof(obj) {
        return (TableQL_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function _typeof(obj) {
                return typeof obj
              }
            : function _typeof(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj
              })(obj)
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var TableQL_TableQL = function TableQL(_ref) {
        var pagination = _ref.pagination,
          debug = _ref.debug,
          errorMessage = _ref.errorMessage,
          columns = _ref.columns,
          styles = _ref.styles,
          onRowClick = _ref.onRowClick,
          _ref$loading = _ref.loading,
          loading = void 0 !== _ref$loading && _ref$loading,
          error = _ref.error,
          data = _ref.data,
          sort = _ref.sort,
          onEmpty = _ref.onEmpty,
          _useState2 = _slicedToArray(
            Object(react.useState)(
              pagination &&
                'boolean' != typeof pagination &&
                pagination.currentPage
                ? pagination.currentPage
                : 1,
            ),
            2,
          ),
          currentPage = _useState2[0],
          setCurrentPage = _useState2[1],
          _useState4 = _slicedToArray(Object(react.useState)(), 2),
          displayData = _useState4[0],
          setDisplayData = _useState4[1],
          _useState6 = _slicedToArray(Object(react.useState)(), 2),
          fullData = _useState6[0],
          setFullData = _useState6[1],
          log = function log(tag) {
            var load =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ''
            debug && console.log(tag, load)
          }
        if (void 0 === window || void 0 === document)
          return log('Window or document are not defined.'), null
        if (
          (log('Props: ', {
            pagination: pagination,
            debug: debug,
            errorMessage: errorMessage,
            columns: columns,
            styles: styles,
            onRowClick: onRowClick,
          }),
          loading)
        )
          return (
            log('Loading: ', loading),
            react_default.a.createElement(Loader.a, null)
          )
        if (error)
          return (
            log('Error: ', error),
            react_default.a.createElement(
              'p',
              null,
              errorMessage ||
                'Error while loading TableQL: '.concat(error.message),
            )
          )
        if (Array.isArray(data) && 0 === data.length)
          return (
            log('No data found!', data.length),
            onEmpty
              ? onEmpty({ reason: 'No data found!' })
              : react_default.a.createElement('p', null, 'No data found!')
          )
        log('Data: ', data)
        var traversedData = (function traverseObjectForArray(data) {
          var defaultReturn =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          if (Array.isArray(data)) return data
          if ('object' !== utils_typeof(data)) return defaultReturn
          for (var key in data) {
            if (Array.isArray(data[key])) return data[key]
            if ('object' === utils_typeof(data[key])) {
              var what = traverseObjectForArray(data[key], !1)
              if (Array.isArray(what)) return what
            }
          }
          return defaultReturn
        })(data)
        void 0 === displayData && setDisplayData(traversedData),
          void 0 === fullData && setFullData(traversedData)
        var allData = traversedData,
          dataKeys =
            columns ||
            (function getHeaderLabels(data) {
              log('Get header labels.')
              var labels = []
              for (var _key in data) _key.includes('__') || labels.push(_key)
              return labels
            })(traversedData[0]),
          pageLimit = 10
        if (pagination) {
          pageLimit =
            'boolean' != typeof pagination && pagination.pageLimit
              ? pagination.pageLimit
              : 10
          var offset =
            (currentPage - 1) *
            ('boolean' != typeof pagination && pagination.pageLimit
              ? pagination.pageLimit
              : pageLimit)
          if (!displayData || 0 === displayData.length)
            return (
              log('No data found to paginate!', displayData),
              onEmpty
                ? onEmpty({ reason: 'No data found to paginate!' })
                : react_default.a.createElement('p', null, 'No data found!')
            )
          var dataToDisplay =
            displayData && fullData
              ? fullData.slice(offset).slice(0, pageLimit)
              : traversedData.slice(offset).slice(0, pageLimit)
          JSON.stringify(displayData) !== JSON.stringify(dataToDisplay) &&
            setDisplayData(_toConsumableArray(dataToDisplay))
        }
        return (
          log('Data to be displayed (array): ', displayData),
          log('Data keys: ', dataKeys),
          displayData && 0 != displayData.length
            ? react_default.a.createElement(
                ErrorBaundary,
                null,
                react_default.a.createElement(Table.a, {
                  displayData: displayData,
                  dataKeys: dataKeys,
                  styles: styles,
                  log: log,
                  onRowClick: onRowClick,
                  onSort: function onSort(column) {
                    log('Sort by column: ', column)
                    var property =
                        'string' == typeof column ? column : column.id,
                      newOrder = fullData ? _toConsumableArray(fullData) : []
                    'string' != typeof column &&
                    column.sort &&
                    'function' == typeof column.sort
                      ? (newOrder = column.sort(newOrder, property))
                      : (('string' != typeof column &&
                          column.sort &&
                          'boolean' == typeof column.sort) ||
                          sort) &&
                        newOrder.sort(function (a, b) {
                          return a[property] > b[property] ? 1 : -1
                        }),
                      JSON.stringify(newOrder) === JSON.stringify(fullData) &&
                        (newOrder = newOrder.reverse()),
                      setFullData(newOrder),
                      setDisplayData(newOrder)
                  },
                  sort: sort,
                }),
                pagination &&
                  react_default.a.createElement(Pagination.a, {
                    totalRecords: allData.length,
                    pageLimit: pageLimit,
                    pageNeighbors:
                      'boolean' != typeof pagination
                        ? pagination.pageNeighbors
                        : void 0,
                    selectedPage: currentPage,
                    onPageChanged: function onPageChanged(returnedData) {
                      return (function onPageChanged(_ref2) {
                        var currentPage = _ref2.currentPage,
                          totalPages = _ref2.totalPages,
                          pageLimit = _ref2.pageLimit,
                          totalRecords = _ref2.totalRecords
                        log(
                          'On page changed: Current Page > '
                            .concat(currentPage, ', Total Pages > ')
                            .concat(totalPages, ', Page Limit > ')
                            .concat(pageLimit, ', Total Records > ')
                            .concat(totalRecords),
                        ),
                          currentPage && setCurrentPage(currentPage),
                          'object' === TableQL_typeof(pagination) &&
                            pagination.onPageChanged &&
                            pagination.onPageChanged({
                              currentPage: currentPage,
                              totalPages: totalPages,
                              pageLimit: pageLimit,
                              totalRecords: totalRecords,
                            })
                      })(returnedData)
                    },
                    styles:
                      'boolean' != typeof pagination
                        ? pagination.styles
                        : void 0,
                    log: log,
                  }),
              )
            : (log('No data found!', displayData),
              onEmpty
                ? onEmpty({ reason: 'No data found!' })
                : react_default.a.createElement('p', null, 'No data found!'))
        )
      }
      TableQL_TableQL.displayName = 'TableQL'
      __webpack_exports__.a = TableQL_TableQL
      try {
        ;(TableQL_TableQL.displayName = 'TableQL'),
          (TableQL_TableQL.__docgenInfo = {
            description: '',
            displayName: 'TableQL',
            props: {
              data: {
                defaultValue: null,
                description: '',
                name: 'data',
                required: !0,
                type: { name: 'object | object[] | []' },
              },
              loading: {
                defaultValue: { value: !1 },
                description: '',
                name: 'loading',
                required: !1,
                type: { name: 'boolean' },
              },
              error: {
                defaultValue: null,
                description: '',
                name: 'error',
                required: !1,
                type: { name: 'Error' },
              },
              errorMessage: {
                defaultValue: null,
                description: '',
                name: 'errorMessage',
                required: !1,
                type: { name: 'string' },
              },
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !1,
                type: { name: '(string | ColumnConfig)[]' },
              },
              pagination: {
                defaultValue: null,
                description: '',
                name: 'pagination',
                required: !1,
                type: { name: 'boolean | PaginationConfig' },
              },
              styles: {
                defaultValue: null,
                description: '',
                name: 'styles',
                required: !1,
                type: { name: 'Styles' },
              },
              onRowClick: {
                defaultValue: null,
                description: '',
                name: 'onRowClick',
                required: !1,
                type: { name: '((data: { [key: string]: unknown; }) => void)' },
              },
              sort: {
                defaultValue: null,
                description: '',
                name: 'sort',
                required: !1,
                type: { name: 'boolean' },
              },
              debug: {
                defaultValue: null,
                description: '',
                name: 'debug',
                required: !1,
                type: { name: 'boolean' },
              },
              onEmpty: {
                defaultValue: null,
                description: '',
                name: 'onEmpty',
                required: !1,
                type: { name: 'FC<FailSafe>' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/TableQL/TableQL.tsx#TableQL'] = {
              docgenInfo: TableQL_TableQL.__docgenInfo,
              name: 'TableQL',
              path: 'src/TableQL/TableQL.tsx#TableQL',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    19: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(360),
        __webpack_require__(2183),
        __webpack_require__(500),
        __webpack_require__(1168),
        __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(129),
        _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(173)
      function _extends() {
        return (_extends =
          Object.assign ||
          function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var ApolloTableQL = function ApolloTableQL(_ref) {
        var query = _ref.query,
          props = _objectWithoutProperties(_ref, ['query']),
          _useQuery = Object(
            _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery,
          )(
            'string' == typeof query
              ? Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(query)
              : query,
            Object.assign({}, props),
          ),
          loading = _useQuery.loading,
          error = _useQuery.error,
          data = _useQuery.data
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_7__.a,
          _extends({ loading: loading, data: data, error: error }, props),
        )
      }
      ;(ApolloTableQL.displayName = 'ApolloTableQL'),
        (__webpack_exports__.a = ApolloTableQL)
      try {
        ;(ApolloTableQL.displayName = 'ApolloTableQL'),
          (ApolloTableQL.__docgenInfo = {
            description: '',
            displayName: 'ApolloTableQL',
            props: {
              query: {
                defaultValue: null,
                description: '',
                name: 'query',
                required: !0,
                type: { name: 'string | DocumentNode' },
              },
              columns: {
                defaultValue: null,
                description: '',
                name: 'columns',
                required: !1,
                type: { name: '(string | ColumnConfig)[]' },
              },
              pagination: {
                defaultValue: null,
                description: '',
                name: 'pagination',
                required: !1,
                type: { name: 'boolean | PaginationConfig' },
              },
              styles: {
                defaultValue: null,
                description: '',
                name: 'styles',
                required: !1,
                type: { name: 'Styles' },
              },
              onRowClick: {
                defaultValue: null,
                description: '',
                name: 'onRowClick',
                required: !1,
                type: { name: '((data: { [key: string]: unknown; }) => void)' },
              },
              errorMessage: {
                defaultValue: null,
                description: '',
                name: 'errorMessage',
                required: !1,
                type: { name: 'string' },
              },
              debug: {
                defaultValue: null,
                description: '',
                name: 'debug',
                required: !1,
                type: { name: 'boolean' },
              },
              sort: {
                defaultValue: null,
                description: '',
                name: 'sort',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/ApolloTableQL/ApolloTableQL.tsx#ApolloTableQL'
            ] = {
              docgenInfo: ApolloTableQL.__docgenInfo,
              name: 'ApolloTableQL',
              path: 'src/ApolloTableQL/ApolloTableQL.tsx#ApolloTableQL',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    195: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return FILMS
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return PEOPLE
        })
      var FILMS = [
          {
            title: 'A New Hope',
            episodeID: 4,
            openingCrawl:
              "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            director: 'George Lucas',
            producer: 'Gary Kurtz, Rick McCallum',
            releaseDate: '1977-05-25',
          },
          {
            title: 'Attack of the Clones',
            episodeID: 2,
            openingCrawl:
              'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            releaseDate: '2002-05-16',
          },
          {
            title: 'The Phantom Menace',
            episodeID: 1,
            openingCrawl:
              'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            releaseDate: '1999-05-19',
          },
          {
            title: 'Revenge of the Sith',
            episodeID: 3,
            openingCrawl:
              'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            releaseDate: '2005-05-19',
          },
          {
            title: 'Return of the Jedi',
            episodeID: 6,
            openingCrawl:
              'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
            director: 'Richard Marquand',
            producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
            releaseDate: '1983-05-25',
          },
          {
            title: 'The Empire Strikes Back',
            episodeID: 5,
            openingCrawl:
              'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
            director: 'Irvin Kershner',
            producer: 'Gary Kurtz, Rick McCallum',
            releaseDate: '1980-05-17',
          },
          {
            title: 'The Force Awakens',
            episodeID: 7,
            openingCrawl:
              "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....",
            director: 'J. J. Abrams',
            producer: 'Kathleen Kennedy, J. J. Abrams, Bryan Burk',
            releaseDate: '2015-12-11',
          },
        ],
        PEOPLE = [
          {
            id: 'cGVvcGxlOjE=',
            name: 'Luke Skywalker',
            height: 172,
            mass: 77,
            hairColor: 'blond',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '19BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjI=',
            name: 'C-3PO',
            height: 167,
            mass: 75,
            hairColor: 'n/a',
            skinColor: 'gold',
            eyeColor: 'yellow',
            birthYear: '112BBY',
            gender: 'n/a',
          },
          {
            id: 'cGVvcGxlOjM=',
            name: 'R2-D2',
            height: 96,
            mass: 32,
            hairColor: 'n/a',
            skinColor: 'white, blue',
            eyeColor: 'red',
            birthYear: '33BBY',
            gender: 'n/a',
          },
          {
            id: 'cGVvcGxlOjQ=',
            name: 'Darth Vader',
            height: 202,
            mass: 136,
            hairColor: 'none',
            skinColor: 'white',
            eyeColor: 'yellow',
            birthYear: '41.9BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU=',
            name: 'Leia Organa',
            height: 150,
            mass: 49,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: '19BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjY=',
            name: 'Owen Lars',
            height: 178,
            mass: 120,
            hairColor: 'brown, grey',
            skinColor: 'light',
            eyeColor: 'blue',
            birthYear: '52BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjc=',
            name: 'Beru Whitesun lars',
            height: 165,
            mass: 75,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'blue',
            birthYear: '47BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjg=',
            name: 'R5-D4',
            height: 97,
            mass: 32,
            hairColor: 'n/a',
            skinColor: 'white, red',
            eyeColor: 'red',
            birthYear: 'unknown',
            gender: 'n/a',
          },
          {
            id: 'cGVvcGxlOjk=',
            name: 'Biggs Darklighter',
            height: 183,
            mass: 84,
            hairColor: 'black',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: '24BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjEw',
            name: 'Obi-Wan Kenobi',
            height: 182,
            mass: 77,
            hairColor: 'auburn, white',
            skinColor: 'fair',
            eyeColor: 'blue-gray',
            birthYear: '57BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjEx',
            name: 'Anakin Skywalker',
            height: 188,
            mass: 84,
            hairColor: 'blond',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '41.9BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjEy',
            name: 'Wilhuff Tarkin',
            height: 180,
            mass: null,
            hairColor: 'auburn, grey',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '64BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjEz',
            name: 'Chewbacca',
            height: 228,
            mass: 112,
            hairColor: 'brown',
            skinColor: 'unknown',
            eyeColor: 'blue',
            birthYear: '200BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjE0',
            name: 'Han Solo',
            height: 180,
            mass: 80,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'brown',
            birthYear: '29BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjE1',
            name: 'Greedo',
            height: 173,
            mass: 74,
            hairColor: 'n/a',
            skinColor: 'green',
            eyeColor: 'black',
            birthYear: '44BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjE2',
            name: 'Jabba Desilijic Tiure',
            height: 175,
            mass: 1358,
            hairColor: 'n/a',
            skinColor: 'green-tan, brown',
            eyeColor: 'orange',
            birthYear: '600BBY',
            gender: 'hermaphrodite',
          },
          {
            id: 'cGVvcGxlOjE4',
            name: 'Wedge Antilles',
            height: 170,
            mass: 77,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'hazel',
            birthYear: '21BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjE5',
            name: 'Jek Tono Porkins',
            height: 180,
            mass: 110,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjIw',
            name: 'Yoda',
            height: 66,
            mass: 17,
            hairColor: 'white',
            skinColor: 'green',
            eyeColor: 'brown',
            birthYear: '896BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjIx',
            name: 'Palpatine',
            height: 170,
            mass: 75,
            hairColor: 'grey',
            skinColor: 'pale',
            eyeColor: 'yellow',
            birthYear: '82BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjIy',
            name: 'Boba Fett',
            height: 183,
            mass: 78.2,
            hairColor: 'black',
            skinColor: 'fair',
            eyeColor: 'brown',
            birthYear: '31.5BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjIz',
            name: 'IG-88',
            height: 200,
            mass: 140,
            hairColor: 'none',
            skinColor: 'metal',
            eyeColor: 'red',
            birthYear: '15BBY',
            gender: 'none',
          },
          {
            id: 'cGVvcGxlOjI0',
            name: 'Bossk',
            height: 190,
            mass: 113,
            hairColor: 'none',
            skinColor: 'green',
            eyeColor: 'red',
            birthYear: '53BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjI1',
            name: 'Lando Calrissian',
            height: 177,
            mass: 79,
            hairColor: 'black',
            skinColor: 'dark',
            eyeColor: 'brown',
            birthYear: '31BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjI2',
            name: 'Lobot',
            height: 175,
            mass: 79,
            hairColor: 'none',
            skinColor: 'light',
            eyeColor: 'blue',
            birthYear: '37BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjI3',
            name: 'Ackbar',
            height: 180,
            mass: 83,
            hairColor: 'none',
            skinColor: 'brown mottle',
            eyeColor: 'orange',
            birthYear: '41BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjI4',
            name: 'Mon Mothma',
            height: 150,
            mass: null,
            hairColor: 'auburn',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '48BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjI5',
            name: 'Arvel Crynyd',
            height: null,
            mass: null,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjMw',
            name: 'Wicket Systri Warrick',
            height: 88,
            mass: 20,
            hairColor: 'brown',
            skinColor: 'brown',
            eyeColor: 'brown',
            birthYear: '8BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjMx',
            name: 'Nien Nunb',
            height: 160,
            mass: 68,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjMy',
            name: 'Qui-Gon Jinn',
            height: 193,
            mass: 89,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '92BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjMz',
            name: 'Nute Gunray',
            height: 191,
            mass: 90,
            hairColor: 'none',
            skinColor: 'mottled green',
            eyeColor: 'red',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjM0',
            name: 'Finis Valorum',
            height: 170,
            mass: null,
            hairColor: 'blond',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '91BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjM1',
            name: 'Padmé Amidala',
            height: 165,
            mass: 45,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: '46BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjM2',
            name: 'Jar Jar Binks',
            height: 196,
            mass: 66,
            hairColor: 'none',
            skinColor: 'orange',
            eyeColor: 'orange',
            birthYear: '52BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjM3',
            name: 'Roos Tarpals',
            height: 224,
            mass: 82,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'orange',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjM4',
            name: 'Rugor Nass',
            height: 206,
            mass: null,
            hairColor: 'none',
            skinColor: 'green',
            eyeColor: 'orange',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjM5',
            name: 'Ric Olié',
            height: 183,
            mass: null,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQw',
            name: 'Watto',
            height: 137,
            mass: null,
            hairColor: 'black',
            skinColor: 'blue, grey',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQx',
            name: 'Sebulba',
            height: 112,
            mass: 40,
            hairColor: 'none',
            skinColor: 'grey, red',
            eyeColor: 'orange',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQy',
            name: 'Quarsh Panaka',
            height: 183,
            mass: null,
            hairColor: 'black',
            skinColor: 'dark',
            eyeColor: 'brown',
            birthYear: '62BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQz',
            name: 'Shmi Skywalker',
            height: 163,
            mass: null,
            hairColor: 'black',
            skinColor: 'fair',
            eyeColor: 'brown',
            birthYear: '72BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjQ0',
            name: 'Darth Maul',
            height: 175,
            mass: 80,
            hairColor: 'none',
            skinColor: 'red',
            eyeColor: 'yellow',
            birthYear: '54BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQ1',
            name: 'Bib Fortuna',
            height: 180,
            mass: null,
            hairColor: 'none',
            skinColor: 'pale',
            eyeColor: 'pink',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQ2',
            name: 'Ayla Secura',
            height: 178,
            mass: 55,
            hairColor: 'none',
            skinColor: 'blue',
            eyeColor: 'hazel',
            birthYear: '48BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjQ3',
            name: 'Ratts Tyerell',
            height: 79,
            mass: 15,
            hairColor: 'none',
            skinColor: 'grey, blue',
            eyeColor: 'unknown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQ4',
            name: 'Dud Bolt',
            height: 94,
            mass: 45,
            hairColor: 'none',
            skinColor: 'blue, grey',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjQ5',
            name: 'Gasgano',
            height: 122,
            mass: null,
            hairColor: 'none',
            skinColor: 'white, blue',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjUw',
            name: 'Ben Quadinaros',
            height: 163,
            mass: 65,
            hairColor: 'none',
            skinColor: 'grey, green, yellow',
            eyeColor: 'orange',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjUx',
            name: 'Mace Windu',
            height: 188,
            mass: 84,
            hairColor: 'none',
            skinColor: 'dark',
            eyeColor: 'brown',
            birthYear: '72BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjUy',
            name: 'Ki-Adi-Mundi',
            height: 198,
            mass: 82,
            hairColor: 'white',
            skinColor: 'pale',
            eyeColor: 'yellow',
            birthYear: '92BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjUz',
            name: 'Kit Fisto',
            height: 196,
            mass: 87,
            hairColor: 'none',
            skinColor: 'green',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU0',
            name: 'Eeth Koth',
            height: 171,
            mass: null,
            hairColor: 'black',
            skinColor: 'brown',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU1',
            name: 'Adi Gallia',
            height: 184,
            mass: 50,
            hairColor: 'none',
            skinColor: 'dark',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjU2',
            name: 'Saesee Tiin',
            height: 188,
            mass: null,
            hairColor: 'none',
            skinColor: 'pale',
            eyeColor: 'orange',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU3',
            name: 'Yarael Poof',
            height: 264,
            mass: null,
            hairColor: 'none',
            skinColor: 'white',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU4',
            name: 'Plo Koon',
            height: 188,
            mass: 80,
            hairColor: 'none',
            skinColor: 'orange',
            eyeColor: 'black',
            birthYear: '22BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjU5',
            name: 'Mas Amedda',
            height: 196,
            mass: null,
            hairColor: 'none',
            skinColor: 'blue',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjYw',
            name: 'Gregar Typho',
            height: 185,
            mass: 85,
            hairColor: 'black',
            skinColor: 'dark',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjYx',
            name: 'Cordé',
            height: 157,
            mass: null,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjYy',
            name: 'Cliegg Lars',
            height: 183,
            mass: null,
            hairColor: 'brown',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: '82BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjYz',
            name: 'Poggle the Lesser',
            height: 183,
            mass: 80,
            hairColor: 'none',
            skinColor: 'green',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjY0',
            name: 'Luminara Unduli',
            height: 170,
            mass: 56.2,
            hairColor: 'black',
            skinColor: 'yellow',
            eyeColor: 'blue',
            birthYear: '58BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjY1',
            name: 'Barriss Offee',
            height: 166,
            mass: 50,
            hairColor: 'black',
            skinColor: 'yellow',
            eyeColor: 'blue',
            birthYear: '40BBY',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjY2',
            name: 'Dormé',
            height: 165,
            mass: null,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjY3',
            name: 'Dooku',
            height: 193,
            mass: 80,
            hairColor: 'white',
            skinColor: 'fair',
            eyeColor: 'brown',
            birthYear: '102BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjY4',
            name: 'Bail Prestor Organa',
            height: 191,
            mass: null,
            hairColor: 'black',
            skinColor: 'tan',
            eyeColor: 'brown',
            birthYear: '67BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjY5',
            name: 'Jango Fett',
            height: 183,
            mass: 79,
            hairColor: 'black',
            skinColor: 'tan',
            eyeColor: 'brown',
            birthYear: '66BBY',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjcw',
            name: 'Zam Wesell',
            height: 168,
            mass: 55,
            hairColor: 'blonde',
            skinColor: 'fair, green, yellow',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjcx',
            name: 'Dexter Jettster',
            height: 198,
            mass: 102,
            hairColor: 'none',
            skinColor: 'brown',
            eyeColor: 'yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjcy',
            name: 'Lama Su',
            height: 229,
            mass: 88,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjcz',
            name: 'Taun We',
            height: 213,
            mass: null,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjc0',
            name: 'Jocasta Nu',
            height: 167,
            mass: null,
            hairColor: 'white',
            skinColor: 'fair',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjc1',
            name: 'R4-P17',
            height: 96,
            mass: null,
            hairColor: 'none',
            skinColor: 'silver, red',
            eyeColor: 'red, blue',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjc2',
            name: 'Wat Tambor',
            height: 193,
            mass: 48,
            hairColor: 'none',
            skinColor: 'green, grey',
            eyeColor: 'unknown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjc3',
            name: 'San Hill',
            height: 191,
            mass: null,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'gold',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjc4',
            name: 'Shaak Ti',
            height: 178,
            mass: 57,
            hairColor: 'none',
            skinColor: 'red, blue, white',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjc5',
            name: 'Grievous',
            height: 216,
            mass: 159,
            hairColor: 'none',
            skinColor: 'brown, white',
            eyeColor: 'green, yellow',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjgw',
            name: 'Tarfful',
            height: 234,
            mass: 136,
            hairColor: 'brown',
            skinColor: 'brown',
            eyeColor: 'blue',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjgx',
            name: 'Raymus Antilles',
            height: 188,
            mass: 79,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjgy',
            name: 'Sly Moore',
            height: 178,
            mass: 48,
            hairColor: 'none',
            skinColor: 'pale',
            eyeColor: 'white',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjgz',
            name: 'Tion Medon',
            height: 206,
            mass: 80,
            hairColor: 'none',
            skinColor: 'grey',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjg0',
            name: 'Finn',
            height: null,
            mass: null,
            hairColor: 'black',
            skinColor: 'dark',
            eyeColor: 'dark',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjg1',
            name: 'Rey',
            height: null,
            mass: null,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'hazel',
            birthYear: 'unknown',
            gender: 'female',
          },
          {
            id: 'cGVvcGxlOjg2',
            name: 'Poe Dameron',
            height: null,
            mass: null,
            hairColor: 'brown',
            skinColor: 'light',
            eyeColor: 'brown',
            birthYear: 'unknown',
            gender: 'male',
          },
          {
            id: 'cGVvcGxlOjg3',
            name: 'BB8',
            height: null,
            mass: null,
            hairColor: 'none',
            skinColor: 'none',
            eyeColor: 'black',
            birthYear: 'unknown',
            gender: 'none',
          },
          {
            id: 'cGVvcGxlOjg4',
            name: 'Captain Phasma',
            height: null,
            mass: null,
            hairColor: 'unknown',
            skinColor: 'unknown',
            eyeColor: 'unknown',
            birthYear: 'unknown',
            gender: 'female',
          },
        ]
    },
    20: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return GET_ALL_FILMS
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return GET_ALL_PEOPLE
        })
      var GET_ALL_FILMS =
          '\n{\n  allFilms {\n    title\n    episodeID\n    releaseDate\n  }\n}\n',
        GET_ALL_PEOPLE =
          '\n{\n  allPeople {\n    name\n    gender\n    birthYear\n    eyeColor\n    hairColor\n    skinColor\n  }\n}\n'
    },
    2041: function (module, exports, __webpack_require__) {
      'use strict'
      __webpack_require__(360),
        __webpack_require__(2044),
        __webpack_require__(1166),
        __webpack_require__(2045),
        __webpack_require__(2046),
        __webpack_require__(2047),
        __webpack_require__(2048),
        __webpack_require__(1168),
        __webpack_require__(1169)
      var _clientApi = __webpack_require__(160),
        _clientLogger = __webpack_require__(89),
        _configFilename = __webpack_require__(2220)
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                )
              })
        }
        return target
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      ;(_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function (decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1)
          }),
        _configFilename.loaders &&
          _configFilename.loaders.forEach(function (loader) {
            return (0, _clientApi.addLoader)(loader, !1)
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function (enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer)
          })
    },
    2179: function (module, exports, __webpack_require__) {
      'use strict'
      ;(function (module) {
        ;(0, __webpack_require__(219).configure)(
          [
            __webpack_require__(2180),
            __webpack_require__(2181),
            __webpack_require__(2215),
            __webpack_require__(2216),
          ],
          module,
          !1,
        )
      }.call(this, __webpack_require__(179)(module)))
    },
    2180: function (module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = function () {
        return []
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 2180)
    },
    2181: function (module, exports, __webpack_require__) {
      var map = {
        './ApolloTableQL/stories/Basic.stories.tsx': 2182,
        './ApolloTableQL/stories/CustomColumns.stories.tsx': 2205,
        './ApolloTableQL/stories/CustomStyles.stories.tsx': 2207,
        './ApolloTableQL/stories/Introduction.stories.tsx': 2208,
        './ApolloTableQL/stories/Pagination.stories.tsx': 2209,
        './TableQL/TableQL.stories.tsx': 2210,
        './components/Loader/Loader.stories.tsx': 2211,
        './components/Pagination/Pagination.stories.tsx': 2212,
        './components/SortArrows/SortArrows.stories.tsx': 2213,
        './components/Table/Table.stories.tsx': 2214,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 2181)
    },
    2182: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        }),
        __webpack_require__.d(__webpack_exports__, 'DebugOn', function () {
          return DebugOn
        }),
        __webpack_require__.d(__webpack_exports__, 'ClickRow', function () {
          return ClickRow
        }),
        __webpack_require__.d(__webpack_exports__, 'Sort', function () {
          return Sort
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'ErrorBoundary',
          function () {
            return ErrorBoundary
          },
        )
      __webpack_require__(238), __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19),
        _mocks_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20),
        _stories_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          36,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_5__.a.apolloTableQl,
          '/Basic',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          { query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a },
        )
      }
      Default.displayName = 'Default'
      var DebugOn = function DebugOn() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'h3',
              null,
              'Check Actions bellow!',
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
              {
                query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
                debug: !0,
              },
            ),
          )
        },
        ClickRow = function ClickRow() {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
            {
              query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
              onRowClick: function onRowClick(data) {
                return alert(
                  'Row has been clicked. This is data that has been returned: Title - '
                    .concat(data.title, ', Episode ID - ')
                    .concat(data.episodeID, ', Release Date - ')
                    .concat(data.releaseDate),
                )
              },
            },
          )
        }
      ClickRow.displayName = 'ClickRow'
      var Sort = function Sort() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          { query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a, sort: !0 },
        )
      }
      Sort.displayName = 'Sort'
      var ErrorBoundary = function ErrorBoundary() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'title',
              'episodeID',
              { id: 'releaseDate', customColumn: !0 },
            ],
          },
        )
      }
      ErrorBoundary.displayName = 'ErrorBoundary'
    },
    2190: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(372)(!1)).push([
        module.i,
        '.TableQL {\n  background-color: transparent;\n  width: 100%;\n  margin: 0.5rem 0;\n  text-align: left;\n  padding: 0 0.4rem;\n  border-collapse: collapse;\n  display: table;\n  border-spacing: 2px;\n}\n\n.TableQL-thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-thead-th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.TableQL-thead-th-sort {\n  cursor: pointer;\n}\n\n.TableQL-thead-th-sort:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-tr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n}\n\ntbody .TableQL-tr:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-thead-th {\n  text-align: inherit;\n  font-weight: bold;\n}\n\n.TableQL-tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-td,\n.TableQL-thead-th {\n  padding: 0.69rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  display: table-cell;\n  vertical-align: inherit;\n}\n\n/* PAGINATION */\n.PaginationContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n/* ========== */\n',
        '',
      ]),
        (module.exports = exports)
    },
    2191: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(371),
        content = __webpack_require__(2192)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    2192: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(372)(!1)).push([
        module.i,
        '.PaginationContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    2196: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(371),
        content = __webpack_require__(2197)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    2197: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(372)(!1)).push([
        module.i,
        '.TableQL-thead-th-sort-arrows {\n  float: right;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n}\n\n.TableQL-thead-th-sort-arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid transparent;\n\n  border-bottom: 5px solid #787c80;\n  margin-bottom: 1px;\n}\n\n.TableQL-thead-th-sort-arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n\n  border-top: 5px solid #787c80;\n  margin-top: 1px;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    2203: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(371),
        content = __webpack_require__(2204)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
    2204: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(372)(!1)).push([
        module.i,
        '.rtql-loader {\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #3498db; /* Blue */\n  border-bottom: 5px solid #3498db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 1s linear infinite;\n  animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    2205: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Order', function () {
          return Order
        }),
        __webpack_require__.d(__webpack_exports__, 'HeaderLabel', function () {
          return HeaderLabel
        }),
        __webpack_require__.d(__webpack_exports__, 'Component', function () {
          return Component
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'ReactComponent',
          function () {
            return ReactComponent
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'CustomColumn', function () {
          return CustomColumn
        }),
        __webpack_require__.d(__webpack_exports__, 'StyleHeader', function () {
          return StyleHeader
        }),
        __webpack_require__.d(__webpack_exports__, 'StyleNodes', function () {
          return StyleNodes
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'SelectiveStyling',
          function () {
            return SelectiveStyling
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'Sort', function () {
          return Sort
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomSort', function () {
          return CustomSort
        })
      __webpack_require__(1230), __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19),
        _mocks_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20),
        _stories_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          36,
        ),
        Button =
          (__webpack_require__(771),
          function Button(_ref) {
            var data = _ref.data
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              'button',
              {
                onClick: function onClick() {
                  return console.log('Returned data: ', data)
                },
              },
              'Click Me',
            )
          })
      ;(Button.displayName = 'Button'),
        (__webpack_exports__.default = {
          title: ''.concat(
            _stories_constants__WEBPACK_IMPORTED_MODULE_5__.a.apolloTableQl,
            '/Custom Columns',
          ),
          component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
        })
      var Order = function Order() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: ['releaseDate', 'title', 'episodeID'],
          },
        )
      }
      Order.displayName = 'Order'
      var HeaderLabel = function HeaderLabel() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              { id: 'episodeID', label: 'Episode Identification' },
              'releaseDate',
              'title',
            ],
          },
        )
      }
      HeaderLabel.displayName = 'HeaderLabel'
      var Component = function Component() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                component: function component(data) {
                  return data.toUpperCase()
                },
              },
            ],
          },
        )
      }
      Component.displayName = 'Component'
      var ReactComponent = function ReactComponent() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                component: function component(data) {
                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    Button,
                    { data: data },
                  )
                },
              },
            ],
          },
        )
      }
      ReactComponent.displayName = 'ReactComponent'
      var CustomColumn = function CustomColumn() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              'title',
              {
                id: 'actions',
                component: function component(props) {
                  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    Button,
                    { data: props },
                  )
                },
                customColumn: !0,
              },
            ],
          },
        )
      }
      CustomColumn.displayName = 'CustomColumn'
      var StyleHeader = function StyleHeader() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              { id: 'title', headerStyle: 'bg-color' },
            ],
          },
        )
      }
      StyleHeader.displayName = 'StyleHeader'
      var StyleNodes = function StyleNodes() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              { id: 'title', nodeStyle: 'bg-color' },
            ],
          },
        )
      }
      StyleNodes.displayName = 'StyleNodes'
      var SelectiveStyling = function SelectiveStyling() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                nodeStyle: function nodeStyle(data) {
                  if (data.title.length <= 19) return 'bg-color'
                },
              },
            ],
          },
        )
      }
      SelectiveStyling.displayName = 'SelectiveStyling'
      var Sort = function Sort() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: ['episodeID', 'releaseDate', { id: 'title', sort: !0 }],
          },
        )
      }
      Sort.displayName = 'Sort'
      var CustomSort = function CustomSort() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_3__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_4__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                sort: function sort(data, property) {
                  return data.reverse()
                },
              },
            ],
          },
        )
      }
      CustomSort.displayName = 'CustomSort'
    },
    2206: function (module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(372)(!1)).push([
        module.i,
        '* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.pagination {\n  background-color: rgb(150, 140, 209);\n}\n\n.bg-color {\n  background-color: #61dafb;\n  border: 3px solid red !important;\n}\n\ncode {\n  background-color: #f1f3f5;\n  padding: 10px;\n  border-radius: 5px;\n}\n\na {\n  cursor: pointer;\n  color: #7751d1;\n  text-decoration: none;\n}\n\n.customRow td,\n.customRow th {\n  border: 1px solid #dee2e6;\n}\n\n.customRow th {\n  background-color: rgb(150, 140, 209);\n  color: white;\n}\n\ntbody .customRow:hover {\n  background-color: #f1f3f5;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    2207: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Table', function () {
          return Table
        }),
        __webpack_require__.d(__webpack_exports__, 'Thead', function () {
          return Thead
        }),
        __webpack_require__.d(__webpack_exports__, 'TrInThead', function () {
          return TrInThead
        }),
        __webpack_require__.d(__webpack_exports__, 'ThInThead', function () {
          return ThInThead
        }),
        __webpack_require__.d(__webpack_exports__, 'Tbody', function () {
          return Tbody
        }),
        __webpack_require__.d(__webpack_exports__, 'TrInTbody', function () {
          return TrInTbody
        }),
        __webpack_require__.d(__webpack_exports__, 'TdInTbody', function () {
          return TdInTbody
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19),
        _mocks_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          36,
        )
      __webpack_require__(771)
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.apolloTableQl,
          '/Custom Styles',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Table = function Table() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { table: 'bg-color' },
          },
        )
      }
      Table.displayName = 'Table'
      var Thead = function Thead() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { thead: 'bg-color' },
          },
        )
      }
      Thead.displayName = 'Thead'
      var TrInThead = function TrInThead() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { theadTr: 'bg-color' },
          },
        )
      }
      TrInThead.displayName = 'TrInThead'
      var ThInThead = function ThInThead() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { theadTh: 'bg-color' },
          },
        )
      }
      ThInThead.displayName = 'ThInThead'
      var Tbody = function Tbody() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { tbody: 'bg-color' },
          },
        )
      }
      Tbody.displayName = 'Tbody'
      var TrInTbody = function TrInTbody() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { tbodyTr: 'bg-color' },
          },
        )
      }
      TrInTbody.displayName = 'TrInTbody'
      var TdInTbody = function TdInTbody() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.a,
            styles: { tbodyTd: 'bg-color' },
          },
        )
      }
      TdInTbody.displayName = 'TdInTbody'
    },
    2208: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Introduction', function () {
          return Introduction
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          173,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          36,
        ),
        PROPS = [
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
      __webpack_exports__.default = {
        title: _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.apolloTableQl,
        parameters: { options: { showPanel: !1 } },
      }
      var Introduction = function Introduction() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'div',
          { style: { width: '960px' } },
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h1',
            null,
            'ApolloTableQL',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'ApolloTableQL is TableQL wrapped with Apollo Client Query and its logic. It is a react component that uses Apollo to fetches data with GraphQL, and then parses data and renders it into grid/table.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'To import it all you need to do is:',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'code',
            null,
            'import ',
            '{ ApolloTableQL }',
            " from 'react-tableql'",
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'And use it:',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'code',
            null,
            '<ApolloTableQL query={QUERY} />',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h3',
            null,
            'IMPORTANT',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'All the props that TabelQL has are also applicable to ApolloTableQL. ApolloTableQL is TableQL wrapped in Apollo Client Query component.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'h2',
            null,
            'Props',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'ApolloTableQL are same as for TableQL except instead of `data` there `query`',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
            {
              data: PROPS,
              styles: { tbodyTr: 'customRow TableQL-tr', theadTr: 'customRow' },
            },
          ),
          '* this table is created with TableQL :)',
        )
      }
      Introduction.displayName = 'Introduction'
    },
    2209: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function () {
          return Basic
        }),
        __webpack_require__.d(__webpack_exports__, 'DebugMode', function () {
          return DebugMode
        }),
        __webpack_require__.d(__webpack_exports__, 'PageLimit', function () {
          return PageLimit
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'PageNeighbors',
          function () {
            return PageNeighbors
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'CurrentPage', function () {
          return CurrentPage
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'OnPageChanged',
          function () {
            return OnPageChanged
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'CustomStyles', function () {
          return CustomStyles
        }),
        __webpack_require__.d(__webpack_exports__, 'Sort', function () {
          return Sort
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19),
        _mocks_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          36,
        )
      __webpack_require__(771)
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.apolloTableQl,
          '/Pagination',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Basic = function Basic() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: !0,
          },
        )
      }
      Basic.displayName = 'Basic'
      var DebugMode = function DebugMode() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: !0,
            debug: !0,
          },
        )
      }
      DebugMode.displayName = 'DebugMode'
      var PageLimit = function PageLimit() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: { pageLimit: 5 },
          },
        )
      }
      PageLimit.displayName = 'PageLimit'
      var PageNeighbors = function PageNeighbors() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: { pageNeighbors: 2, pageLimit: 5 },
          },
        )
      }
      PageNeighbors.displayName = 'PageNeighbors'
      var CurrentPage = function CurrentPage() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: { currentPage: 3 },
          },
        )
      }
      CurrentPage.displayName = 'CurrentPage'
      var OnPageChanged = function OnPageChanged() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: {
              onPageChanged: function onPageChanged(_ref) {
                var currentPage = _ref.currentPage,
                  totalPages = _ref.totalPages,
                  pageLimit = _ref.pageLimit,
                  totalRecords = _ref.totalRecords
                return alert(
                  'FUNCTION PASSED AS PROP, RETURNED VALUES: Current Page > ' +
                    currentPage +
                    ', Total Pages > ' +
                    totalPages +
                    ', Page Limit > ' +
                    pageLimit +
                    ', Total Records > ' +
                    totalRecords,
                )
              },
            },
          },
        )
      }
      OnPageChanged.displayName = 'OnPageChanged'
      var CustomStyles = function CustomStyles() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: { styles: 'pagination' },
          },
        )
      }
      CustomStyles.displayName = 'CustomStyles'
      var Sort = function Sort() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queries__WEBPACK_IMPORTED_MODULE_3__.b,
            pagination: !0,
            sort: !0,
          },
        )
      }
      Sort.displayName = 'Sort'
    },
    2210: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        }),
        __webpack_require__.d(__webpack_exports__, 'NoData', function () {
          return NoData
        }),
        __webpack_require__.d(__webpack_exports__, 'OnEmpty', function () {
          return OnEmpty
        }),
        __webpack_require__.d(__webpack_exports__, 'IncorectData', function () {
          return IncorectData
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _TableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173),
        _mocks_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(195),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          36,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.tableQl,
          '/Basic',
        ),
        component: _TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          { data: _mocks_data__WEBPACK_IMPORTED_MODULE_3__.a },
        )
      }
      Default.displayName = 'Default'
      var NoData = function NoData() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            data: { data: [] },
            columns: [
              { id: 'foo', label: 'Foo', sort: !0 },
              { id: 'bar', label: 'Bar', sort: !1 },
            ],
            pagination: !0,
          },
        )
      }
      NoData.displayName = 'NoData'
      var OnEmpty = function OnEmpty() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            data: { data: [] },
            columns: [
              { id: 'foo', label: 'Foo', sort: !0 },
              { id: 'bar', label: 'Bar', sort: !1 },
            ],
            onEmpty: function onEmpty(_ref) {
              var reason = _ref.reason
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'h3',
                null,
                "You don't have data yet. Reason ",
                reason,
              )
            },
          },
        )
      }
      OnEmpty.displayName = 'OnEmpty'
      var IncorectData = function IncorectData() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _TableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          { data: { data: 'asd' } },
        )
      }
      IncorectData.displayName = 'IncorectData'
    },
    2211: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(383),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          36,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.buildingBlocks,
          '/Loader',
        ),
        component: _Loader__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _Loader__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
        )
      }
      Default.displayName = 'Default'
    },
    2212: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(380),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          36,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.buildingBlocks,
          '/Pagination',
        ),
        component: _Pagination__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _Pagination__WEBPACK_IMPORTED_MODULE_2__.a,
          { totalRecords: 100, log: function log() {} },
        )
      }
      Default.displayName = 'Default'
    },
    2213: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _SortArrows__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(382),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          36,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.buildingBlocks,
          '/SortArrows',
        ),
        component: _SortArrows__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _SortArrows__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
        )
      }
      Default.displayName = 'Default'
    },
    2214: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(381),
        _mocks_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(195),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          36,
        ),
        DATA_KEYS = [
          'title',
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.buildingBlocks,
          '/Table',
        ),
        component: _Table__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function Default() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _Table__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            log: function log() {},
            displayData: _mocks_data__WEBPACK_IMPORTED_MODULE_3__.a,
            dataKeys: DATA_KEYS,
          },
        )
      }
      Default.displayName = 'Default'
    },
    2215: function (module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = function () {
        return []
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 2215)
    },
    2216: function (module, exports, __webpack_require__) {
      var map = {
        './Introduction.stories.tsx': 2217,
        './Setup.stories.tsx': 2218,
      }
      function webpackContext(req) {
        var id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'")
          throw ((e.code = 'MODULE_NOT_FOUND'), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 2216)
    },
    2217: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          'toReactTableQL',
          function () {
            return toReactTableQL
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'toStorybook', function () {
          return toStorybook
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _customStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384),
        _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36)
      __webpack_exports__.default = {
        title: ''.concat(
          _constants__WEBPACK_IMPORTED_MODULE_3__.a.gettingStarted,
          '/Introduction',
        ),
        id: 0,
      }
      var toReactTableQL = function toReactTableQL() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_2__.c,
          null,
        )
      }
      toReactTableQL.displayName = 'toReactTableQL'
      var toStorybook = function toStorybook() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_2__.b,
          null,
        )
      }
      toStorybook.displayName = 'toStorybook'
    },
    2218: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Install', function () {
          return Install
        })
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _customStories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(384),
        _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36)
      __webpack_exports__.default = {
        title: ''.concat(
          _constants__WEBPACK_IMPORTED_MODULE_3__.a.gettingStarted,
          '/Setup',
        ),
      }
      var Install = function Install() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_2__.a,
          null,
        )
      }
      Install.displayName = 'Install'
    },
    2220: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var client = __webpack_require__(219),
        lib = __webpack_require__(1245),
        storybook_readme = __webpack_require__(1246),
        dist = __webpack_require__(773),
        react = (__webpack_require__(22), __webpack_require__(3)),
        react_default = __webpack_require__.n(react),
        _apollo_client = __webpack_require__(129),
        graphql_tools_dist =
          (__webpack_require__(238),
          __webpack_require__(499),
          __webpack_require__(2119),
          __webpack_require__(500),
          __webpack_require__(365),
          __webpack_require__(2122),
          __webpack_require__(2136),
          __webpack_require__(514)),
        graphql = __webpack_require__(756),
        printer = __webpack_require__(21),
        bundle_esm = __webpack_require__(1275)
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter)
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen)
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function delay(ms) {
        return new Promise(function (resolve) {
          0 === ms && resolve(),
            setTimeout(function () {
              resolve()
            }, ms)
        })
      }
      function createLink(schema) {
        var rootValue =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          context =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          options =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          delayMs = 300
        return (
          Object.prototype.hasOwnProperty.call(options, 'delayMs') &&
            'number' == typeof options.delayMs &&
            (delayMs = options.delayMs),
          new _apollo_client.ApolloLink(function (operation) {
            return new _apollo_client.Observable(function (observer) {
              var query = operation.query,
                operationName = operation.operationName,
                variables = operation.variables
              delay(delayMs)
                .then(function () {
                  return Object(graphql.a)(
                    schema,
                    Object(printer.a)(query),
                    rootValue,
                    context,
                    variables,
                    operationName,
                  )
                })
                .then(function (result) {
                  observer.next(result), observer.complete()
                })
                .catch(observer.error.bind(observer))
            })
          })
        )
      }
      var data = __webpack_require__(195),
        queries = __webpack_require__(20),
        mocks_mocks = {
          Query: function Query() {
            return {
              allFilms: function allFilms() {
                return data.a
              },
              allPeople: function allPeople() {
                return data.b
              },
            }
          },
        }
      Object(_apollo_client.gql)(queries.a),
        data.a,
        Object(_apollo_client.gql)(queries.b),
        data.b
      Object(client.addDecorator)(lib.jsxDecorator),
        Object(client.addDecorator)(function (storyFn, context) {
          return Object(dist.withConsole)()(storyFn)(context)
        }),
        Object(client.addDecorator)(storybook_readme.addReadme),
        Object(client.addDecorator)(
          (function initializeApollo(_ref) {
            var typeDefs = _ref.typeDefs,
              mocks = _ref.mocks,
              _ref$Provider = _ref.Provider,
              Provider =
                void 0 === _ref$Provider
                  ? _apollo_client.ApolloProvider
                  : _ref$Provider,
              _ref$apolloLinkOption = _ref.apolloLinkOptions,
              apolloLinkOptions =
                void 0 === _ref$apolloLinkOption ? {} : _ref$apolloLinkOption,
              _ref$apolloClientOpti = _ref.apolloClientOptions,
              apolloClientOptions =
                void 0 === _ref$apolloClientOpti ? {} : _ref$apolloClientOpti,
              links = _ref.links,
              typeResolvers = _ref.typeResolvers,
              _ref$context = _ref.context,
              context = void 0 === _ref$context ? {} : _ref$context,
              _ref$rootValue = _ref.rootValue,
              rootValue = void 0 === _ref$rootValue ? {} : _ref$rootValue,
              _ref$cacheOptions = _ref.cacheOptions,
              graphqlClient = (function createClient(_ref) {
                var rootValue = _ref.rootValue,
                  context = _ref.context,
                  typeDefs = _ref.typeDefs,
                  mocks = _ref.mocks,
                  typeResolvers = _ref.typeResolvers,
                  cacheOptions = _ref.cacheOptions,
                  apolloClientOptions = _ref.apolloClientOptions,
                  apolloLinkOptions = _ref.apolloLinkOptions,
                  resolverValidationOptions = _ref.resolverValidationOptions,
                  _ref$links = _ref.links,
                  links =
                    void 0 === _ref$links
                      ? function () {
                          return []
                        }
                      : _ref$links,
                  schema = Object(graphql_tools_dist.makeExecutableSchema)({
                    typeDefs: typeDefs,
                    resolverValidationOptions: resolverValidationOptions,
                  }),
                  mockOptions = {}
                mocks &&
                  ((mockOptions = { schema: schema, mocks: mocks }),
                  Object(graphql_tools_dist.addMockFunctionsToSchema)(
                    mockOptions,
                  )),
                  typeResolvers &&
                    Object(graphql_tools_dist.addResolveFunctionsToSchema)({
                      schema: schema,
                      resolvers: typeResolvers,
                    })
                var cache = new bundle_esm.a(cacheOptions)
                return new _apollo_client.ApolloClient(
                  Object.assign(
                    {
                      addTypename: !0,
                      cache: cache,
                      link: _apollo_client.ApolloLink.from(
                        [].concat(_toConsumableArray(links(cache)), [
                          createLink(
                            schema,
                            rootValue,
                            context,
                            apolloLinkOptions,
                          ),
                        ]),
                      ),
                      connectToDevTools: !0,
                    },
                    apolloClientOptions,
                  ),
                )
              })({
                mocks: mocks,
                apolloLinkOptions: apolloLinkOptions,
                apolloClientOptions: apolloClientOptions,
                typeResolvers: typeResolvers,
                typeDefs: typeDefs,
                rootValue: rootValue,
                context: context,
                links: links,
                cacheOptions:
                  void 0 === _ref$cacheOptions ? {} : _ref$cacheOptions,
                resolverValidationOptions: _ref.resolverValidationOptions,
              })
            function StorybookProvider(_ref2) {
              var children = _ref2.children
              return react_default.a.createElement(
                Provider,
                { client: graphqlClient },
                react_default.a.createElement(react.Fragment, null, children),
              )
            }
            return function (story) {
              return react_default.a.createElement(
                StorybookProvider,
                null,
                story(),
              )
            }
          })({
            typeDefs:
              '\ntype Film {\n  title: String\n  episodeID: Int\n  releaseDate: String\n  director: String\n  producer: String\n  created: String\n  edited: String\n}\n\ntype People {\n  id: String\n  name: String\n  height: Int\n  mass: Int\n  hairColor: String\n  skinColor: String\n  eyeColor: String\n  birthYear: String\n  gender: String\n}\n\ntype Query {\n  allFilms: [Film]\n  allPeople: [People]\n}\n\nschema {\n  query: Query\n}\n',
            mocks: mocks_mocks,
          }),
        ),
        Object(client.addParameters)({
          options: {
            name: 'React TableQL',
            showPanel: !0,
            hierarchySeparator: /\/|\./,
            hierarchyRootSeparator: '|',
            storySort: function storySort(a, b) {
              return a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, void 0, { numeric: !0 })
            },
          },
        })
    },
    36: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return STORYBOOK_SECTIONS
      })
      var STORYBOOK_SECTIONS = {
        gettingStarted: '1 Getting Started',
        tableQl: '2 TableQl',
        apolloTableQl: '3 ApolloTableQL',
        buildingBlocks: '4 Building Blocks',
      }
    },
    380: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(360),
        __webpack_require__(765),
        __webpack_require__(766),
        __webpack_require__(238),
        __webpack_require__(499),
        __webpack_require__(504),
        __webpack_require__(1236),
        __webpack_require__(500),
        __webpack_require__(365),
        __webpack_require__(768),
        __webpack_require__(769),
        __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_12__,
        )
      __webpack_require__(2191)
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter))
              return Array.from(iter)
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              'undefined' == typeof Symbol ||
              !(Symbol.iterator in Object(arr))
            )
              return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            )
          })()
        )
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
          var n = Object.prototype.toString.call(o).slice(8, -1)
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var LEFT_PAGE = 'LEFT',
        range = function range(from, to) {
          for (
            var step =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              i = from,
              range = [];
            i <= to;

          )
            range.push(i), (i += step)
          return range
        },
        Pagination = function Pagination(_ref) {
          var totalRecords = _ref.totalRecords,
            _ref$pageLimit = _ref.pageLimit,
            pageLimit = void 0 === _ref$pageLimit ? 10 : _ref$pageLimit,
            _ref$pageNeighbors = _ref.pageNeighbors,
            pageNeighbors =
              void 0 === _ref$pageNeighbors ? 0 : _ref$pageNeighbors,
            onPageChanged = _ref.onPageChanged,
            log = _ref.log,
            _ref$selectedPage = _ref.selectedPage,
            selectedPage = void 0 === _ref$selectedPage ? 1 : _ref$selectedPage,
            styles = _ref.styles,
            _useState2 = _slicedToArray(
              Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(
                selectedPage,
              ),
              2,
            ),
            currentPage = _useState2[0],
            setCurrentPage = _useState2[1],
            totalPages = Math.ceil(totalRecords / pageLimit)
          ;(pageNeighbors =
            'number' == typeof pageNeighbors
              ? Math.max(0, Math.min(pageNeighbors, 2))
              : 0),
            Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(
              function () {
                var paginationData = {
                  currentPage: currentPage,
                  totalPages: totalPages,
                  pageLimit: pageLimit,
                  totalRecords: totalRecords,
                }
                log(
                  'Pagination Return Data: ',
                  Object.assign({}, paginationData),
                ),
                  onPageChanged && onPageChanged(paginationData)
              },
              [currentPage],
            )
          var gotoPage = function gotoPage(page) {
              setCurrentPage(Math.max(0, Math.min(page, totalPages)))
            },
            handleMoveLeft = function handleMoveLeft() {
              log('Handle move left'), gotoPage(currentPage - 1)
            },
            handleMoveRight = function handleMoveRight() {
              log('Handle move left'), gotoPage(currentPage + 1)
            }
          if (0 === totalRecords || 1 === totalPages) return null
          var pages = (function fetchPageNumbers() {
            var totalNumbers = 2 * pageNeighbors + 3
            if (totalPages > totalNumbers + 2) {
              var startPage = Math.max(2, currentPage - pageNeighbors),
                endPage = Math.min(totalPages - 1, currentPage + pageNeighbors),
                _pages = range(startPage, endPage),
                hasLeftSpill = startPage > 2,
                hasRightSpill = totalPages - endPage > 1,
                spillOffset = totalNumbers - (_pages.length + 1)
              switch (!0) {
                case hasLeftSpill && !hasRightSpill:
                  var extraPages = range(startPage - spillOffset, startPage - 1)
                  _pages = [LEFT_PAGE].concat(
                    _toConsumableArray(extraPages),
                    _toConsumableArray(_pages),
                  )
                  break
                case !hasLeftSpill && hasRightSpill:
                  var _extraPages = range(endPage + 1, endPage + spillOffset)
                  _pages = [].concat(
                    _toConsumableArray(_pages),
                    _toConsumableArray(_extraPages),
                    ['RIGHT'],
                  )
                  break
                case hasLeftSpill && hasRightSpill:
                default:
                  _pages = [LEFT_PAGE].concat(_toConsumableArray(_pages), [
                    'RIGHT',
                  ])
              }
              return (
                log('Fetch page numbers, pages: ', _pages),
                [1].concat(_toConsumableArray(_pages), [totalPages])
              )
            }
            return (
              log('Fetch page numbers, pages: ', pages), range(1, totalPages)
            )
          })()
          return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
            'div',
            {
              className: styles || 'PaginationContainer',
              'data-testid': 'pagination',
            },
            pages.map(function (page, index) {
              return page === LEFT_PAGE
                ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
                    'button',
                    {
                      'aria-label': 'Previous',
                      onClick: handleMoveLeft,
                      key: index,
                    },
                    '«',
                  )
                : 'RIGHT' === page
                ? react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
                    'button',
                    {
                      onClick: handleMoveRight,
                      'aria-label': 'Next',
                      key: index,
                    },
                    '»',
                  )
                : react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(
                    'button',
                    {
                      key: index,
                      className: ''.concat(
                        currentPage === page ? ' active' : '',
                      ),
                      onClick: function onClick() {
                        return (function handleClick(page) {
                          log('Handle pagination page click, page: ', page),
                            gotoPage(page)
                        })(page)
                      },
                    },
                    page,
                  )
            }),
          )
        }
      ;(Pagination.displayName = 'Pagination'),
        (__webpack_exports__.a = Pagination)
      try {
        ;(Pagination.displayName = 'Pagination'),
          (Pagination.__docgenInfo = {
            description: '',
            displayName: 'Pagination',
            props: {
              totalRecords: {
                defaultValue: null,
                description: '',
                name: 'totalRecords',
                required: !0,
                type: { name: 'number' },
              },
              pageLimit: {
                defaultValue: { value: 10 },
                description: '',
                name: 'pageLimit',
                required: !1,
                type: { name: 'number' },
              },
              pageNeighbors: {
                defaultValue: { value: 0 },
                description: '',
                name: 'pageNeighbors',
                required: !1,
                type: { name: 'number' },
              },
              onPageChanged: {
                defaultValue: null,
                description: '',
                name: 'onPageChanged',
                required: !1,
                type: { name: '((returnedData: PaginationData) => void)' },
              },
              selectedPage: {
                defaultValue: { value: 1 },
                description: '',
                name: 'selectedPage',
                required: !1,
                type: { name: 'number' },
              },
              log: {
                defaultValue: null,
                description: '',
                name: 'log',
                required: !0,
                type: { name: '(tag: string, load?: unknown) => void' },
              },
              styles: {
                defaultValue: null,
                description: '',
                name: 'styles',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/components/Pagination/Pagination.tsx#Pagination'
            ] = {
              docgenInfo: Pagination.__docgenInfo,
              name: 'Pagination',
              path: 'src/components/Pagination/Pagination.tsx#Pagination',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    381: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(238),
        __webpack_require__(1166),
        __webpack_require__(2193),
        __webpack_require__(1236),
        __webpack_require__(1231),
        __webpack_require__(1232),
        __webpack_require__(770),
        __webpack_require__(1238),
        __webpack_require__(2195),
        __webpack_require__(1169),
        __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        ),
        _SortArrows_SortArrows__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          382,
        ),
        Table =
          (__webpack_require__(1235),
          function Table(_ref) {
            var log = _ref.log,
              _ref$styles = _ref.styles,
              styles = void 0 === _ref$styles ? {} : _ref$styles,
              displayData = _ref.displayData,
              dataKeys = _ref.dataKeys,
              onRowClick = _ref.onRowClick,
              onSort = _ref.onSort,
              sort = _ref.sort,
              formatLabel = function formatLabel(label) {
                return (
                  log('Format label called.'),
                  label
                    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
                    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2')
                    .replace(/([-,_,~,=,+])/g, ' ')
                    .split(' ')
                    .map(function (label) {
                      return label.charAt(0).toUpperCase() + label.slice(1)
                    })
                    .join(' ')
                )
              },
              getNodeStyle = function getNodeStyle(column, data) {
                if (!column || 'string' == typeof column) return ''
                var nodeStyle = column.nodeStyle
                return nodeStyle
                  ? 'function' == typeof nodeStyle
                    ? nodeStyle(data)
                    : nodeStyle
                  : ''
              }
            return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
              'table',
              { className: styles.table || 'TableQL' },
              react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                'thead',
                { className: styles.thead || 'TableQL-thead' },
                react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                  'tr',
                  { className: styles.theadTr || 'TableQL-tr' },
                  (function renderTableHeader(dataKeys) {
                    return dataKeys.map(function (column, columnIndex) {
                      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                        'th',
                        {
                          className: ''
                            .concat(styles.theadTh || 'TableQL-thead-th', ' ')
                            .concat(
                              column &&
                                'string' != typeof column &&
                                column.headerStyle
                                ? column.headerStyle
                                : '',
                              ' ',
                            )
                            .concat(
                              (column &&
                                'string' != typeof column &&
                                column.sort) ||
                                sort
                                ? 'TableQL-thead-th-sort'
                                : '',
                            ),
                          key: 'TableQLHeader'.concat(
                            'string' == typeof column
                              ? column
                              : column.id + columnIndex,
                          ),
                          onClick: function onClick() {
                            ;('string' == typeof column ||
                              column.sort ||
                              sort ||
                              void 0 !== onSort) &&
                              (log('Header sort was clicked: ', column),
                              void 0 !== onSort && onSort(column))
                          },
                        },
                        'string' == typeof column
                          ? formatLabel(column)
                          : column.label || formatLabel(column.id),
                        (('string' != typeof column && column.sort) || sort) &&
                          react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                            _SortArrows_SortArrows__WEBPACK_IMPORTED_MODULE_12__.a,
                            null,
                          ),
                      )
                    })
                  })(dataKeys),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                'tbody',
                { className: styles.tbody || 'TableQL-tbody' },
                (function renderTableRows(displayData, dataKeys) {
                  return displayData.map(function (data) {
                    return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                      'tr',
                      {
                        key: 'TableQLRow'.concat(JSON.stringify(data)),
                        className: styles.tbodyTr || 'TableQL-tr',
                        onClick: onRowClick
                          ? function () {
                              return onRowClick(data)
                            }
                          : void 0,
                      },
                      dataKeys.map(function (column, columnIndex) {
                        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          'td',
                          {
                            className: '\n            '
                              .concat(
                                styles.tbodyTd || 'TableQL-td',
                                '\n            ',
                              )
                              .concat(
                                getNodeStyle(column, data),
                                '\n            ',
                              ),
                            key: 'TableQLNode'.concat(
                              ('string' == typeof column ? column : column.id) +
                                columnIndex,
                            ),
                          },
                          (function getNodeValue(column, data) {
                            if (
                              'string' != typeof column &&
                              column.customColumn
                            ) {
                              if (!column.component)
                                throw new Error(
                                  'When customColumn true, component property must be provided!',
                                )
                              return column.component(data)
                            }
                            var value = data
                            return (
                              ('string' == typeof column
                                ? column.split('.')
                                : column.id.split('.')
                              ).forEach(function (key) {
                                value = value[key]
                              }),
                              'string' != typeof column && column.component
                                ? column.component(value)
                                : String(value)
                            )
                          })(column, data),
                        )
                      }),
                    )
                  })
                })(displayData, dataKeys),
              ),
            )
          })
      ;(Table.displayName = 'Table'), (__webpack_exports__.a = Table)
      try {
        ;(Table.displayName = 'Table'),
          (Table.__docgenInfo = {
            description: '',
            displayName: 'Table',
            props: {
              log: {
                defaultValue: null,
                description: '',
                name: 'log',
                required: !0,
                type: { name: '(tag: string, load?: unknown) => void' },
              },
              displayData: {
                defaultValue: null,
                description: '',
                name: 'displayData',
                required: !0,
                type: { name: '{ [key: string]: unknown; }[]' },
              },
              dataKeys: {
                defaultValue: null,
                description: '',
                name: 'dataKeys',
                required: !0,
                type: { name: '(string | ColumnConfig)[]' },
              },
              styles: {
                defaultValue: { value: '{}' },
                description: '',
                name: 'styles',
                required: !1,
                type: { name: 'Styles' },
              },
              onRowClick: {
                defaultValue: null,
                description: '',
                name: 'onRowClick',
                required: !1,
                type: { name: '((data: { [key: string]: unknown; }) => void)' },
              },
              sort: {
                defaultValue: null,
                description: '',
                name: 'sort',
                required: !1,
                type: { name: 'boolean' },
              },
              debug: {
                defaultValue: null,
                description: '',
                name: 'debug',
                required: !1,
                type: { name: 'boolean' },
              },
              onSort: {
                defaultValue: null,
                description: '',
                name: 'onSort',
                required: !1,
                type: { name: '((column: string | ColumnConfig) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/components/Table/Table.tsx#Table'] = {
              docgenInfo: Table.__docgenInfo,
              name: 'Table',
              path: 'src/components/Table/Table.tsx#Table',
            })
      } catch (__react_docgen_typescript_loader_error) {}
    },
    382: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        SortArrows =
          (__webpack_require__(2196),
          function SortArrows() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              { className: 'TableQL-thead-th-sort-arrows' },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'TableQL-thead-th-sort-arrow-up' },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                'div',
                { className: 'TableQL-thead-th-sort-arrow-down' },
              ),
            )
          })
      ;(SortArrows.displayName = 'SortArrows'),
        (__webpack_exports__.a = SortArrows)
    },
    383: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(22)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        Loader =
          (__webpack_require__(2203),
          function Loader() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'div',
              { className: 'rtql-loader' },
            )
          })
      ;(Loader.displayName = 'Loader'), (__webpack_exports__.a = Loader)
    },
    384: function (module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return customStories_Setup
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function () {
          return customStories_Welcome
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return customStories_StorybookDirections
        })
      __webpack_require__(22)
      var react = __webpack_require__(3),
        react_default = __webpack_require__.n(react),
        dist = __webpack_require__(375),
        Setup_Setup = function Setup() {
          return react_default.a.createElement(
            'div',
            { style: { width: '960px' } },
            react_default.a.createElement('h1', null, 'Getting Started'),
            react_default.a.createElement(
              'p',
              null,
              'To use TableQL first you need to have React and ReactDOM added to the project, as well as Apollo Client setup. Then install TableQL:',
            ),
            react_default.a.createElement(
              'code',
              null,
              'npm install --save react-tableql',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Once you installed the app all you need to do is import it and configure it to your own liking.',
              ' ',
              react_default.a.createElement(
                'a',
                { onClick: Object(dist.linkTo)('TableQL') },
                react_default.a.createElement('b', null, 'Happy Coding!'),
              ),
            ),
            react_default.a.createElement('br', null),
            react_default.a.createElement(
              'blockquote',
              null,
              'NOTE: Component in which is TableQL used must be wrapped in Apollo Client.',
            ),
            react_default.a.createElement('br', null),
            react_default.a.createElement(
              'a',
              {
                href: 'https://github.com/Danilo-Zekovic/react-tableql',
                target: 'blank',
              },
              react_default.a.createElement(
                'h4',
                null,
                'GitHub: react-tableql',
              ),
            ),
          )
        }
      ;(Setup_Setup.displayName = 'Setup'),
        (Setup_Setup.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Setup',
        })
      var customStories_Setup = Setup_Setup
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['stories/customStories/Setup.js'] = {
          name: 'Setup',
          docgenInfo: Setup_Setup.__docgenInfo,
          path: 'stories/customStories/Setup.js',
        })
      var Welcome_Welcome = function Welcome() {
        return react_default.a.createElement(
          'div',
          { style: { width: '960px' } },
          react_default.a.createElement('h1', null, 'Welcome to TableQL'),
          react_default.a.createElement(
            'h3',
            null,
            'Universal Apollo Client and GraphQL table renderer component.',
          ),
          react_default.a.createElement(
            'p',
            null,
            'On this Storybook presentation you will be able to learn how to use React TableQL components, as well as to see all the different options that they offer.',
            react_default.a.createElement(
              'a',
              { onClick: Object(dist.linkTo)('Getting Started') },
              ' Get started with TableQL!',
            ),
          ),
          react_default.a.createElement('br', null),
          react_default.a.createElement(
            'h4',
            null,
            'Visit our',
            ' ',
            react_default.a.createElement(
              'a',
              {
                href: 'https://github.com/Danilo-Zekovic/react-tableql',
                target: 'blank',
              },
              ' ',
              'GitHub: react-tableql',
            ),
          ),
        )
      }
      ;(Welcome_Welcome.displayName = 'Welcome'),
        (Welcome_Welcome.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Welcome',
        })
      var customStories_Welcome = Welcome_Welcome
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['stories/customStories/Welcome.js'] = {
          name: 'Welcome',
          docgenInfo: Welcome_Welcome.__docgenInfo,
          path: 'stories/customStories/Welcome.js',
        })
      var StorybookDirections_StorybookDirections = function StorybookDirections() {
        return react_default.a.createElement(
          'div',
          { style: { width: '960px' } },
          react_default.a.createElement('h1', null, 'Storybook Directions'),
          react_default.a.createElement(
            'p',
            null,
            '"Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient."',
          ),
          react_default.a.createElement(
            'a',
            { href: 'https://storybook.js.org/', target: 'blank' },
            react_default.a.createElement(
              'h3',
              null,
              'Visit official Storybook webpage!',
            ),
          ),
          react_default.a.createElement(
            'p',
            null,
            'Most of the stories/sections of this Storybook presentation have in the lower part of the screen four tabs: Actions, JSX, Readme, and Accessability. They offer additional information about the mode/option that TableQL has to offer. Bellow you will find short explanations of each tab:',
          ),
          react_default.a.createElement(
            'h3',
            null,
            react_default.a.createElement('b', null, 'Actions'),
          ),
          react_default.a.createElement(
            'p',
            null,
            'Displays all of the logs that happen. You can see it debug mode and error boundary stories',
          ),
          react_default.a.createElement(
            'h3',
            null,
            react_default.a.createElement('b', null, 'JSX'),
          ),
          react_default.a.createElement(
            'p',
            null,
            'Represents the code needed to achieve given example. Note JSX and JavaScript in that tab is not the latest JavaScript as it transformed into ES5',
          ),
          react_default.a.createElement(
            'h3',
            null,
            react_default.a.createElement('b', null, 'Readme'),
          ),
          react_default.a.createElement(
            'p',
            null,
            'Coming soon! Will contain additional details and explanations about given example and how to achieve it.',
          ),
          react_default.a.createElement(
            'h3',
            null,
            react_default.a.createElement('b', null, 'Accessability'),
          ),
          react_default.a.createElement(
            'p',
            null,
            'Shows is the UI component accessible. Also, you can see by which rules it is or it is not.',
          ),
        )
      }
      ;(StorybookDirections_StorybookDirections.displayName =
        'StorybookDirections'),
        (StorybookDirections_StorybookDirections.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StorybookDirections',
        })
      var customStories_StorybookDirections = StorybookDirections_StorybookDirections
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES[
          'stories/customStories/StorybookDirections.js'
        ] = {
          name: 'StorybookDirections',
          docgenInfo: StorybookDirections_StorybookDirections.__docgenInfo,
          path: 'stories/customStories/StorybookDirections.js',
        })
    },
    771: function (module, exports, __webpack_require__) {
      var api = __webpack_require__(371),
        content = __webpack_require__(2206)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 }
      api(content, options)
      module.exports = content.locals || {}
    },
  },
  [[1276, 1, 2]],
])
//# sourceMappingURL=main.ae28c15f916e93289746.bundle.js.map
