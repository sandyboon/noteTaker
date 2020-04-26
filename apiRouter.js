const express = require('express');
const moment = require('moment');
const path = require('path');
const apiRouter = express.Router();

apiRouter.use(express.urlencoded({ extended: true }));
apiRouter.use(express.json());

apiRouter.get('/api/notes', function (req, res) {});
