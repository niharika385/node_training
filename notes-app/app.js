// const fs = require('fs')

// fs.appendFileSync('notes.txt', 'whatsup');
const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')


const yargs = require('yargs')
const { demandOption } = require('yargs')
yargs.version('1.1.0')


//create add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title:{
            describe: 'add a title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note',
            demandOption:true
        }
    },

    handler(argv) {
        //console.log('adding a note', argv.title)
        notes.add( argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'remove',
            demandOption: true
        } 

    },
    handler(argv) {
        console.log('removing a note')
        notes.remove(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note')
    }
})

console.log(yargs.argv)