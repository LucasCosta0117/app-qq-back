const mongoose = require('mongoose');

async function main() {
    try {
        const user = process.env.DB_USER;
        const pass = process.env.DB_PASS;
        const dbName = process.env.DB_NAME;

        await mongoose.connect(
            `mongodb+srv://${user}:${pass}@cluster0.qrmhi.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluester0`
        );
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    }
}

module.exports = main;