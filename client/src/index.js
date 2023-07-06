import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	url: "http://localhost:4000",
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloClient client={client}>
		<GlobalStyles />
		<Pages />
	</ApolloClient>,
	document.getElementById("root")
);
