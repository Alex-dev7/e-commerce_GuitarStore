import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://your-api.com/graphql', // replace with your GraphQL endpoint
//     fetch,
//   }),
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default apolloClient