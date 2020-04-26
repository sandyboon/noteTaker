const util = require('util');
const fs = require('fs');
const path = require('path');
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);

const noteTaker = {};

/**
 * GetNotes should read the db.json file and return the content as object
 */
noteTaker.getNotes = async function () {
  const fileData = await readFilePromise(
    path.join(__dirname, 'db/db.json'),
    'utf-8'
  );
  console.log(JSON.parse(fileData));
  return JSON.parse(fileData);
};

module.exports = noteTaker;
