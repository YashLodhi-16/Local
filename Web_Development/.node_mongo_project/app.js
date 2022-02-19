// including express, path and mongoose modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// we will use express.urlencoded() instead of bodyparser 
// const bodyparser = require('body-parser');

// necessary to make an express app
const app = express();

// defines port
const port = 3000;

// set for serving static files
app.use('/static', express.static('static'));

// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded());

// set template engine as pug
app.set('view engine', 'pug');

// set views directory to where all web pages exits
app.set('views', path.join(__dirname, 'views'));

// set an get api for "/" page
app.get('/', (req, res) => {
  // set status to 200 and rendering index.pug file
  res.status(200).render('index.pug')
});

// set an get api for "/contact" page
app.get('/contact', (req, res) => {
  // set status to 200 and rendering contact.pug file 
  res.status(200).render('contact.pug')
});

// connecting to mongodb test database, set parser to useNewUrlParser
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

// schema represents the structure of a paricular document
// creating new schema for contact form
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  concern: String
});

// are responsible for creating and reading documents from the underlying MongoDB database
// creating model usiing contact schema
const Contact = mongoose.model('forContact', contactSchema);

// set an post reques api for "/contact" page
app.post('/contact', (req, res) => {
  // defines myData to get object. passing req.body to contact model, it will return a model according contact schema using req.body content
  var myData = new Contact(req.body);
  
  // save function will save data to mongo db and returns a promise if resolve then then function fires and else catch function fires
  myData.save().then(() => {
    // sending success message
    res.send("this item has been saved to the database");
  }).catch(() =>{
    // set status to 400 and sending failure message 
    res.status(400).send('item was not saved to the database')
  })
})

// listen will bind all connections and listening on specified host and port.
app.listen(port, () => {
  // optional console.log! to know everything works fine
  console.log(`The application started successfully on port http://localhost:${port}/`)
});