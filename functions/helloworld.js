exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: {
            token: process.env.FAUNADB_SECRET
        }
    })
}
