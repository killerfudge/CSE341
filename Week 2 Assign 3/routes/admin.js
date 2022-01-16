const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const users = [];

// /add-product => GET
router.get('/', (req, res, next) => {
    res.render('add-user', {
        pageTitle: 'Add User',
        path: 'add-user',
    });
});

// /add-product => POST
router.post('/', (req, res, next) => {
    users.push({ 'Name': req.body.name });
    console.log(users);
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;