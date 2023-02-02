const inquirer = require("inquirer")
const fs = require("fs")
function startPrompts() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Project Name",
            name: "title"
        },
        {
            type: "input",
            message: "Enter ProjectDescription",
            name: "Description"
        },
        {
            type: "input",
            message: "Enter Installation Instructions",
            name: "Installation"
        },
        {
            type: "input",
            message: "Usage Information",
            name: "Usage"
        },
        {
            type: "input",
            message: "Contribution Guidelines",
            name: "Contribution"
        },
        {
            type: "input",
            message: "Test Instructions",
            name: "Test"
        },
        {
            type: "list",
            choices: ["MIT", "ISC", "APACHE2.0", "GPL", "NONE"],
            message: "License",
            name: "License"
        },
        {
            type: "input",
            message: "Enter E mail",
            name: "Email"
        },
                {
            type: "input",
            message: "Github username",
            name: "GithubUserName"
        }

    ]).then(response => {
        var readme = `
# Project Title: ${response.title}
## description: ${response.description}

### Table of contents
* [Usage](#usage)
* [License](#license)
* [Installation](#Installation)
* [Email](#Email)
* [Contribution](#Contribution)
* [Test](#Test)
* [Description](#Description)


#### Usage:
${response.Usage}

#### License:
${response.License}

#### Installation:
${response.Installation}

### Email:
${response.Email}

### Contribution
${response.Contribution}

### Test
${response.Test}

### Description
${response.Description}
`
        fs.writeFileSync("README_OUTPUT.md", readme, function (err) {
            if (err) throw err
        })
        console.log(readme)
    })
}


startPrompts()