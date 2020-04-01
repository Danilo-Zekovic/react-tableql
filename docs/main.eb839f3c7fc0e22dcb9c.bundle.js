;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    1268: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            118,
          )
          ;(module._StorybookPreserveDecorators = !0),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
              [
                __webpack_require__(1269),
                __webpack_require__(1270),
                __webpack_require__(1292),
                __webpack_require__(1293),
              ],
              module,
            )
        }.call(this, __webpack_require__(499)(module))
    },
    1269: function(module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = function() {
        return []
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 1269)
    },
    1270: function(module, exports, __webpack_require__) {
      var map = {
        './ApolloTableQL/stories/Basic.stories.tsx': 1271,
        './ApolloTableQL/stories/CustomColumns.stories.tsx': 1282,
        './ApolloTableQL/stories/CustomStyles.stories.tsx': 1284,
        './ApolloTableQL/stories/Introduction.stories.tsx': 1285,
        './ApolloTableQL/stories/Pagination.stories.tsx': 1286,
        './TableQL/TableQL.stories.tsx': 1287,
        './components/Loader/Loader.stories.tsx': 1288,
        './components/Pagination/Pagination.stories.tsx': 1289,
        './components/SortArrows/SortArrows.stories.tsx': 1290,
        './components/Table/Table.stories.tsx': 1291,
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
        (webpackContext.id = 1270)
    },
    1271: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        }),
        __webpack_require__.d(__webpack_exports__, 'DebugOn', function() {
          return DebugOn
        }),
        __webpack_require__.d(__webpack_exports__, 'ClickRow', function() {
          return ClickRow
        }),
        __webpack_require__.d(__webpack_exports__, 'Sort', function() {
          return Sort
        }),
        __webpack_require__.d(__webpack_exports__, 'ErrorBoundary', function() {
          return ErrorBoundary
        })
      __webpack_require__(39)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18),
        _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          22,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.apolloTableQl,
          '|Basic',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
      }
      var Default = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          { query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a },
        )
      }
      Default.displayName = 'Default'
      var _ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'h3',
          null,
          'Check Actions bellow!',
        ),
        DebugOn = function() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            _ref,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
                debug: !0,
              },
            ),
          )
        },
        ClickRow = function() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
            {
              query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
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
      var Sort = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            sort: !0,
          },
        )
      }
      Sort.displayName = 'Sort'
      var ErrorBoundary = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
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
    1272: function(module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(184)(!1)).push([
        module.i,
        '.TableQL {\n  background-color: transparent;\n  width: 100%;\n  margin: 0.5rem 0;\n  text-align: left;\n  padding: 0 0.4rem;\n  border-collapse: collapse;\n  display: table;\n  border-spacing: 2px;\n}\n\n.TableQL-thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-thead-th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.TableQL-thead-th-sort {\n  cursor: pointer;\n}\n\n.TableQL-thead-th-sort:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-tr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n}\n\ntbody .TableQL-tr:hover {\n  background-color: #f1f3f5;\n}\n\n.TableQL-thead-th {\n  text-align: inherit;\n  font-weight: bold;\n}\n\n.TableQL-tbody {\n  display: table-row-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\n.TableQL-td,\n.TableQL-thead-th {\n  padding: 0.69rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n  display: table-cell;\n  vertical-align: inherit;\n}\n\n/* PAGINATION */\n.PaginationContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n/* ========== */\n',
        '',
      ]),
        (module.exports = exports)
    },
    1273: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(183),
        content = __webpack_require__(1274)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 },
        exported = (api(content, options), content.locals ? content.locals : {})
      module.exports = exported
    },
    1274: function(module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(184)(!1)).push([
        module.i,
        '.PaginationContainer {\n  display: flex;\n  justify-content: center;\n}\n\n.PaginationContainer button {\n  color: black;\n  float: left;\n  padding: 8px 16px;\n  margin: 0;\n  text-decoration: none;\n  border: 1px solid #ddd;\n  outline: 0;\n  background-color: white;\n}\n\n.PaginationContainer button.active {\n  background-color: gray;\n  color: white;\n  border: 1px solid gray;\n}\n\n.PaginationContainer button:hover:not(.active) {\n  background-color: #ddd;\n}\n\n.PaginationContainer button:first-child {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.PaginationContainer button:last-child {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.PaginationContainer button:disabled {\n  background-color: lightgray;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    1277: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(183),
        content = __webpack_require__(1278)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 },
        exported = (api(content, options), content.locals ? content.locals : {})
      module.exports = exported
    },
    1278: function(module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(184)(!1)).push([
        module.i,
        '.TableQL-thead-th-sort-arrows {\n  float: right;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  align-items: center;\n}\n\n.TableQL-thead-th-sort-arrow-up {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid transparent;\n\n  border-bottom: 5px solid #787C80;\n  margin-bottom: 1px;\n}\n\n.TableQL-thead-th-sort-arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n\n  border-top: 5px solid #787C80;\n  margin-top: 1px;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    1280: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(183),
        content = __webpack_require__(1281)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 },
        exported = (api(content, options), content.locals ? content.locals : {})
      module.exports = exported
    },
    1281: function(module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(184)(!1)).push([
        module.i,
        '.rtql-loader {\n  border: 5px solid #f3f3f3; /* Light grey */\n  border-top: 5px solid #3498db; /* Blue */\n  border-bottom: 5px solid #3498db;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    1282: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Order', function() {
          return Order
        }),
        __webpack_require__.d(__webpack_exports__, 'HeaderLabel', function() {
          return HeaderLabel
        }),
        __webpack_require__.d(__webpack_exports__, 'Component', function() {
          return Component
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'ReactComponent',
          function() {
            return ReactComponent
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'CustomColumn', function() {
          return CustomColumn
        }),
        __webpack_require__.d(__webpack_exports__, 'StyleHeader', function() {
          return StyleHeader
        }),
        __webpack_require__.d(__webpack_exports__, 'StyleNodes', function() {
          return StyleNodes
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'SelectiveStyling',
          function() {
            return SelectiveStyling
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'Sort', function() {
          return Sort
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomSort', function() {
          return CustomSort
        })
      __webpack_require__(526)
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18),
        _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          22,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
        ),
        Button =
          (__webpack_require__(322),
          function(_ref) {
            var data = _ref.data
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
            _stories_constants__WEBPACK_IMPORTED_MODULE_4__.a.apolloTableQl,
            '|Custom Columns',
          ),
          component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
        })
      var Order = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: ['releaseDate', 'title', 'episodeID'],
          },
        )
      }
      Order.displayName = 'Order'
      var HeaderLabel = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              { id: 'episodeID', label: 'Episode Identification' },
              'releaseDate',
              'title',
            ],
          },
        )
      }
      HeaderLabel.displayName = 'HeaderLabel'
      var Component = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
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
      var ReactComponent = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                component: function component(data) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
      var CustomColumn = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              'title',
              {
                id: 'actions',
                component: function component(props) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
      var StyleHeader = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              { id: 'title', headerStyle: 'bg-color' },
            ],
          },
        )
      }
      StyleHeader.displayName = 'StyleHeader'
      var StyleNodes = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              { id: 'title', nodeStyle: 'bg-color' },
            ],
          },
        )
      }
      StyleNodes.displayName = 'StyleNodes'
      var SelectiveStyling = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                nodeStyle: function nodeStyle(data) {
                  if (19 >= data.title.length) return 'bg-color'
                },
              },
            ],
          },
        )
      }
      SelectiveStyling.displayName = 'SelectiveStyling'
      var Sort = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: ['episodeID', 'releaseDate', { id: 'title', sort: !0 }],
          },
        )
      }
      Sort.displayName = 'Sort'
      var CustomSort = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_2__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_3__.a,
            columns: [
              'episodeID',
              'releaseDate',
              {
                id: 'title',
                sort: function sort(data) {
                  return data.reverse()
                },
              },
            ],
          },
        )
      }
      ;(CustomSort.displayName = 'CustomSort'),
        (Order.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Order',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'Order',
            docgenInfo: Order.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (HeaderLabel.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'HeaderLabel',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'HeaderLabel',
            docgenInfo: HeaderLabel.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (Component.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Component',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'Component',
            docgenInfo: Component.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (ReactComponent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ReactComponent',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'ReactComponent',
            docgenInfo: ReactComponent.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (CustomColumn.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomColumn',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'CustomColumn',
            docgenInfo: CustomColumn.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (StyleHeader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StyleHeader',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'StyleHeader',
            docgenInfo: StyleHeader.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (StyleNodes.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StyleNodes',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'StyleNodes',
            docgenInfo: StyleNodes.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (SelectiveStyling.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SelectiveStyling',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'SelectiveStyling',
            docgenInfo: SelectiveStyling.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (Sort.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Sort',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'Sort',
            docgenInfo: Sort.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          }),
        (CustomSort.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'CustomSort',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomColumns.stories.tsx'
          ] = {
            name: 'CustomSort',
            docgenInfo: CustomSort.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomColumns.stories.tsx',
          })
    },
    1283: function(module, exports, __webpack_require__) {
      ;(exports = __webpack_require__(184)(!1)).push([
        module.i,
        '* {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.pagination {\n  background-color: rgb(150, 140, 209);\n}\n\n.bg-color {\n  background-color: #61dafb;\n  border: 3px solid red !important;\n}\n\ncode {\n  background-color: #f1f3f5;\n  padding: 10px;\n  border-radius: 5px;\n}\n\na {\n  cursor: pointer;\n  color: #7751d1;\n  text-decoration: none;\n}\n\n.customRow td,\n.customRow th {\n  border: 1px solid #dee2e6;\n}\n\n.customRow th {\n  background-color: rgb(150, 140, 209);\n  color: white;\n}\n\ntbody .customRow:hover {\n  background-color: #f1f3f5;\n}\n',
        '',
      ]),
        (module.exports = exports)
    },
    1284: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Table', function() {
          return Table
        }),
        __webpack_require__.d(__webpack_exports__, 'Thead', function() {
          return Thead
        }),
        __webpack_require__.d(__webpack_exports__, 'TrInThead', function() {
          return TrInThead
        }),
        __webpack_require__.d(__webpack_exports__, 'ThInThead', function() {
          return ThInThead
        }),
        __webpack_require__.d(__webpack_exports__, 'Tbody', function() {
          return Tbody
        }),
        __webpack_require__.d(__webpack_exports__, 'TrInTbody', function() {
          return TrInTbody
        }),
        __webpack_require__.d(__webpack_exports__, 'TdInTbody', function() {
          return TdInTbody
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
        _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          22,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          33,
        )
      __webpack_require__(322)
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.apolloTableQl,
          '|Custom Styles',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var Table = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { table: 'bg-color' },
          },
        )
      }
      Table.displayName = 'Table'
      var Thead = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { thead: 'bg-color' },
          },
        )
      }
      Thead.displayName = 'Thead'
      var TrInThead = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { theadTr: 'bg-color' },
          },
        )
      }
      TrInThead.displayName = 'TrInThead'
      var ThInThead = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { theadTh: 'bg-color' },
          },
        )
      }
      ThInThead.displayName = 'ThInThead'
      var Tbody = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { tbody: 'bg-color' },
          },
        )
      }
      Tbody.displayName = 'Tbody'
      var TrInTbody = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { tbodyTr: 'bg-color' },
          },
        )
      }
      TrInTbody.displayName = 'TrInTbody'
      var TdInTbody = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.a,
            styles: { tbodyTd: 'bg-color' },
          },
        )
      }
      ;(TdInTbody.displayName = 'TdInTbody'),
        (Table.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Table',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'Table',
            docgenInfo: Table.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (Thead.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Thead',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'Thead',
            docgenInfo: Thead.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (TrInThead.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TrInThead',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'TrInThead',
            docgenInfo: TrInThead.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (ThInThead.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ThInThead',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'ThInThead',
            docgenInfo: ThInThead.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (Tbody.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Tbody',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'Tbody',
            docgenInfo: Tbody.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (TrInTbody.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TrInTbody',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'TrInTbody',
            docgenInfo: TrInTbody.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          }),
        (TdInTbody.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TdInTbody',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/CustomStyles.stories.tsx'
          ] = {
            name: 'TdInTbody',
            docgenInfo: TdInTbody.__docgenInfo,
            path: 'src/ApolloTableQL/stories/CustomStyles.stories.tsx',
          })
    },
    1285: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Introduction', function() {
          return Introduction
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          141,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          33,
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
        title: _stories_constants__WEBPACK_IMPORTED_MODULE_2__.a.apolloTableQl,
        parameters: { options: { showPanel: !1 } },
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h1',
          null,
          'ApolloTableQL',
        ),
        _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'ApolloTableQL is TableQL wrapped with Apollo Client Query and its logic. It is a react component that uses Apollo to fetches data with GraphQL, and then parses data and renders it into grid/table.',
        ),
        _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'To import it all you need to do is:',
        ),
        _ref4 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'code',
          null,
          'import ',
          '{ ApolloTableQL }',
          " from 'react-tableql'",
        ),
        _ref5 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'And use it:',
        ),
        _ref6 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'code',
          null,
          '<ApolloTableQL query={QUERY} />',
        ),
        _ref7 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h3',
          null,
          'IMPORTANT',
        ),
        _ref8 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'All the props that TabelQL has are also applicable to ApolloTableQL. ApolloTableQL is TableQL wrapped in Apollo Client Query component.',
        ),
        _ref9 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'h2',
          null,
          'Props',
        ),
        _ref10 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'p',
          null,
          'ApolloTableQL are same as for TableQL except instead of `data` there `query`',
        ),
        Introduction = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { style: { width: '960px' } },
            _ref,
            _ref2,
            _ref3,
            _ref4,
            _ref5,
            _ref6,
            _ref7,
            _ref8,
            _ref9,
            _ref10,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_1__.a,
              {
                data: PROPS,
                styles: {
                  tbodyTr: 'customRow TableQL-tr',
                  theadTr: 'customRow',
                },
              },
            ),
            '* this table is created with TableQL :)',
          )
        }
      ;(Introduction.displayName = 'Introduction'),
        (Introduction.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Introduction',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/ApolloTableQL/stories/Introduction.stories.tsx'
          ] = {
            name: 'Introduction',
            docgenInfo: Introduction.__docgenInfo,
            path: 'src/ApolloTableQL/stories/Introduction.stories.tsx',
          })
    },
    1286: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Basic', function() {
          return Basic
        }),
        __webpack_require__.d(__webpack_exports__, 'DebugMode', function() {
          return DebugMode
        }),
        __webpack_require__.d(__webpack_exports__, 'PageLimit', function() {
          return PageLimit
        }),
        __webpack_require__.d(__webpack_exports__, 'PageNeighbors', function() {
          return PageNeighbors
        }),
        __webpack_require__.d(__webpack_exports__, 'CurrentPage', function() {
          return CurrentPage
        }),
        __webpack_require__.d(__webpack_exports__, 'OnPageChanged', function() {
          return OnPageChanged
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomStyles', function() {
          return CustomStyles
        }),
        __webpack_require__.d(__webpack_exports__, 'Sort', function() {
          return Sort
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18),
        _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          22,
        ),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          33,
        )
      __webpack_require__(322)
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.apolloTableQl,
          '|Pagination',
        ),
        component: _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: !0,
          },
        ),
        Basic = function() {
          return _ref
        }
      Basic.displayName = 'Basic'
      var _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: !0,
            debug: !0,
          },
        ),
        DebugMode = function() {
          return _ref2
        }
      DebugMode.displayName = 'DebugMode'
      var PageLimit = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: { pageLimit: 5 },
          },
        )
      }
      PageLimit.displayName = 'PageLimit'
      var PageNeighbors = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: { pageNeighbors: 2, pageLimit: 5 },
          },
        )
      }
      PageNeighbors.displayName = 'PageNeighbors'
      var CurrentPage = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: { currentPage: 3 },
          },
        )
      }
      CurrentPage.displayName = 'CurrentPage'
      var OnPageChanged = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: {
              onPageChanged: function onPageChanged(
                currentPage,
                totalPages,
                pageLimit,
                totalRecords,
              ) {
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
      var CustomStyles = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: { styles: 'pagination' },
          },
        )
      }
      CustomStyles.displayName = 'CustomStyles'
      var _ref3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _ApolloTableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            query: _mocks_queriesMock__WEBPACK_IMPORTED_MODULE_2__.b,
            pagination: !0,
            sort: !0,
          },
        ),
        Sort = function() {
          return _ref3
        }
      Sort.displayName = 'Sort'
    },
    1287: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _TableQL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(141),
        _mocks_dataMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(242),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          33,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.tableQl,
          '|Basic',
        ),
        component: _TableQL__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _TableQL__WEBPACK_IMPORTED_MODULE_1__.a,
          { data: _mocks_dataMock__WEBPACK_IMPORTED_MODULE_2__.a },
        ),
        Default = function() {
          return _ref
        }
      ;(Default.displayName = 'Default'),
        (Default.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Default',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/TableQL/TableQL.stories.tsx'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/TableQL/TableQL.stories.tsx',
          })
    },
    1288: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(195),
        _stories_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          33,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_2__.a.buildingBlocks,
          '|Loader',
        ),
        component: _Loader__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Loader__WEBPACK_IMPORTED_MODULE_1__.a,
          null,
        ),
        Default = function() {
          return _ref
        }
      ;(Default.displayName = 'Default'),
        (Default.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Default',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/Loader/Loader.stories.tsx'
          ] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Loader/Loader.stories.tsx',
          })
    },
    1289: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(192),
        _stories_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          33,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_2__.a.buildingBlocks,
          '|Pagination',
        ),
        component: _Pagination__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var Default = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Pagination__WEBPACK_IMPORTED_MODULE_1__.a,
          { totalRecords: 100, log: function log() {} },
        )
      }
      ;(Default.displayName = 'Default'),
        (Default.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Default',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/Pagination/Pagination.stories.tsx'
          ] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Pagination/Pagination.stories.tsx',
          })
    },
    1290: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _SortArrows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(194),
        _stories_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          33,
        )
      __webpack_exports__.default = {
        title: ''.concat(
          _stories_constants__WEBPACK_IMPORTED_MODULE_2__.a.buildingBlocks,
          '|SortArrows',
        ),
        component: _SortArrows__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _SortArrows__WEBPACK_IMPORTED_MODULE_1__.a,
          null,
        ),
        Default = function() {
          return _ref
        }
      ;(Default.displayName = 'Default'),
        (Default.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Default',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/SortArrows/SortArrows.stories.tsx'
          ] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/SortArrows/SortArrows.stories.tsx',
          })
    },
    1291: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function() {
          return Default
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(193),
        _mocks_dataMock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(242),
        _stories_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          33,
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
          _stories_constants__WEBPACK_IMPORTED_MODULE_3__.a.buildingBlocks,
          '|Table',
        ),
        component: _Table__WEBPACK_IMPORTED_MODULE_1__.a,
      }
      var Default = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _Table__WEBPACK_IMPORTED_MODULE_1__.a,
          {
            log: function log() {},
            displayData: _mocks_dataMock__WEBPACK_IMPORTED_MODULE_2__.a,
            dataKeys: DATA_KEYS,
          },
        )
      }
      ;(Default.displayName = 'Default'),
        (Default.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Default',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.stories.tsx'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Table/Table.stories.tsx',
          })
    },
    1292: function(module, exports) {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = function() {
        return []
      }),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (module.exports = webpackEmptyContext),
        (webpackEmptyContext.id = 1292)
    },
    1293: function(module, exports, __webpack_require__) {
      var map = {
        './Introduction.stories.tsx': 1294,
        './Setup.stories.tsx': 1298,
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
        (webpackContext.id = 1293)
    },
    1294: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(
          __webpack_exports__,
          'toReactTableQL',
          function() {
            return toReactTableQL
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'toStorybook', function() {
          return toStorybook
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _customStories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196),
        _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33)
      __webpack_exports__.default = {
        title: ''.concat(
          _constants__WEBPACK_IMPORTED_MODULE_2__.a.gettingStarted,
          '|Introduction',
        ),
        id: 0,
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_1__.c,
          null,
        ),
        toReactTableQL = function() {
          return _ref
        }
      toReactTableQL.displayName = 'toReactTableQL'
      var _ref2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_1__.b,
          null,
        ),
        toStorybook = function() {
          return _ref2
        }
      ;(toStorybook.displayName = 'toStorybook'),
        (toReactTableQL.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'toReactTableQL',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories/Introduction.stories.tsx'] = {
            name: 'toReactTableQL',
            docgenInfo: toReactTableQL.__docgenInfo,
            path: 'stories/Introduction.stories.tsx',
          }),
        (toStorybook.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'toStorybook',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories/Introduction.stories.tsx'] = {
            name: 'toStorybook',
            docgenInfo: toStorybook.__docgenInfo,
            path: 'stories/Introduction.stories.tsx',
          })
    },
    1298: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Install', function() {
          return Install
        })
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _customStories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(196),
        _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33)
      __webpack_exports__.default = {
        title: ''.concat(
          _constants__WEBPACK_IMPORTED_MODULE_2__.a.gettingStarted,
          '|Setup',
        ),
      }
      var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _customStories__WEBPACK_IMPORTED_MODULE_1__.a,
          null,
        ),
        Install = function() {
          return _ref
        }
      ;(Install.displayName = 'Install'),
        (Install.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Install',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories/Setup.stories.tsx'] = {
            name: 'Install',
            docgenInfo: Install.__docgenInfo,
            path: 'stories/Setup.stories.tsx',
          })
    },
    1299: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      var client = __webpack_require__(118),
        lib = __webpack_require__(529),
        dist = __webpack_require__(530),
        storybook_readme = __webpack_require__(531),
        addon_console_dist = __webpack_require__(324),
        apollo_storybook_react_lib = __webpack_require__(532),
        apollo_storybook_react_lib_default = __webpack_require__.n(
          apollo_storybook_react_lib,
        ),
        FILMS = [
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
        ],
        src = __webpack_require__(191),
        src_default = __webpack_require__.n(src),
        mocks = {
          Query: function Query() {
            return {
              allFilms: function allFilms() {
                return FILMS
              },
              allPeople: function allPeople() {
                return PEOPLE
              },
            }
          },
        }
      src_default()(
        '\n{\n  allFilms {\n    title\n    episodeID\n    releaseDate\n  }\n}\n',
      ),
        src_default()(
          '\n{\n  allPeople {\n    name\n    gender\n    birthYear\n    eyeColor\n    hairColor\n    skinColor\n  }\n}\n',
        )
      Object(client.addDecorator)(lib.jsxDecorator),
        Object(client.addDecorator)(function(storyFn, context) {
          return Object(addon_console_dist.withConsole)()(storyFn)(context)
        }),
        Object(client.addDecorator)(dist.withA11y),
        Object(client.addDecorator)(storybook_readme.addReadme),
        Object(client.addDecorator)(
          apollo_storybook_react_lib_default()({
            typeDefs:
              '\ntype Film {\n  title: String\n  episodeID: Int\n  releaseDate: String\n  director: String\n  producer: String\n  created: String\n  edited: String\n}\n\ntype People {\n  id: String\n  name: String\n  height: Int\n  mass: Int\n  hairColor: String\n  skinColor: String\n  eyeColor: String\n  birthYear: String\n  gender: String\n}\n\ntype Query {\n  allFilms: [Film]\n  allPeople: [People]\n}\n\nschema {\n  query: Query\n}\n',
            mocks: mocks,
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
    141: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(55),
        __webpack_require__(71),
        __webpack_require__(72),
        __webpack_require__(39),
        __webpack_require__(110),
        __webpack_require__(450),
        __webpack_require__(90),
        __webpack_require__(62),
        __webpack_require__(526),
        __webpack_require__(137),
        __webpack_require__(295),
        __webpack_require__(83),
        __webpack_require__(149),
        __webpack_require__(52),
        __webpack_require__(84),
        __webpack_require__(456),
        __webpack_require__(73),
        __webpack_require__(74)
      var react = __webpack_require__(2),
        react_default = __webpack_require__.n(react),
        Pagination = (__webpack_require__(527), __webpack_require__(192)),
        Table = __webpack_require__(193)
      __webpack_require__(150),
        __webpack_require__(61),
        __webpack_require__(296),
        __webpack_require__(151),
        __webpack_require__(112),
        __webpack_require__(320),
        __webpack_require__(321),
        __webpack_require__(217),
        __webpack_require__(92),
        __webpack_require__(298),
        __webpack_require__(1279),
        __webpack_require__(63)
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj
              })(obj)
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw new TypeError('Cannot call a class as a function')
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor)
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? _assertThisInitialized(self)
          : call
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return self
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' == typeof Proxy) return !0
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {}),
            ),
            !0
          )
        } catch (e) {
          return !1
        }
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o)
            })(o)
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o
          })(o, p)
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
      var ErrorBaundary_ref = react_default.a.createElement(
          'h1',
          null,
          'Something went wrong!',
        ),
        _ref2 = react_default.a.createElement('b', null, 'ERROR: '),
        ErrorBaundary_ErrorBoundary = (function(_Component) {
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
          var _super = (function _createSuper(Derived) {
            return function() {
              var result,
                Super = _getPrototypeOf(Derived)
              if (_isNativeReflectConstruct()) {
                var NewTarget = _getPrototypeOf(this).constructor
                result = Reflect.construct(Super, arguments, NewTarget)
              } else result = Super.apply(this, arguments)
              return _possibleConstructorReturn(this, result)
            }
          })(ErrorBoundary)
          function ErrorBoundary() {
            var _this
            _classCallCheck(this, ErrorBoundary)
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key]
            return (
              _defineProperty(
                _assertThisInitialized(
                  (_this = _super.call.apply(_super, [this].concat(args))),
                ),
                'state',
                { hasError: !1, error: new Error() },
              ),
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
                    (function _objectSpread(target) {
                      for (var source, i = 1; i < arguments.length; i++)
                        (source = null != arguments[i] ? arguments[i] : {}),
                          i % 2
                            ? ownKeys(Object(source), !0).forEach(function(
                                key,
                              ) {
                                _defineProperty(target, key, source[key])
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                target,
                                Object.getOwnPropertyDescriptors(source),
                              )
                            : ownKeys(Object(source)).forEach(function(key) {
                                Object.defineProperty(
                                  target,
                                  key,
                                  Object.getOwnPropertyDescriptor(source, key),
                                )
                              })
                      return target
                    })({}, this.state, { hasError: !0, error: error }),
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
                        ErrorBaundary_ref,
                        react_default.a.createElement(
                          'p',
                          { style: { color: 'red' } },
                          _ref2,
                          error.message,
                        ),
                      )
                    : this.props.children
                },
              },
            ]),
            ErrorBoundary
          )
        })(react.Component)
      ErrorBaundary_ErrorBoundary.displayName = 'ErrorBoundary'
      var ErrorBaundary = ErrorBaundary_ErrorBoundary,
        Loader = __webpack_require__(195)
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
            ? function(obj) {
                return typeof obj
              }
            : function(obj) {
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
              ? Array.from(n)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var _ref3 = react_default.a.createElement(Loader.a, null),
        _ref4 = react_default.a.createElement('p', null, 'No data found!'),
        _ref5 = react_default.a.createElement('p', null, 'No data found!'),
        TableQL = function(_ref) {
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
            _useState4 = _slicedToArray(Object(react.useState)([]), 2),
            displayData = _useState4[0],
            setDisplayData = _useState4[1],
            _useState6 = _slicedToArray(Object(react.useState)([]), 2),
            fullData = _useState6[0],
            setFullData = _useState6[1],
            traverseData = function(data) {
              for (var key in (log('Traverse data called.'), data))
                return Array.isArray(data) ? data : traverseData(data[key])
            },
            log = function(tag) {
              var load =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : ''
              debug && console.log(tag, load)
            }
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
            return log('Loading: ', loading), _ref3
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
          if (0 === data.length)
            return log('No data found!', data.length), _ref4
          log('Data: ', data)
          var traversedData = traverseData(data)
          0 === displayData.length && setDisplayData(traversedData),
            0 === fullData.length && setFullData(traversedData)
          var dataKeys =
              columns ||
              (function getHeaderLabels(data) {
                log('Get header labels.')
                var labels = []
                for (var key in data) key.includes('__') || labels.push(key)
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
                  : pageLimit),
              dataToDisplay = displayData
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
                        newOrder = _toConsumableArray(fullData)
                      column.sort && 'function' == typeof column.sort
                        ? (newOrder = column.sort(newOrder, property))
                        : ((column.sort && 'boolean' == typeof column.sort) ||
                            sort) &&
                          newOrder.sort(function(a, b) {
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
                      totalRecords: traversedData.length,
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
                              pagination.onPageChanged(
                                currentPage,
                                totalPages,
                                pageLimit,
                                totalRecords,
                              )
                        })(returnedData)
                      },
                      styles:
                        'boolean' != typeof pagination
                          ? pagination.styles
                          : void 0,
                      log: log,
                    }),
                )
              : (log('No data found!', displayData), _ref5)
          )
        }
      TableQL.displayName = 'TableQL'
      __webpack_exports__.a = TableQL
    },
    18: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(55),
        __webpack_require__(150),
        __webpack_require__(61),
        __webpack_require__(303),
        __webpack_require__(91),
        __webpack_require__(151),
        __webpack_require__(112),
        __webpack_require__(320),
        __webpack_require__(321),
        __webpack_require__(92),
        __webpack_require__(63)
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        ),
        react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76),
        graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(191),
        graphql_tag__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          graphql_tag__WEBPACK_IMPORTED_MODULE_13__,
        ),
        _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          141,
        )
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            return target
          }).apply(this, arguments)
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
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
                0 <= excluded.indexOf(key) || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              0 <= excluded.indexOf(key) ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      var ApolloTableQL = function(_ref) {
        var query = _ref.query,
          props = _objectWithoutProperties(_ref, ['query']),
          _useQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_12__.e)(
            'string' == typeof query
              ? graphql_tag__WEBPACK_IMPORTED_MODULE_13___default()(query)
              : query,
            (function _objectSpread(target) {
              for (var source, i = 1; i < arguments.length; i++)
                (source = null != arguments[i] ? arguments[i] : {}),
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function(key) {
                        _defineProperty(target, key, source[key])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key),
                        )
                      })
              return target
            })({}, props),
          ),
          loading = _useQuery.loading,
          error = _useQuery.error,
          data = _useQuery.data
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
          _TableQL_TableQL__WEBPACK_IMPORTED_MODULE_14__.a,
          _extends({ loading: loading, data: data, error: error }, props),
        )
      }
      ;(ApolloTableQL.displayName = 'ApolloTableQL'),
        (__webpack_exports__.a = ApolloTableQL)
    },
    192: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(55),
        __webpack_require__(71),
        __webpack_require__(72),
        __webpack_require__(39),
        __webpack_require__(150),
        __webpack_require__(61),
        __webpack_require__(110),
        __webpack_require__(90),
        __webpack_require__(62),
        __webpack_require__(136),
        __webpack_require__(137),
        __webpack_require__(83),
        __webpack_require__(149),
        __webpack_require__(151),
        __webpack_require__(112),
        __webpack_require__(320),
        __webpack_require__(321),
        __webpack_require__(92),
        __webpack_require__(52),
        __webpack_require__(84),
        __webpack_require__(73),
        __webpack_require__(63),
        __webpack_require__(74)
      var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_23__,
        )
      __webpack_require__(1273)
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
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })),
            keys.push.apply(keys, symbols)
        }
        return keys
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
              ? Array.from(n)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          )
        }
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var LEFT_PAGE = 'LEFT',
        range = function(from, to) {
          for (
            var step =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1,
              i = from,
              range = [];
            i <= to;

          )
            range.push(i), (i += step)
          return range
        },
        Pagination = function(_ref) {
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
              Object(react__WEBPACK_IMPORTED_MODULE_23__.useState)(
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
            Object(react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(
              function() {
                var paginationData = {
                  currentPage: currentPage,
                  totalPages: totalPages,
                  pageLimit: pageLimit,
                  totalRecords: totalRecords,
                }
                log(
                  'Pagination Return Data: ',
                  (function _objectSpread(target) {
                    for (var source, i = 1; i < arguments.length; i++)
                      (source = null != arguments[i] ? arguments[i] : {}),
                        i % 2
                          ? ownKeys(Object(source), !0).forEach(function(key) {
                              _defineProperty(target, key, source[key])
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              target,
                              Object.getOwnPropertyDescriptors(source),
                            )
                          : ownKeys(Object(source)).forEach(function(key) {
                              Object.defineProperty(
                                target,
                                key,
                                Object.getOwnPropertyDescriptor(source, key),
                              )
                            })
                    return target
                  })({}, paginationData),
                ),
                  onPageChanged && onPageChanged(paginationData)
              },
              [currentPage],
            )
          var gotoPage = function(page) {
              setCurrentPage(Math.max(0, Math.min(page, totalPages)))
            },
            handleMoveLeft = function() {
              log('Handle move left'), gotoPage(currentPage - 1)
            },
            handleMoveRight = function() {
              log('Handle move left'), gotoPage(currentPage + 1)
            }
          if (0 === totalRecords || 1 === totalPages) return null
          var pages = (function() {
            var totalNumbers = 2 * pageNeighbors + 3
            if (totalPages > totalNumbers + 2) {
              var startPage = Math.max(2, currentPage - pageNeighbors),
                endPage = Math.min(totalPages - 1, currentPage + pageNeighbors),
                _pages = range(startPage, endPage),
                hasLeftSpill = 2 < startPage,
                hasRightSpill = 1 < totalPages - endPage,
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
          return react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(
            'div',
            {
              className: styles || 'PaginationContainer',
              'data-testid': 'pagination',
            },
            pages.map(function(page, index) {
              return page === LEFT_PAGE
                ? react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(
                    'button',
                    {
                      'aria-label': 'Previous',
                      onClick: handleMoveLeft,
                      key: index,
                    },
                    '«',
                  )
                : 'RIGHT' === page
                ? react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(
                    'button',
                    {
                      onClick: handleMoveRight,
                      'aria-label': 'Next',
                      key: index,
                    },
                    '»',
                  )
                : react__WEBPACK_IMPORTED_MODULE_23___default.a.createElement(
                    'button',
                    {
                      key: index,
                      className: ''.concat(
                        currentPage === page ? ' active' : '',
                      ),
                      onClick: function onClick() {
                        return (function(page) {
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
    },
    193: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__(39),
        __webpack_require__(61),
        __webpack_require__(1275),
        __webpack_require__(136),
        __webpack_require__(137),
        __webpack_require__(295),
        __webpack_require__(126),
        __webpack_require__(479),
        __webpack_require__(1276),
        __webpack_require__(63)
      var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__,
        ),
        _SortArrows_SortArrows__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          194,
        ),
        _ref2 =
          (__webpack_require__(527),
          react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            _SortArrows_SortArrows__WEBPACK_IMPORTED_MODULE_11__.a,
            null,
          )),
        Table = function(_ref) {
          var log = _ref.log,
            _ref$styles = _ref.styles,
            styles = void 0 === _ref$styles ? {} : _ref$styles,
            displayData = _ref.displayData,
            dataKeys = _ref.dataKeys,
            onRowClick = _ref.onRowClick,
            onSort = _ref.onSort,
            sort = _ref.sort,
            formatLabel = function(label) {
              return (
                log('Format label called.'),
                label
                  .replace(/([a-z\d])([A-Z])/g, '$1 $2')
                  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2')
                  .replace(/([-,_,~,=,+])/g, ' ')
                  .split(' ')
                  .map(function(label) {
                    return label.charAt(0).toUpperCase() + label.slice(1)
                  })
                  .join(' ')
              )
            },
            getNodeStyle = function(_ref3, data) {
              var nodeStyle = _ref3.nodeStyle
              return nodeStyle
                ? nodeStyle && 'string' == typeof nodeStyle
                  ? nodeStyle
                  : nodeStyle(data)
                : ''
            }
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
            'table',
            { className: styles.table || 'TableQL' },
            react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              'thead',
              { className: styles.thead || 'TableQL-thead' },
              react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                'tr',
                { className: styles.theadTr || 'TableQL-tr' },
                (function renderTableHeader(dataKeys) {
                  return dataKeys.map(function(column, columnIndex) {
                    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                      'th',
                      {
                        className: ''
                          .concat(styles.theadTh || 'TableQL-thead-th', ' ')
                          .concat(column.headerStyle || '', ' ')
                          .concat(
                            column.sort || sort ? 'TableQL-thead-th-sort' : '',
                          ),
                        key: 'TableQLHeader'.concat(column + columnIndex),
                        onClick: function onClick() {
                          ;(column.sort || sort || void 0 !== onSort) &&
                            (log('Header sort was clicked: ', column),
                            onSort(column))
                        },
                      },
                      'string' == typeof column
                        ? formatLabel(column)
                        : column.label || formatLabel(column.id),
                      (column.sort || sort) && _ref2,
                    )
                  })
                })(dataKeys),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              'tbody',
              { className: styles.tbody || 'TableQL-tbody' },
              (function renderTableRows(displayData, dataKeys) {
                return displayData.map(function(data) {
                  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    'tr',
                    {
                      key: 'TableQLRow'.concat(JSON.stringify(data)),
                      className: styles.tbodyTr || 'TableQL-tr',
                      onClick: onRowClick
                        ? function() {
                            return onRowClick(data)
                          }
                        : void 0,
                    },
                    dataKeys.map(function(column, columnIndex) {
                      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
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
                          key: 'TableQLNode'.concat(column + columnIndex),
                        },
                        (function(column, data) {
                          if (column.customColumn) {
                            if (!column.component)
                              throw new Error(
                                'When customColumn true, component property must be provided!',
                              )
                            return column.component(data)
                          }
                          var value = data
                          return (
                            (column.id
                              ? column.id.split('.')
                              : column.split('.')
                            ).forEach(function(key) {
                              value = value[key]
                            }),
                            column.component
                              ? column.component(value)
                              : value + ''
                          )
                        })(column, data),
                      )
                    }),
                  )
                })
              })(displayData, dataKeys),
            ),
          )
        }
      ;(Table.displayName = 'Table'), (__webpack_exports__.a = Table)
    },
    194: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _ref =
          (__webpack_require__(1277),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'TableQL-thead-th-sort-arrows' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
              className: 'TableQL-thead-th-sort-arrow-up',
            }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
              className: 'TableQL-thead-th-sort-arrow-down',
            }),
          )),
        SortArrows = function() {
          return _ref
        }
      ;(SortArrows.displayName = 'SortArrows'),
        (SortArrows.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SortArrows',
        }),
        (__webpack_exports__.a = SortArrows),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/SortArrows/SortArrows.tsx'
          ] = {
            name: 'SortArrows',
            docgenInfo: SortArrows.__docgenInfo,
            path: 'src/components/SortArrows/SortArrows.tsx',
          })
    },
    195: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _ref =
          (__webpack_require__(1280),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', {
            className: 'rtql-loader',
          })),
        Loader = function() {
          return _ref
        }
      ;(Loader.displayName = 'Loader'),
        (Loader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Loader',
        }),
        (__webpack_exports__.a = Loader),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Loader/Loader.tsx'] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'src/components/Loader/Loader.tsx',
          })
    },
    196: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return customStories_Setup
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return customStories_Welcome
        }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return customStories_StorybookDirections
        })
      var react = __webpack_require__(2),
        react_default = __webpack_require__.n(react),
        dist = __webpack_require__(243),
        _ref = react_default.a.createElement('h1', null, 'Getting Started'),
        _ref2 = react_default.a.createElement(
          'p',
          null,
          'To use TableQL first you need to have React and ReactDOM added to the project, as well as Apollo Client setup. Then install TableQL:',
        ),
        _ref3 = react_default.a.createElement(
          'code',
          null,
          'npm install --save react-tableql',
        ),
        _ref4 = react_default.a.createElement('b', null, 'Happy Coding!'),
        _ref5 = react_default.a.createElement('br', null),
        _ref6 = react_default.a.createElement(
          'blockquote',
          null,
          'NOTE: Component in which is TableQL used must be wrapped in Apollo Client.',
        ),
        _ref7 = react_default.a.createElement('br', null),
        _ref8 = react_default.a.createElement(
          'a',
          {
            href: 'https://github.com/Danilo-Zekovic/react-tableql',
            target: 'blank',
          },
          react_default.a.createElement('h4', null, 'GitHub: react-tableql'),
        ),
        Setup = function() {
          return react_default.a.createElement(
            'div',
            { style: { width: '960px' } },
            _ref,
            _ref2,
            _ref3,
            react_default.a.createElement(
              'p',
              null,
              'Once you installed the app all you need to do is import it and configure it to your own liking.',
              ' ',
              react_default.a.createElement(
                'a',
                { onClick: Object(dist.linkTo)('TableQL') },
                _ref4,
              ),
            ),
            _ref5,
            _ref6,
            _ref7,
            _ref8,
          )
        }
      ;(Setup.displayName = 'Setup'),
        (Setup.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Setup',
        })
      var customStories_Setup = Setup
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['stories/customStories/Setup.js'] = {
          name: 'Setup',
          docgenInfo: Setup.__docgenInfo,
          path: 'stories/customStories/Setup.js',
        })
      var Welcome_ref = react_default.a.createElement(
          'h1',
          null,
          'Welcome to TableQL',
        ),
        Welcome_ref2 = react_default.a.createElement(
          'h3',
          null,
          'Universal Apollo Client and GraphQL table renderer component.',
        ),
        Welcome_ref3 = react_default.a.createElement('br', null),
        Welcome_ref4 = react_default.a.createElement(
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
        Welcome = function() {
          return react_default.a.createElement(
            'div',
            { style: { width: '960px' } },
            Welcome_ref,
            Welcome_ref2,
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
            Welcome_ref3,
            Welcome_ref4,
          )
        }
      ;(Welcome.displayName = 'Welcome'),
        (Welcome.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Welcome',
        })
      var customStories_Welcome = Welcome
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['stories/customStories/Welcome.js'] = {
          name: 'Welcome',
          docgenInfo: Welcome.__docgenInfo,
          path: 'stories/customStories/Welcome.js',
        })
      var StorybookDirections_ref = react_default.a.createElement(
          'h1',
          null,
          'Storybook Directions',
        ),
        StorybookDirections_ref2 = react_default.a.createElement(
          'p',
          null,
          '"Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular. It makes building stunning UIs organized and efficient."',
        ),
        StorybookDirections_ref3 = react_default.a.createElement(
          'a',
          { href: 'https://storybook.js.org/', target: 'blank' },
          react_default.a.createElement(
            'h3',
            null,
            'Visit official Storybook webpage!',
          ),
        ),
        StorybookDirections_ref4 = react_default.a.createElement(
          'p',
          null,
          'Most of the stories/sections of this Storybook presentation have in the lower part of the screen four tabs: Actions, JSX, Readme, and Accessability. They offer additional information about the mode/option that TableQL has to offer. Bellow you will find short explanations of each tab:',
        ),
        StorybookDirections_ref5 = react_default.a.createElement(
          'h3',
          null,
          react_default.a.createElement('b', null, 'Actions'),
        ),
        StorybookDirections_ref6 = react_default.a.createElement(
          'p',
          null,
          'Displays all of the logs that happen. You can see it debug mode and error boundary stories',
        ),
        StorybookDirections_ref7 = react_default.a.createElement(
          'h3',
          null,
          react_default.a.createElement('b', null, 'JSX'),
        ),
        StorybookDirections_ref8 = react_default.a.createElement(
          'p',
          null,
          'Represents the code needed to achieve given example. Note JSX and JavaScript in that tab is not the latest JavaScript as it transformed into ES5',
        ),
        _ref9 = react_default.a.createElement(
          'h3',
          null,
          react_default.a.createElement('b', null, 'Readme'),
        ),
        _ref10 = react_default.a.createElement(
          'p',
          null,
          'Coming soon! Will contain additional details and explanations about given example and how to achieve it.',
        ),
        _ref11 = react_default.a.createElement(
          'h3',
          null,
          react_default.a.createElement('b', null, 'Accessability'),
        ),
        _ref12 = react_default.a.createElement(
          'p',
          null,
          'Shows is the UI component accessible. Also, you can see by which rules it is or it is not.',
        ),
        StorybookDirections = function() {
          return react_default.a.createElement(
            'div',
            { style: { width: '960px' } },
            StorybookDirections_ref,
            StorybookDirections_ref2,
            StorybookDirections_ref3,
            StorybookDirections_ref4,
            StorybookDirections_ref5,
            StorybookDirections_ref6,
            StorybookDirections_ref7,
            StorybookDirections_ref8,
            _ref9,
            _ref10,
            _ref11,
            _ref12,
          )
        }
      ;(StorybookDirections.displayName = 'StorybookDirections'),
        (StorybookDirections.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StorybookDirections',
        })
      var customStories_StorybookDirections = StorybookDirections
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES[
          'stories/customStories/StorybookDirections.js'
        ] = {
          name: 'StorybookDirections',
          docgenInfo: StorybookDirections.__docgenInfo,
          path: 'stories/customStories/StorybookDirections.js',
        })
    },
    22: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return GET_ALL_FILMS
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return GET_ALL_PEOPLE
        })
      var GET_ALL_FILMS =
          '\n{\n  allFilms {\n    title\n    episodeID\n    releaseDate\n  }\n}\n',
        GET_ALL_PEOPLE =
          '\n{\n  allPeople {\n    name\n    gender\n    birthYear\n    eyeColor\n    hairColor\n    skinColor\n  }\n}\n'
    },
    242: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return FILMS
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
      ]
    },
    322: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(183),
        content = __webpack_require__(1283)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 },
        exported = (api(content, options), content.locals ? content.locals : {})
      module.exports = exported
    },
    33: function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return STORYBOOK_SECTIONS
      })
      var STORYBOOK_SECTIONS = {
        gettingStarted: '1 Getting Started',
        tableQl: '2 TableQl',
        apolloTableQl: '3 ApolloTableQL',
        buildingBlocks: '4 Building Blocks',
      }
    },
    527: function(module, exports, __webpack_require__) {
      var api = __webpack_require__(183),
        content = __webpack_require__(1272)
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']])
      var options = { insert: 'head', singleton: !1 },
        exported = (api(content, options), content.locals ? content.locals : {})
      module.exports = exported
    },
    563: function(module, exports, __webpack_require__) {
      __webpack_require__(564),
        __webpack_require__(960),
        __webpack_require__(1299),
        (module.exports = __webpack_require__(1268))
    },
    678: function(module, exports) {},
    711: function(module, exports) {},
    749: function(module, exports) {},
    794: function(module, exports) {},
    836: function(module, exports) {},
    879: function(module, exports) {},
    909: function(module, exports) {},
  },
  [[563, 1, 2]],
])
//# sourceMappingURL=main.eb839f3c7fc0e22dcb9c.bundle.js.map
