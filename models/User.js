const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        second_name: {
            type: String,
            required: false
        },
        photo_url: {
            type: String,
            required: false
        },
        contact: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        active: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    userSchema
};