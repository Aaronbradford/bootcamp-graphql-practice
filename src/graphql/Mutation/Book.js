const Book = require('../../models/Book')

const addBook = async (obj, { input }) => {
  const newbook = await Book.query().insert({
    title: input.title,
    language: input.language,
    numPages: input.numPages,
    datePublished: input.datePublished,
    authorId: input.authorId,
    publisherId: input.publisherId,
  }).returning('*')
  return newbook
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
