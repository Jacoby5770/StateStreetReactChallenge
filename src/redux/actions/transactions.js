import { GET_TRANSACTIONS } from '../types'

export const getTransactions = (transactions) => {
  return {
    type: GET_TRANSACTIONS,
    transactions
  }
}
