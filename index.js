'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const expressHbs = require('express-handlebars');
const session = require('express-session');
const accountsController = require('./controller/router.js');

const app = express(); 

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bs', express.static(__dirname + './node_modules/bootstrap/dist/js/'));
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs', expressHbs({extname:'hbs',
  defaultLayout:'layout.hbs',
  relativeTo: __dirname}));
app.set('view engine', 'hbs');

// See the Controller for routes,
app.use('/',accountsController);

app.listen(8080, function () {    
  console.log('Listening at http://localhost:8080');  
});

module.exports = app;

