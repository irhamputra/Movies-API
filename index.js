import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './schemas/schema';
import resolvers from './resolvers/index';
import Cinema from './models/Cinema';
import User from './models/User';

require('dotenv').config();

const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds251747.mlab.com:51747/mongodb-graphql-test`;
if (!MONGO_URI){
    throw new Error('Please provide your MongoDB database')
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', err => console.log('Error connecting to database', err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Cinema, User },
    cors: true,
    debug: true
});

server.listen().then(({url}) => console.log(`Apollo server is running on ${url}`));