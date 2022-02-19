// Read the template
// Fill out the template with the stuff
// Write the templated file to index.html
const inquirer = require('inquirer');

async function generate() {
    /*

<p>{{name}}</p>
<p>{{location}}</p>
<p>{{bio}}</p>
<p>{{github}}</p>
*/
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
    console.log(answers)
}

generate()