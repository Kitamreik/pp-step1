const express = require('express');
const data = require('../data/data');

module.exports = {
    index: (req, res) => {
        res.render('pages/index', {
            // key: value(object)
            // ex. comicsArray: data
            data: data
        });
    },
    about: (req, res) => {
        res.render('pages/videogallery');
    },
    login: (req, res) => {
        res.render('pages/login', {
            data: data
        });
    },
    contact_us: (req, res) => {
        res.render('pages/contactus');
    },
    map: (req, res) => {
        res.render('pages/map', {
            data: data
        });
    },
    photogallery: (req, res) => {
        res.render('pages/photogallery');
    },
};