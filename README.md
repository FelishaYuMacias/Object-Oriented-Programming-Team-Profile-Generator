# Object-Oriented-Programming-Team-Profile-Generator
Module 10 Challenge


## Description

A Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.


### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```


### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)



## Installation

*   If you do not have node.js installed click the link below to install the LTS version.

    https://nodejs.org/en/


*   Right click on index.js and select "Open in Integrated Terminal"

*   The file package.json should be included with the files. Run the following commands to install the correct versions of inquirer and jest.
 ``` md 
 npm i 
 ``` 


## Usage

Once everything is installed run the following command and answer prompts to create your README file.
```md
node index.js
``` 

See video below for walkthrough demonstrating the functionality of the application and passing tests.
https://drive.google.com/file/d/1X7i3UA5jEa32u8KjEv7DQ-rSiiFHzHYW/view


### Screenshots

![Screenshot of passed tests](./media/tests.png)

![Screenshot of terminal after prompts are answered](./media/prompts.png)

![Screenshot of console log after application is ended](./media/console.png)

![Screenshot of sample profile generated](./media/samplehtml.png)



## Testing

To test run the following in the command line.
```md
npm test
``` 

You will receive a printout of whether tests passed or failed and why.



## Credits

Inquirer NPM
https://www.npmjs.com/package/inquirer

Jest NPM
https://www.npmjs.com/package/jest

Github Repository Link
https://github.com/FelishaYuMacias/Object-Oriented-Programming-Team-Profile-Generator

Link to Walkthrough Recording
https://drive.google.com/file/d/1X7i3UA5jEa32u8KjEv7DQ-rSiiFHzHYW/view




## License

MIT License

Copyright (c) 2022 Felisha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.