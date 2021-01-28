const morgan = require('morgan');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello, from server-side',
  });
});

module.exports = app;
