'use strict';
var express = require('express'),
    morgan = require('morgan'),
    config = require('../config'),
    path = require('path'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var App = function() {
    this._expressApp = express();
    this._init();
};

App.prototype = {
    start: function() {
        this._expressApp.listen(config.port, function() {
            console.log('Listening on ' + config.port);
        })
    },
    _init: function() {
        this._setupPublicFolder();
        this._setupLogging();
        this._setupBodyParsing();
        this._simulateDeleteAndPut();
    },
    _simulateDeleteAndPut: function() {
        this._expressApp.use(methodOverride());
    },
    _setupBodyParsing: function() {
        var e = this._expressApp;
        this._getParsers().forEach(function(usable) {
            e.use(usable);
        });
    },
    _getParsers: function() {
        return [
            bodyParser.urlencoded({
                'extended': 'true'
            }),
            bodyParser.json(),
            bodyParser.json({
                'type': 'application/vnd.api+json'
            })
        ];
    },
    _setupPublicFolder: function() {
        this._expressApp.use(express.static(path.join(__dirname, '..', 'public')));
    },
    _setupLogging: function() {
        this._expressApp.use(morgan('dev'));
    }
};

module.exports = new App();
