const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'login.html'));
});

router.post('/users', (req, res, next) => {
    res.redirect('/users');
});

module.exports = router;