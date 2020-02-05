// Install express server
var express = require('express');
var path = require('path');
var app = express();

// Serve only the static files form the dist directory
app.use(express.static(process.cwd() + '/dist/surRealEstate'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});