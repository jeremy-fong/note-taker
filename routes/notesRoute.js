const notes = require('express').Router();



// GET Route for retrieving all the notes
notes.get('/', (req, res) =>
  readFromFile('./db/db.json').then((note) => res.json(JSON.parse(note)))
);


module.exports = notes;

