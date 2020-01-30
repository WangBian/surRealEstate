//Install express server
var express = require('express');
var path = require('path');
var proxy = require('html2canvas-proxy');
var app = express();

app.use('/', proxy());

// Serve only the static files form the dist directory
/*
app.use(express.static(process.cwd() + '/dist/surRealEstate'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
*/

//https://malcoded.com/posts/angular-file-upload-component-with-express/

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});