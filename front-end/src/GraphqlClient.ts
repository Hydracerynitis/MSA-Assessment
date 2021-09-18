import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const Deployed_end_point='https://hydracerynitis-sql.azurewebsites.net/graphql/'
const Debug_end_point='https://localhost:44394/graphql'

const httpLink = createHttpLink({
    uri: Deployed_end_point,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const graphQLClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default graphQLClient;