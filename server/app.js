const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require('./db/models');

/* sequelize configuration */
db.sequelize.sync();

const app = express();

app.use(bodyParser.json());
app.use('/authors', require('./routes/authors'));
app.use('/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
    res.status(200).send('HAVADA KADAVRA!');
});

module.exports = app;