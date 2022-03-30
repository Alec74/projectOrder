import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide a valid email'],
        unique: true,
    },
    password: {
        type: String,
        min: 6,
    },
    projects: {
        type: Array,
    },
    created: {
        type: Date,
    },
    hash: {
        type: String,
    },
    salt: {
        type: String,
    }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)