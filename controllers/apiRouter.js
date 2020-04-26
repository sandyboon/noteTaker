const express = require('express');
const moment = require('moment');
const path = require('path');
const apiRouter = express.Router();
const noteTaker = require('../noteTaker');

apiRouter.use(express.urlencoded({ extended: true }));
apiRouter.use(express.json());

apiRouter.get('/api/notes', async function (req, res) {
  console.log('noteTaker GET Request');
  const notes = await noteTaker.getNotes();
  res.json(notes);
});

module.exports = apiRouter;
