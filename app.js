const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


const command = process.argv[2]


console.log(process.argv);


if (command === 'add') {
    console.log('Adding a note');
} else if (command === 'remove') {
    console.log('Removing a note');
}