const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");

const typeDefs = require("./schema");

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      // this obect becomes our resolver's contextValue,
      // the third positional argument
      // the name dataSources is convention
      return {
        dataSources: {
          trackAPI: new TrackAPI(),
        },
      };
    },
  });

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
