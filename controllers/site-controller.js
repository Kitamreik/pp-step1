const express = require('express');
const data = require('../data/data');

module.exports = {
    about: (req, res) => {
        res.render('pages/videogallery', {
            data: data
        });
    },
    contact_us: (req, res) => {
        res.render('pages/contactus', {
            data: data
        });
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
    index: (req, res) => {
        res.render('pages/index', {
            data: data
        });
    },
    map: (req, res) => {
        res.render('pages/map', {
            data: data
        });
    },
    photogallery: (req, res) => {
        res.render('pages/photogallery', {
            data: data
        });
    },
    tj_quiz: (req, res) => {
        res.render('pages/tj-quiz');
    },
    tj_answers: (req, res) => {
        res.render('pages/tj-answers');
    },
    update_log: (req, res) => {
        res.render('pages/updatelog', {
            data: data
        });
    },
};