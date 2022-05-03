const { response } = require('express');
const data = require('../data/data');

module.exports = {
    admin_console: (request, response) => {
        response.render('pages/admin', {
            // passing the data here
            // pointing to the file via line 2 - data variable -> key: value pair for object
            data: data
        }); 
    },
};

// More work maybe pending on HW12 P2