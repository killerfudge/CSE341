const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/users', (req, res, next) => {
    const users = adminData.users;
    res.render('Users', {
        users: users,
        pageTitle: 'Users',
        path: '/users',
        hasUsers: users.length > 0,
    });
});

module.exports = router;