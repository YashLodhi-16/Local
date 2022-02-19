// including express
const express = require('express');

// this variable is make to start an express app.
const app = express();

// defines port
const port = 3000;

// if someone sends a get request for "/" then will execute. {same for other as well}
// res.send sends the http response(the thing we provide between brackets res.send("yash") yash will sends as response), and we don't have set content type like res.end
app.get("/", (req, res) => {
    res.send("This is homepage of my first express app with harry");
});
app.get("/about", (req, res) => {
    res.send("This is about of my first express app with harry");
});
app.get("/this", (req, res) => {
    res.send("This page is not found");
});
app.post("/about", (req, res) => {
    res.send("This is post request about page of my first express app with harry");
});

// our app will listening on ${port}
app.listen(port, () => {
    // optional console.log! to check everything is fine
    console.log(`The application started successfully on http://localhost:${port}/`);
});