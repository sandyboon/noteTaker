const express = require('express');
const moment = require('moment');
const path = require('path');
const mainRouter = express.Router();

/** Define all the main routes here */
const logger = function (req, res, next) {
  console.log(
    `${moment()} Recieved request for path : ${
      req.originalUrl
    } for HTTP method: ${req.method}`
  );
  next();
};
mainRouter.use(logger);

//define route for static content
mainRouter.use('/assets', express.static(path.join(__dirname, '/assets/')));

//route for the notes html page
mainRouter.get('/notes', function (req, res) {
  console.log('Serving public/notes.html');
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//this should be the last route as it is a catch-all route
mainRouter.get('*', function (req, res) {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = mainRouter;
