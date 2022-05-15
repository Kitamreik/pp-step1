const express = require('express');
const data = require('../data/data');

module.exports = {
    admin: (req, res) => {
        if (request.isAuthenticated()) {
            res.render('pages/admin', {
                data: data
            }); 
        } else {
            response.redirect('/login');
        }
    },
    create_log: (req, res) => {
        res.render('pages/createlog', {
            data: data
        });
    },
    delete_log: (req, res) => {
        res.render('pages/deletelog', {
            data: data
        });
    },
    login: (req, res) => {
        res.render('pages/login', {
            data: data
        });
    },
    update_log: (req, res) => {
        res.render('pages/updatelog', {
            data: data
        });
    },
};

/*
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable

*/