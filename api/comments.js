const express = require('express');
const router = express.Router();
const queries = require('../db/dbqueries');

router.get('/', (req, res) => {
    queries.getAll('users').then(users => {
        res.json(users);
    });
});

module.exports = router;