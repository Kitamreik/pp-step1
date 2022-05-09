const express = require('express');
const data = require('../data/data');

module.exports = {
    admin: (req, res) => {
        res.render('pages/admin', {
            data: data
        }); 
    },
    login: (req, res) => {
        res.render('pages/login', {
            data: data
        });
    }
};

/*
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable

*/