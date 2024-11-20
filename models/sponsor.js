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
        links: {
            type: Array,
            required: false
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