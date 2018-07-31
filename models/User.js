import mongoose from 'mongoose';

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

export default User;