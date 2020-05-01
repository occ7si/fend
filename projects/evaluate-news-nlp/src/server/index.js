const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const AYLIENTextAPI = require("aylien_textapi");

let textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express();

const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Look for asset files in the dist instead of the client folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3031, function () {
    console.log('Example app listening on port 3031!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/analyzeText', function (req, res) {
    console.log('inside server app');
    textapi.sentiment({
        'text' : 'John is a very good football player!'
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            res.send(error);
        }
    });
    // res.send(apiResponse);
});


app.get('/getAylienObj', function (req, res) {
    console.log(process.env.API_ID);
    console.log(process.env.API_KEY);
    console.log('in server');
    textapi.sentiment({
        'text' : 'John is a very good football player!'
    }, function(error, response) {
        if (error === null) {
            console.dir(response);
            res.send(response);
        } else {
            console.log('error is: ' + error);
            res.send(error);
        }
    })
});