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
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.send(`{error: \"${error.message}\" }`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.send(`{error: \"${error.message}\" }`);
            return;
        }
        let rawdata = fs.readFileSync('Report.json');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(rawdata)
    }); 
    
  })

app.listen(port, () => {
    console.log(`Protractor at http://localhost:${port}`)
})