const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const allPublishers = async () => {
  try {
    const publishers = await Publisher.query()
    return publishers
  } catch(err) {
    console.log(err)
    throw new Error('Could not get publishers')
  }
}

const publisherById = async (obj, { id }) => {
  const pubreturn = await Publisher.query().findOne('id', id)
  return pubreturn
}

const address = async ({ addressId }) => {
  const addressreturn = await Address.query().where('id', addressId)
//   console.log(addressreturn[0])
  return addressreturn[0]
}

const resolver = {
  Query: {
    allPublishers,
    publisherById,
  },
  Publisher: {
    address,
  },
}

module.exports = resolver
