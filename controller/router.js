'use strict';

const express = require('express');
const router = express.Router();
//const exec = require('child_process').exec;
//const session = require('express-session');
//const Handlebars = require('handlebars');
//const fs = require('fs');
//const home = require('os').homedir();


router.get('/', function (req, res) {
    res.render('index',{title: 'Welcome to Network-test'});
  });

module.exports = router;