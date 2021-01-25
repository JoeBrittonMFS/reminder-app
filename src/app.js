const yargs = require('yargs');
const { addNote } = require('../utils/notes.js')

const command = process.argv[2];


if (command == "add") {
    console.log("adding a note...");
    addNote(yargs.argv.note)
}