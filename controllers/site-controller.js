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
    // create_log: (req, res) => {
    //     res.render('pages/createlog', {
    //         data: data
    //     });
    // },
    // delete_log: (req, res) => {
    //     res.render('pages/deletelog', {
    //         data: data
    //     });
    // },
    login: (req, res) => {
        res.render('pages/login', {
            data: data
        });
    },
    login_post: (req, res) => {
        const {username, password} = request.body;
        User.findOne({username: username}, (error, foundUser) => {
          if (error) {
            console.log(`The error at login is: ${error}`);
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect("/admin");
            });
          };
       });
    },
    logout: (req, res) => {
        request.logout();
        response.redirect('/')
    },
    index: (req, res) => {
        res.render('pages/index', {
            data: data
            // insert user schema
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
    register_get: (req, res) => {
        res.render('pages/register');
    },
    register_post: (req, res) => {
        const {username, password} = request.body;
        User.register({username: username}, password, (error) => {
          if (error) {
            console.log(error);
            response.redirect('/register');
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/admin');
            });
          };
        });
    },
    tj_quiz: (req, res) => {
        res.render('pages/tj-quiz');
    },
    tj_answers: (req, res) => {
        res.render('pages/tj-answers');
    },
    // update_log: (req, res) => {
    //     res.render('pages/updatelog', {
    //         data: data
    //     });
    // },
    
    // Activate Passport First
    
    // auth_google: passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),
    // index_redirect: [passport.authenticate('google', {failureRedirect: '/login'}),
    // function(req, res) {
    //     res.redirect('/admin');
    //     }]
};