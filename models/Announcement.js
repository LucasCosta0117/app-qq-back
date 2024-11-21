const mongoose = require('mongoose');

const { Schema } = mongoose;
const { userSchema } = require('./User');

const announcementSchema = new Schema(
    {
        owner: {
            type: userSchema,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        images: {
            type: [String],
            required: true
        },
        address: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            required: true
        },
        ratting: {
            type: Array,
            required: false
        },
        comments: {
            type: Array,
            required: false
        }
    },
    {
        timestamps: true
    }
);

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = {
    Announcement
};