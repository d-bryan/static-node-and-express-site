# static-node-and-express-site

The live version of the site can be found at https://dylan-bryan-portfolio.herokuapp.com/

## Dependencies

`Express ^4.17.1`
`Pug ^2.0.4`

## app.js file

The `app.js` file is the middleware file for handling all of the routes for templates and errors

It gets all of the information needed for the templates from the `data.json` file

## Pug Templates

### Layout

This sets up the HTML for the page and the body and blocks the content out

### Index

`Extends Layout` => gets set to home route, uses an `each loop` to add the the main img source, link and text to the page

### Project

`Extends Layout` => gets set to project route, using interpolation it gets the project selected to generate assets such as: `../project/project#`

uses an `each loop` to generate the following assets for the project:

  - technologies used in the project
  - screenshots from the project itself

### About

`Extends Layout` => adds description to the page, skills, links to social media and contact info

### Error

`Extends Layout` => displays user friendly error message, shows 404 png, adds a link back to the home route -> "Find your way back home", displays error code and the error stack all in a clean and friendly manner

## Customizations

I really liked the font, background and text colors (must be the designer in me, dont change what isnt broken) so I chose to change the following:

- box or text shadows
- transitions or animations
- add a logo

### box or text shadows

I added hover animations to the thumbnail class so that it changed to a light crimson color

### transition or animations

I made all of the `li` and `H1` elements have a hover transition as well to change to the light crimson color

### add a logo

I designed a custom logo in adobe illustrator for my project and made differnet sizes for specific purposes adding one to the about page

### favicon

this was not asked of me, but again I am a huge fan of black and white and no matter how many different color schemes I tried I didnt like the logo in any of them except B&W so I just added a favicon instead of changing the colors and fonts I need one for my real portfolio anyway so I hope this doesnt prevent me from getting exceeds on this.

## Grade Expectations

My goal is to receive Exceeds Expectations on this project

## Initialize the app and add dependencies

### Meets Expectations

The node_modules folder is referenced in the .gitignore file and isn't in the repo.

Running npm install downloads all necessary dependencies.

Running node app.js serves the app.

### Exceeds Expectations

Running npm start serves the app.

## Data

### Meets Expectations (Exceeds Expectations N/A)

The data.json file is present.

The data.json file contains a projects property set to an array containing at least five objects that each contain the following properties:

  - id
  - project_name
  - description
  - technologies
  - live_link
  - github_link
  - image_urls


## Routes

### Meets Expectations (Exceeds Expectations N/A)

The following routes do render the appropriate pages:

  - / - Home page
  - /about - About page
  - /project or /projects route that includes a project id parameter

App uses a static route to serve the static files in the public folder

## Templates

### Meets Expectations

The following template are present:

  - layout.pug
  - index.pug
  - about.pug
  - project.pug

Templates have all of the required information as exampled in the provided HTML and mockup files:

  - name
  - titles
  - descriptions
  - project descriptions
  - project images
  - links

Starter comments have been removed from pug files.

### Exceeds Expectations

`error.pug` template has been created.

## Errors

### Meets Expectations

App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.

### Exceeds Expectations

When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following:

  - error.message
  - error.status
  - error.stack

## Layout, CSS and styles

### Meets Expectations

Final project's layout and positioning does match the example HTML or mockup files.

### Exceeds Expectations

Project has at least three of the following items customized:

  - color
  - background color
  - font
  - box or text shadows
  - transitions or animations
  - add a logo

Changes detailed in the README.md file and the submission notes.
