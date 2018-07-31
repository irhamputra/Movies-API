import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';

require('dotenv').config();

import typeDefs from './schemas/schema';
import Cinema from './models/Cinema';
import resolvers from './resolvers/index'

const app = express();
const PORT = process.env.PORT || 4000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { Cinema }
});
server.applyMiddleware({ app });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/graphql', expressPlayground({ endpoint: '/graphql'}));

app.listen({port: PORT}, () => console.log(`🚀 Server is running on port ${PORT}/${server.graphqlPath}`));