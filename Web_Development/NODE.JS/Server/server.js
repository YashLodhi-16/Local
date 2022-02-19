// including http module.
const http = require('http');

// defines a port
const port = 3000;

// defines a hostname
const hostname = '127.0.0.1';

// including fs module.
const fs = require('fs');

// this will contains our files directory location
const filesLocation = __dirname + "/Files/";

// grabing all data of these files into these variables.
const index = fs.readFileSync(filesLocation + "index.html", "utf-8");const content = fs.readFileSync(filesLocation + "content.html", "utf-8");
const services = fs.readFileSync(filesLocation + "services.html", "utf-8");
const contact = fs.readFileSync(filesLocation + "contact.html", "utf-8");
const about = fs.readFileSync(filesLocation + "about.html", "utf-8");

// creating a server using http.createServer
// req is request and res is response.
const server = http.createServer((req, res) => {

    // setting status code 200(ok) and content type to html.
    res.writeHead(200, {"Content-type": "text/html"});

    // this contains requests url.
    const url = req.url;

    // it will response to according url
    // res.end() can only respond with text and it will not set "Content-Type"
    if(url === '/'){
        res.end(index)
    }
    else if(url === '/about'){
        res.end(about)
    }
    else if(url === '/contact'){
        res.end(contact)
    }
    else if(url === '/content'){
        res.end(content)
    }
    else if(url === '/services'){
        res.end(services)
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>")
    };
});

// now our server will listening on its port and hostname, callback will at the end.
server.listen(port, hostname, () => {
    // optional console.log! this is for only that every thing is fines
    console.log(`This server is running on http://${hostname}:${port}/`);
});