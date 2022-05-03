const express = require('express');
const app = express();
const PORT = 3000;

// Morgan Functionality 
const morgan = require('morgan');
app.use(morgan('dev'));

// Adding Path module and EJS to app.js 
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

// // Requiring Method Override
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

// // Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Mapping out Routes
app.get('/', (req, res) => {
    // res.render('/pages/index');
    // res.send('Hey, this is the Index page'); 
    // this does work --> res send
});

app.get('/contactus', (req, res) => {
    // res.render('pages/contactus');
    // res.send('Hey, this is the Contact Us page');
    // this does work --> res send
});

app.get('/login', (req, res) => {
    // res.render('pages/login');
    // res.send('Hey, this is the Login page');
    // this does work --> res send
});

app.get('/map', (req, res) => {
    // res.render('pages/map');
    // res.send('Hey, this is the Map page');
    // this does work --> res send
});

app.get('/photogallery', (req, res) => {
    // res.render('pages/photogallery');
    // res.send('Hey, this is the Photogallery page');
    // this does work --> res send
});

app.get('/videogallery', (req, res) => {
    // res.render('pages/videogallery');
    // res.send('Hey, this is the Videogallery page');
    // this does work --> res send
});

// Our routes still have to be called
// Example: const indexRoutes = require('./routes/index-routes');
// app.use('/', indexRoutes);

//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});
