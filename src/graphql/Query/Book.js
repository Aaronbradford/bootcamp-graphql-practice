const Book = require('../../models/Book')

const allBooks = async () => {
  try {
    const books = await Book.query()
    return books
  } catch(err) {
    console.log(err)
    throw new Error('Could not get books')
  }
}

const resolver = {
  Query: {
    allBooks,
  },
}

module.exports = resolver
