import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now()
    },
    favorites: {
        type: [Schema.Types.ObjectId],
        ref: 'Cinema'
    }
});

export default mongoose.model('User', UserSchema);