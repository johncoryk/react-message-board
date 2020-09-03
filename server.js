const express = require('express');
const logger = require('morgan');
// const passport = require('passport');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const bcrypt = require('bcryptjs');
// const session = require('express-session');

const postRouter = require('./routes/post-router');
const topicRouter = require('./routes/topic-router');
const boardRouter = require('./routes/board-router');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(
//   session({
//     key: process.env.SECRET_KEY,
//     secret: process.env.SECRET_KEY,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static('public'));

//Setting up PORT
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.use('/api/posts', postRouter);
app.use('/api/topics', topicRouter);
app.use('/api/boards', boardRouter);

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  });
});
