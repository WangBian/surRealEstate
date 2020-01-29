//Install express server
const express = require('express');
const path = require('path');
//const cors = require('cors')
//const upload = require('./upload');
var proxy = require('html2canvas-proxy');
var app = express();

app.use('/', proxy());
/*
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
*/


// Serve only the static files form the dist directory
app.use(express.static(process.cwd() + '/dist/surRealEstate'));
//app.use(cors(corsOptions))

app.get('/*', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});

//https://malcoded.com/posts/angular-file-upload-component-with-express/
//server.post('/upload', upload)

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);