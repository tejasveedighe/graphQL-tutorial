const gql = require("graphql-tag");

const typeDefs = gql`
	type Query {
		tracksForHome: [Track!]!
	}

	"Track is a group of modules that teach for a specific topic"
	type Track {
		id: ID!
		title: String!
		author: Author!
		thumbnail: String
		length: Int
		modulesCount: Int
	}

	type Author {
		id: ID!
		name: String!
		photo: String
	}
`;

module.exports = typeDefs;
