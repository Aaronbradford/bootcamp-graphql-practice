const Author = require('../../models/Author')
const Book = require('../../models/Book')

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch(err) {
    console.log(err)
    throw new Error('Could not get authors')
  }
}

const author = async (obj, { id }) => {
  const authorreturn = await Author.query().findOne('id', id)
  return authorreturn
}

const books = async ({ id }) => {
  const booksreturn = await Book.query().where('authorId', id)
  return booksreturn
}

const resolver = {
  Query: {
    allAuthors,
    author,
  },
  Author: {
    books,
  },
}

module.exports = resolver
