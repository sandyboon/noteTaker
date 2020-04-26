//Define all the API routes here in this file.
const express = require('express');
const moment = require('moment');
const path = require('path');
const apiRouter = express.Router();
const noteTaker = require('../noteTaker');

//middleware for api calls
apiRouter.use(express.urlencoded({ extended: true }));
apiRouter.use(express.json());

//api call to return all the notes
apiRouter.get('/api/notes', async function (req, res) {
  console.log('noteTaker GET Request');
  const notes = await noteTaker.getNotes();
  res.json(notes);
});

//api call to receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
apiRouter.post('/api/notes', async function (req, res) {
  const newNote = req.body;
  const savedNote = await noteTaker.saveNote(newNote);
  res.json(savedNote);
});

module.exports = apiRouter;
