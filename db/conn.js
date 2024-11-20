const mongoose = require('mongoose');

async function main() {
    try {
        const user = process.env.DB_USER;
        const pass = process.env.DB_PASS;

        await mongoose.connect(
            `mongodb+srv://${user}:${pass}@cluster0.qrmhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    }
}

module.exports = main;