'use strict';

const express = require('express');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const expressHbs = require('express-handlebars');
const session = require('express-session');

const app = express(); 
// serves files from the root directory

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static('./'));

app.listen(8080, function () {    
  console.log('Listening at http://localhost:8080');  
});