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
        photo: {
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