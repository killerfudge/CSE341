const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

site.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  User.findById('61f58db768bb037422f26dd2')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://Killerfudge:Sp1lledM1lk@cse341-database.sdrlp.mongodb.net/prove?retryWrites=true&w=majority')
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Richard',
          email: 'Richard@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
});