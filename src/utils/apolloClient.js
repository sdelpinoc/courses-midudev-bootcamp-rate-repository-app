import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.100.44:4000',
    cache: new InMemoryCache()
  })
}

export default createApolloClient
