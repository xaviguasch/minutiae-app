const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')



// Customize yargs version
yargs.version('1.1.0')



// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
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


yargs.parse()