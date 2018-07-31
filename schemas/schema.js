import { gql } from 'apollo-server-express';
const typeDefs = gql`
    type Cinema {
        _id: String
        name: String
        description: String
        videoURL: String
        genre: String
        releaseDate: String
        views: Int
        rating: Int
        date: String
    }
    
    type Query {
        allCinemas(
            name: String
            description: String
            videoURL: String
            genre: String
            releaseDate: String
            views: Int
            rating: Int
        ): [Cinema]!
        
        getCinema(id: String!): Cinema!
    }
`;

export default typeDefs;