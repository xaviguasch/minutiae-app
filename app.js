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


// add, remove, read, list


console.log(yargs.argv);