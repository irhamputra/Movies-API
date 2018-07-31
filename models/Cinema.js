import mongoose from 'mongoose';

const Cinema = mongoose.model('Cinema', {
    name: String,
    description: String,
    videoURL: String,
    releaseDate: Date,
    genre: String,
    views: Number,
    rating: Number,
    date: Date
});

export default Cinema