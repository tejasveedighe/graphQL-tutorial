const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schema');
const resolvers = require("./resolver");
const TrackAPI = require("./datasource/track-api");

async function startApolloServer() {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});
	const { url } = await startStandaloneServer(server, {
		context: async () => {
			const { cache } = server;
			return {
				dataSources: {
					trackAPI: new TrackAPI({ cache }),
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
