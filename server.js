const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

// app.use(bodyParser);
console.log(process.env.PORT);

app.get('/publish', function (req, res) {
    console.log('GET on /publish');
    res.status(200)
        .send('Node JS Server is running and waiting for request'); //Ping for SM59 Test
});

app.get('*', function (req, res) {
    res.sendStatus(404);
});

app.post('/publish', function (req, res) {
    const jsonData = JSON.stringify(req.body);
    console.log(`SAP message: ${jsonData}`);
    res.send(200);
});

app.listen(PORT, function () {
    console.log('Server is running and listening on port 5000');
});