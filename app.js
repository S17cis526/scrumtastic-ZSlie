"use strict";
var sqlite3 = require('sqlite3');

//Stores a local file in this project that is the database
var db = new sqlite3.Database('scrutastic.sqlite3');

var migrate = require('./src/migrations');
migrate(db);

db.