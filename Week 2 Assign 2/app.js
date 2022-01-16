const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoutes = require('./routes/login');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(loginRoutes);

app.listen(3000);