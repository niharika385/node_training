// const fs = require('fs')

// fs.appendFileSync('notes.txt', 'whatsup');
const validator = require('validator')
const chalk = require('chalk')

const notes = require('./notes')
console.log(chalk.green.bgBlue.inverse.bold(notes() ))
console.log(validator.isEmail('abc@xyz.com') )
console.log(process.argv[2])