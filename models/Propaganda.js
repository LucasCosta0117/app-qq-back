const mongoose = require('mongoose');

const { Schema } = mongoose;

const propagandaSchema = new Schema(
    {
        sponsor: {
            type: String,
            required: true
        },
        image_url: {
            type: String,
            required: true
        },
        links: {
            type: [{
                instagram: {
                    type: String,
                    required: false
                },
                whatsapp: {
                    type: String,
                    required: false
                },
                website: {
                    type: String,
                    required: false
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

const Propaganda = mongoose.model('Propaganda', propagandaSchema);

module.exports = {
    Propaganda
};