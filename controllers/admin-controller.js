const { response } = require('express');
const data = require('../data/data');

module.exports = {
    admin_console: (request, response) => {
        res.render('pages/admin', {
            // passing the data here --> the form data from the footer
            // pointing to the file via line 2 - data variable -> key: value pair for object
            data: data
        }); 
    },
};

// More work maybe pending on HW12 P2

/*
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable

*/