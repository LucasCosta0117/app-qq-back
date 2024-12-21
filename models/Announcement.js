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
        ratting: {
            type: [{
                value: {
                    type: Number,
                    required: true
                },
                userList: {
                    type: [String],
                    required: true
                }
            }],
            default: []
        },
        comments: {
            type: [{
                userName: {
                    type: String,
                    required: true
                },
                userPhoto: {
                    type: String,
                    required: true
                },
                text: {
                    type: String,
                    required: true
                }
            }],
            default: []
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

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = {
    Announcement
};