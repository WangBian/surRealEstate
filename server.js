// Install express server
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var JOURNALS_COLLECTION = "journals";
var PROPERTIES_COLLECTION = "properties";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/surRealEstate";
app.use(express.static(distDir));

app.get('/home', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/tools', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/tools/mortgage-calc', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/tools/rental-property-calc', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/properties', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/journals', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});
app.get('/aboutus', function (req, res) {
    res.sendFile(path.join(process.cwd() + '/dist/surRealEstate/index.html'));
});


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
mongodb.MongoClient.connect(process.env.MONGODB_URI || "@ds061731.mlab.com:61731/heroku_2tsj8l2w",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    function (err, client) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        // Save database object from the callback for reuse.
        db = client.db();
        console.log("Database connection ready");

        // Initialize the app.
        var server = app.listen(process.env.PORT || 8080, function () {
            var port = server.address().port;
            console.log("App now running on port", port);
        });
    });

// JOURNALS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

/*  "/api/journals"
 *    GET: finds all journals
 *    POST: creates a new journal
 */

app.get("/api/journals", function (req, res) {
    db.collection(JOURNALS_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get journals.");
        } else {
            res.status(200).json(docs);
        }
    });
});

app.post("/api/journals", function (req, res) {
    var newJournal = req.body;
    newJournal.createDate = new Date();

    if (!req.body.title) {
        handleError(res, "Invalid user input", "Must provide a title.", 400);
    } else {
        db.collection(JOURNALS_COLLECTION).insertOne(newJournal, function (err, doc) {
            if (err) {
                handleError(res, err.message, "Failed to create new journal.");
            } else {
                res.status(201).json(doc.ops[0]);
            }
        });
    }
});

/*  "/api/properties"
 *    GET: finds all properties
 */

app.get("/api/properties", function (req, res) {
    db.collection(PROPERTIES_COLLECTION).find({}).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get properties.");
        } else {
            res.status(200).json(docs);
        }
    });
});

/*  "/api/properties/:city&:state"
 *    GET: finds all properties
 */

app.get("/api/properties/:city&:state", function (req, res) {
    console.log(req.param.city)
    db.collection(PROPERTIES_COLLECTION).find({city: req.param.city, state: req.param.state }).toArray(function (err, docs) {
        if (err) {
            handleError(res, err.message, "Failed to get properties.");
        } else {
            res.status(200).json(docs);
        }
    });
});