const express = require('express');
const path = require('path');

//exports from application
const mainRouter = require('./controllers/mainRouter');

const PORT = process.env.PORT || 3000;
const app = express();
//all the logic for Notes CRUD is in the NoteTaker module.
//mainRouter is the parent router which defines routes for html and public assets.
//The mainRouter imports the apiRouter which handles routing for api calls.
app.use(mainRouter);

//start the server
app.listen(PORT, () => {
  console.log('Server is listning on port : ' + PORT);
});
