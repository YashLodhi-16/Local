// including express, fs and path modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// necessary to create an express app
const app = express();

// defines port
const port = 3000;

// set for serving static files from static folder.
app.use('/static', express.static('static'));

// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded())

// set template engine as pug
app.set('view engine', 'pug');

// set the views directory as the folder where our all web pages will be kept.
app.set('views', path.join(__dirname, 'views'));

// set an api of get request for "/" page
app.get('/', (req, res) => {

    const con = "Get this gym membership for 60$ - Fill this form now!";
    // it will pass as a arguments in render function and it will display on web page
    const params = {
        title: 'Gym Form',
        content: con
    };
    
    // sets http status to 200 and render will return html string 
    res.status(200).render('index.pug', params);
});

// set an api of post request for "/" page
app.post('/',(req, res) => {
    // collection post request json
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    about = req.body.about

    // this will shows in the page
    const params = {title: 'Gym Form', content: "Your form has been submitted successfully"}
    
    // set status code to 200 and rendering index.pug file with params argument
    res.status(200).render('index.pug', params);

    // binding all post request data
    let data = `The name of the client is ${name}, ${age} years old, gender ${gender}, residing at ${address}. More about him ${about}. `;
    // appending the data in /Data/data.txt
    fs.appendFileSync(__dirname + '/Data/data.txt', data);
}); 

// listen will bind all connections on specified host and port
app.listen(port, ()=> {
    console.log(`The application started succesfully on http://localhost:${port}/`);
})