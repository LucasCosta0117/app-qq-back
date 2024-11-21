require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conn = require('./db/conn');
const router = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());

//DB Connection
conn();

//Routes
app.use('/api', router);

//Start server
app.listen(3000, function() {
    console.log('Servidor online!');
});