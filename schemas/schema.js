import { gql } from 'apollo-server';
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
    
    type User {
        _id: String
        name: String
        email: String
        password: String
        avatar: String
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
        
        allUsers(
            name: String
            email: String
            password: String
            avatar: String
        ): [User]!
        
        getUser(id: String!): User!
    }
`;

export default typeDefs;