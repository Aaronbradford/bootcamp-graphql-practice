const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    allAuthors: [Author!]!
    allBooks: [Book!]!
    allPublishers: [Publisher!]!
    author(id: ID!): Author!
    publisherById(id: ID!): Publisher!
  }

  type Author {
    id: ID! 
    firstName: String!
    lastName: String!
    age: Int
    email: String!
    numBooksPublished: Int
    address: Address
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    datePublished: String!
    authorId: ID!
    publisherId: ID!
  }

  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: String!
    address: Address
  }

  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  type Mutation {
    addPublisher(input: publisherInput): Publisher!
    addBook(input: bookInput): Book!
  }

  input publisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int
    address: addressInput!
  }

  input addressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input bookInput {
    title: String!
    language: String!
    numPages: String!
    datePublished: String
    authorId: ID!
    publisherId: ID!
  }
`
