import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const CinemaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    country: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model('Cinema', CinemaSchema)