// third party modules
const express = require('express');

// code
const app = express();

/* second task
app.use((req, res, next) => {
    console.log('First');
    next();
});

app.use((req, res, next) => {
    console.log('Second');
    res.send('<h1>This Is The Response!</h1>');
});*/

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Generic</h1>');
});

app.listen(3000);