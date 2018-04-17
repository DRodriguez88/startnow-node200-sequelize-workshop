const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('./db/models');

/* sequelize configuration */
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());
app.use('/authors', require('./routes/authors'));

app.get('/', (req, res) => {
    res.status(200).send('AEKJHFKJSDHG');
});

module.exports = app;