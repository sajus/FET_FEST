const functions = require('firebase-functions');
var express = require('express');
const responseUtils = require('./response_entity/response-entity');

var app = express();

cors = require('cors');
app.use(cors({origin: true}));


require('./controllers/routes')(app);


exports.controller = functions.https.onRequest(app);
