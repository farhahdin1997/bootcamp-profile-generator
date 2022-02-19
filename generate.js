// Read the template
// Fill out the template with the stuff
// Write the templated file to index.html
const inquirer = require('inquirer');
const { promises: fs } = require('fs');

async function generate() {
/*
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name, bruv?'
    }, {
        type: 'input',
        name: 'location',
        message: 'Where are you, dude?'
    }, {
        type: 'input',
        name: 'bio',
        message: 'Tell me all about you, please.'
    }, {
        type: 'input',
        name: 'github',
        message: 'Where\'s the code at?'
    }])
    */
    const templateContents = await fs.readFile('./template/template.html')
    console.log(templateContents.toString())
}

generate()