const mongoose = require('mongoose');

const { Schema } = mongoose;

const sponsorSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        propagranda: {
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
        actived: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Sponsor = mongoose.model('Sponsor', sponsorSchema);

module.exports = {
    Sponsor
};