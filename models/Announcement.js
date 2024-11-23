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
        images_url: {
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
        ratting: [{
            value: {
                type: Array,
                required: true
            },
            count: {
                type: Array,
                required: true
            },
            userId: {
                type: Number,
                required: true
            }
        }],
        comments: [{
            user: {
                type: userSchema,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        }],
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

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = {
    Announcement
};