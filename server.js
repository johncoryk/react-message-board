const express = require('express');
const logger = require('morgan');
const path = require('path'); 
const passport = require('passport');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');






const postRouter = require('./routes/post-router');

const app = express();



//Middleware

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/////////Jon add
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('-------', req.user, req.path);
  next();
})
//////////////




//Setting up PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.use('/posts', postRouter);

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  });
});
