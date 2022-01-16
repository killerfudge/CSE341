const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const addUserRoutes = require('./routes/admin');
const userRoutes = require('./routes/users');

// code
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(addUserRoutes.routes);
app.use(userRoutes);

app.listen(3000);