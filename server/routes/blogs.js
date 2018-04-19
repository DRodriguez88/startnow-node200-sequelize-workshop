const express = require('express');
const router = express.Router();
const models = require( '../db/models/index');

//works
router.get('/', (req, res) => {
    models.Blog.findAll()
        .then( blogs => {
            res.status(200).json( blogs )
        });
});

//works
router.get('/featured', (req,res) => {
    models.Blog.findAll({ where: { featured: true } })
        .then( blogs => {
            res.status(200).json( blogs )
        });
});

//works
router.get('/:id', (req,res) => {
    models.Blog.findById(req.params.id)
        .then( blogs => {
            if(blogs){res.status(200).json( blogs )}
            else{res.status(404).send('Error 404')}
        });
});

//works
router.post('/', (req,res) => {
    var obj =      req.body;
    obj.authorId = req.query.authorId;
    models.Blog.create(obj)
        .then( blog => {
            res.status(201).json( blog )
        });
});

//works
router.put('/:id', (req,res) => {
    models.Blog.findById(req.params.id)
        .then( blog => {
            blog.updateAttributes(req.body);
            res.status(204).json( blog )
        });
});

//works
router.delete('/:id', (req,res) => {
    models.Blog.findById(req.params.id)
        .then( blog => {
            blog.destroy();
            res.status(200).json( blog )
        });
});



module.exports = router;