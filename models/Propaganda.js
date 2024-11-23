const mongoose = require('mongoose');

const { Schema } = mongoose;

const propagandaSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        propaganda: {
            type: String,
            required: true
        },
        links: [{
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