const merge = require('lodash.merge')
const Book = require('./Book')
const Publisher = require('./Publisher')

const resolvers = [Book, Publisher]

module.exports = merge(...resolvers)
