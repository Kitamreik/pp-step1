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

// Requiring Method Override
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

// Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

// app.use(routes);

//Server
app.listen(PORT, () => {
    console.log(`The server is ready and all ears on port ${PORT}!`);
});

