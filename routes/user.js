// Imported module
const express = require('express');
const router = express.Router();

// signin routes
router.get('/signin', (req, res) =>{
    res.render('signin', {title: 'Sign In'});
});
router.post('/signin', (req, res) =>{
    res.render('signup', {title: 'Register'});
});

// signup routes
router.get('/signup', (req, res) =>{
    res.render('signup', {title: 'Register'});
});
router.post('/signup', (req, res) =>{
    res.render('signup', {title: 'Register'});
});

// export router
module.exports = router;