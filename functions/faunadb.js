import faunadb from 'faunadb'

export const q = faunadb.query
const client = new faunadb.Client({
      secret: 'fnADYBQA19ACD82MoNTqoTOTxFZUvFjDU3IQh2Lr'
})

export default client
