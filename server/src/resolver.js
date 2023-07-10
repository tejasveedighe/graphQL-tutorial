const resolvers = {
	Query: {
		tracksForHome: (_, __, { dataSources }) => {
			return dataSources.trackAPI.getTracksForHome();
		},
	},

	Track: {
		author: ({ authorId }, __, { dataSources }) => {
			return dataSources.trackAPI.getAuthor(authorId);
		},
	},
};

module.exports = resolvers;
