const express = require('express');
const router = express.Router();
const models = require( '../db/models/index');

//works
router.get('/', (req, res) => {
    models.Author.findAll()
      .then( authors => {
        res.status( 200 ).json( authors )
      });
  });

//works
router.get('/:id', (req,res) => {
    models.Author.findById(req.params.id)
        .then( authors => {
            if(authors){res.status(200).json( authors )}
            else{res.status(404).send('Error 404')}
        });
});

//works
router.get('/:id/blogs', (req,res) => {
    models.Blog.findAll({ where: { authorId: req.params.id }})
        .then( blogs => {
            res.status(200).json( blogs )
        });
});

//works
router.post('/', (req,res) => {
    models.Author.create(req.body)
        .then( author => {
            res.status(201).json( author )
        });
});

//works
router.put('/:id', (req,res) => {
    models.Author.findById(req.params.id)
        .then( author => {
            author.updateAttributes(req.body);
            res.status(204).json( author )
        });
});

//works
router.delete('/:id', (req,res) => {
    models.Author.findById(req.params.id)
        .then( author => {
            author.destroy();
            res.status(200).json( author )
        });
});

module.exports = router;