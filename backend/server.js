const { ApolloServer, gql } = require("apollo-server");

const users = [
  {
    name: "Yuki",
    location: "Vancouver",
  },
  {
    name: "Alex",
    location: "USA",
  },
  {
    name: "Ena",
    location: "Korea",
  },
];

const typeDefs = gql`
  type User {
    name: String
    location: String
  }

  type Query {
    getUser: [User]
  }
`;

const resolvers = {
  Query: {
    getUser: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
