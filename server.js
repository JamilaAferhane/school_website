// Import express
const express = require("express");
const app = express();

var formidable = require("express-formidable");
app.use(formidable());

// Import http 
const http = require('http').createServer(app);
var bcrypt  = require("bcrypt");
var fileSystem = require("fs");



// database
var mongodb = require("'mongodb");
var mongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectId;
// json 
var jwt = require("jsonwebtoken");
var accessTokenSecret = "myAccessTokenSecret1234567890";

var socketIO = require("socket.io")(http);
var socketID = "";
var users = [];

// URL 
var mainURL = "http://localhost:3000";

socketIO.on("connection", function(socket){
    console.log("user conncected", socket.id);
    socketID = socket.id;
})
// Static Files
app.use(express.static("public"));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/style', express.static(__dirname + 'public/style'));
app.use('/videos', express.static(__dirname + 'public/videos'));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

// root (home page)
app.get('', (req, res) => {
    res.render('index');
});

// Register page
app.get('/register', (req, res) => {
    res.render('register');
});

// login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Laureate register
app.get('/registerLaureate', (req, res) => {
    res.render('registerLaureate');
});
// None register
app.get('/registerNone', (req, res) => {
    res.render('registerNone');
});
// Student register
app.get('/registerStudent', (req, res) => {
    res.render('registerStudent');
});

// Cloud(SUD) page
app.get('/index1', (req, res) => {
    res.render('index1');
});

// listening
http.listen(3000, function(){
    console.log("Server started at " + mainURL);
    
    mongoClient.connect("mongo://localhost:27017", function(error, client){
        var database  = client.db("our_project");
        console.log("Database connected :)");    
    })
});