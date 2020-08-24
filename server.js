const express = require('express');
const morgan = require('morgan');

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Setting up PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.use('*', (req, res) => {
  res.status(404).send({
    error: 'Not Found',
  });
});
