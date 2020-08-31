const { exec } = require("child_process");
const http = require('http');
const port = 80
const fs = require('fs');



var express = require('express')
var app = express()
app.get('/api/e2e', function (req, res) {
    exec("protractor conf.js", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        let rawdata = fs.readFileSync('Report.json');
        //let report = JSON.parse(rawdata);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(rawdata)
    }); 
    
  })

app.listen(port, () => {
    console.log(`Protractor at http://localhost:${port}`)
})

/*const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    exec("protractor conf.js", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });  
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/