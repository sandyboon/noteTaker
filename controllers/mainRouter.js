const express = require('express');
const moment = require('moment');
const path = require('path');
const apiRouter = require('./apiRouter');
const mainRouter = express.Router();

/** Define all the main routes in this file */
const logger = function (req, res, next) {
  logRequest(req);
  next();
};
//use a simple logging mechanism. This can be exanded later on..
mainRouter.use(logger);

// add the api routes to main router
mainRouter.use(apiRouter);

//define route for static content
mainRouter.use('/assets', express.static(path.join(__dirname, '../assets/')));

//route for the notes html page
mainRouter.get('/notes', function (req, res) {
  console.log('Serving public/notes.html');
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

//this should be the last route as it is a catch-all route
mainRouter.get('*', function (req, res) {
  console.log('Serving index.html');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

function logRequest(req) {
  console.log(
    `${moment()
      .local()
      .format('YYYY-MM-DD HH:mm:ss')} Recieved request for path : ${
      req.originalUrl
    } for HTTP method: ${req.method}`
  );
}

module.exports = mainRouter;
