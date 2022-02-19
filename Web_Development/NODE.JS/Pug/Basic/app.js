// including express, path
const express = require('express');
const path = require('path');

// this is for creating an express app.
const app = express();

// defines port
const port = 3000;

// for serving static files
app.use('/static', express.static('static'));

// set the template enging as pug
app.set('view engine', 'pug');

// set the views directory in the second argument
app.set('views', path.join(__dirname, "views"));

// an pug endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', {title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!'});
});

// apis for get and post 
app.get('/', (req, res) => {
    res.status(200).send("this is homepage of my first express app with harry");
});

app.get('/about', (req, res) => {
    res.status(200).send("this is get about page of my first express app with harry");
});

app.get('/this', (req, res) => {
    res.status(404).send("thispage is not found on my website cwh");
});

app.post('/about', (req, res) => {
    res.status(200).send("this is post about page of my first express app with harry");
});

// to bind and listen the connections on the specified host and port
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`); 
});