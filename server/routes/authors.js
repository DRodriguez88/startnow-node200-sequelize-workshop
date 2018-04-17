const express = require('express');
const router = express.Router();
const models = require( '../db/models/index');

router.get('/', (req, res) => {
    models.Author.findAll()
      .then( authors => {
        res.status( 200 ).json( authors )
      });
  });

module.exports = router;