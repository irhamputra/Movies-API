import { gql } from 'apollo-server';
const typeDefs = gql`
    type Cinema {
        _id: ID
        name: String
        description: String
        videoURL: String
        genre: String
        releaseDate: String
        rating: Int
        date: String
        country: String
        imageURL: String
        duration: Int
        createdAt: String
    }
    
    type User {
        _id: ID
        name: String
        username: String! @unique
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
            username: String
            email: String
            password: String
            avatar: String
        ): [User]!
        
        getUser(id: String!): User!
    }
    
    type Mutation {
        addCinema(
            name: String!
            description: String
            videoURL: String!
            likes: Int
            country: String!
            imageURL: String!
            rating: String!
            duration: String!
            genre: String!
            releaseDate: String
        ): Cinema!
    }
`;

export default typeDefs;