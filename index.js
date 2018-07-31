import { ApolloServer } from 'apollo-server';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/index';
import Cinema from './models/Cinema'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Cinema },
    cors: true,
    debug: true
});
server.listen().then(({url}) => console.log(`Apollo server is running on ${url}`));