import TableQL from './TableQL/TableQL'
import ApolloTableQL from './ApolloTableQL/ApolloTableQL'
import {
  TableQLProvider,
  useTableQLState,
  useTableQLDispatch,
  useTableQL,
} from './TableQLProvider'
import { PaginationData } from './components/Pagination/Pagination'
import Loader from './components/Loader/Loader'

export default TableQL
export {
  ApolloTableQL,
  PaginationData,
  Loader,
  TableQLProvider,
  useTableQLState,
  useTableQLDispatch,
  useTableQL,
}
