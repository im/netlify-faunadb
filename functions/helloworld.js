import client, { q } from './faunadb'
exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: {
            token: process.env.FAUNADB_SECRET,
            client: client,
            q: q
        }
    })
}
