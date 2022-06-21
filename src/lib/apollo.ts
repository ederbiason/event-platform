import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o399sx0a4d01xrd1m83dzq/master',
    cache: new InMemoryCache()
})