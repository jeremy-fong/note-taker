const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');



// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((note) => res.json(JSON.parse(note)))
);

// POST Route for submitting a new note
notes.post('/', (req, res) => {
    // Destructuring assignment for the  items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');

      res.json(`Note: ${newNote.title} successfully added 🚀`);
    } else {
      res.json('Error in creating new note');
    }
  });

  
module.exports = notes;

