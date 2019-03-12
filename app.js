const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')



// Customize yargs version
yargs.version('1.1.0')



// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding a new note!');
    }
})


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})


yargs.command({
    command: 'list',
    describe: 'Lists all your notes',
    handler: function () {
        console.log('Listing out all the notes!');
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads all the notes',
    handler: function () {
        console.log('Reading all the notes!');
    }
})



console.log(yargs.argv);