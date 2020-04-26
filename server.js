const express = require('express');
const path = require('path');

//exports from application
const mainRouter = require('./controllers/mainRouter');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(mainRouter);

//start the server

app.listen(PORT, () => {
  console.log('Server is listning on port : ' + PORT);
});
