const Publisher = require('../../models/Publisher')

const addPublisher = async (obj, { input }) => {
  const newPub = await Publisher.query().insert({
    company: input.company,
    phoneNumber: input.phoneNumber,
    numBooksPublished: input.numBooksPublished,
    address: input.address,
  }).returning('*')
  return newPub
}

const resolver = {
  Mutation: {
    addPublisher,
  },
}

module.exports = resolver
