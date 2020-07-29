const express = require('express');
const router = express.Router();
const queries = require('../db/dbqueries');

router.get('/', (req, res) => {
    queries.getAll('posts').then(posts => {
        res.json(posts);
    });
});

module.exports = router;