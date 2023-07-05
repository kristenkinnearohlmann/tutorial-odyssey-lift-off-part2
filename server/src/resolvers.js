const resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: (parent, args, contextValue, info) => {},
  },
};

module.exports = resolvers;
