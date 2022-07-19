const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage.handlebars');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;