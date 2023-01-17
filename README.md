# Note Taker

## Table of Contents
1. [Title](#title)
2. [Project](#project)
3. [Description](#description)
4. [Installation](#installation)
5. [Usage](#usage)
6. [User Story](#user-story)
7. [Acceptance Criteria](#acceptance-criteria)
8. [Video Preview of Project](#video-preview-of-project)
9. [Source](#source)

## Title :
### Note Taker

## Project :
### *Note Taker*

## Description :
* This project uses NodeJS, and Express
* This project will generate an index.HTML file according to the information the user provided 

## Installation :
The user needs to install node for this project. 

## Usage :
- Open the index.js in the terminal, then enter node index.js in the command-line.
- The user will then input information according to the questions asked.
- Based on the information the user provided, a team profile index.HTML will be created in the dist folder.

## User Story :
```md
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria :
```md
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Video Preview of Project :
[Video Preview](https://drive.google.com/file/d/1GCLnTe3E6DDYM5PoCQ-_pRlO8XdvlNSk/view)

## Source :
- GitHub Link: https://github.com/jeremy-fong/team-profile-generator




// let deleteNote = req.params.id;
// //creates variable from db.json file
// let notes = JSON.parse(fs.readFileSync('./data/db.json', 'utf8'));
// //removes/filters deleteFile from notes
// let newNotes = notes.filter(file => file.id !== deleteNote);
// //write notes variable to db.json file
// fs.writeFileSync('./data/db.json', JSON.stringify(newNotes));
// //return notes to client
// return res.json(newNotes);