/* 
    App Name: Website
    Dev: Samuel Musukwa
    Date: 4th July, 2021
    Description: A Node.js app with passport authentication and mongodb.

 */

    // Inported modules
    const express = require('express');
    const ejs = require('ejs');
    const expressEjsLayouts = require('express-ejs-layouts');
    const db_connect = require('./config/db_connect');
    const path = require('path');

    // App Initializing
    const app = express();

    // Database connection
    db_connect();


    // Render Engines (ejs)
    app.use(expressEjsLayouts);
    app.set('view engine','ejs');
    
    //static files
    app.use(express.static(path.join(__dirname, 'public')));

    // routers
    app.use('/', require('./routes/home'));
    app.use('/user', require('./routes/user'));


    // Port Number
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


    