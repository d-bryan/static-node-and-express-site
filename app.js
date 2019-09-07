// require express
const express = require('express');
// use express
const app = express();
// require object literal from data.json file
const data = require('./data.json');
// assign array of objects to projectData
const projectData = data.projects;
// require HTTP
var http = require('http');
// require HTTPS
var https = require('https');
// set the process environment
app.set('port', process.env.PORT || 3000)
// set the view engine to pug
app.set('view engine', 'pug');
// use static route to serve static files with express.static method from public folder
app.use('/static', express.static('public'));


// get the home route
app.get('/', (req, res) => {
  // render the home route with the index template and JSON data
  res.render('index', {projectData});
});

// get the about route
app.get('/about', (req, res) => {
  // render the about page with JSON data
  res.render('about', {projectData});
});

// get the projects route
app.get('/project/:id', (req, res, next) => {
  
  // assign request parameter object to id
  const id = req.params.id;
  // assign the requested object to array position variable project
  const project = projectData[id];
  // if the project doesnt exist show error template
  if (project === undefined) {
    // new Type Error
    const err = new Error('The project does not exist');
    err.status = 404;
    // pass the error to locals for use on error template
    res.locals.error = err;
    // log error to the console
    console.log(err);
    res.render('error');
  // else render the project page
  } else {
    // render the requested project to the project template
    res.render('project', {project});
  }

  next();
});

// handle 404 page not found and show user friendly page
app.use((req, res, next) => {
  // create new error 
  const err = new Error("The page you are looking for cannot be found");
  err.status = 404;
  // pass the error to locals for use on error template
  res.locals.error = err;
  // log the error message to the console
  console.log(err);
  // render the error template
  res.render('error');
  // continue the app
  next();
});

// create server and listen for app
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
});

