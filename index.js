import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/index';
import Cinema from './models/Cinema';
import User from './models/User';

require('dotenv').config();

mongoose.connect(``);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Cinema, User },
    cors: true,
    debug: true
});
server.listen().then(({url}) => console.log(`Apollo server is running on ${url}`));