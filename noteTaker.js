const util = require('util');
const fs = require('fs');
const path = require('path');
const writeFilePromise = util.promisify(fs.writeFile);
const readFilePromise = util.promisify(fs.readFile);
const IdGenerator = require('./lib/IdGenerator');

const noteTaker = {};
const idProducer = new IdGenerator();
/**
 * GetNotes should read the db.json file and return the content as object
 */
noteTaker.getNotes = async function () {
  let fileData = await readFilePromise(
    path.join(__dirname, 'db/db.json'),
    'utf-8'
  );
  fileData = fileData.trim().length === 0 ? '[]' : fileData; //if file is empty then return empty array. Empty String is not valid Json
  return JSON.parse(fileData);
};

noteTaker.getCurrentMaxId = async function () {
  console.log('called');
  let currentNotes = await this.getNotes();
  console.log('cuuren Notes: ' + currentNotes);
  console.log(currentNotes);
  return currentNotes.length;
};

/**
 * SaveNote should take in a note object, convert it to JSON and append it to file.
 * It should also add an id to the object if one is not present already.
 * When done it should return the new note.
 */
noteTaker.saveNote = async function (note) {
  //first read the existing data
  let notesBeforeUpdate = await this.getNotes();
  if (!note.hasOwnProperty('id')) {
    idProducer.setInitialId(notesBeforeUpdate.length);
    note.id = idProducer.getNextId();
    console.log('Getting new id ...' + note.id);
  }
  notesBeforeUpdate.push(note);
  await writeFilePromise('db/db.json', JSON.stringify(notesBeforeUpdate));
  return note;
};

module.exports = noteTaker;
