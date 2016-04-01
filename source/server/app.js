'use strict';
// le moo
var express = require('express'),
    morgan = require('morgan'),
    config = require('../config'),
    path = require('path'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var App = function() {
    this.app = express();
    this._init();
};

App.prototype = {
    _init: function() {
        this._setupPublicFolder();
        this._setupLogging();
        this._setupBodyParsing();
        this._simulateDeleteAndPut();
    },
    _simulateDeleteAndPut: function() {
        this.app.use(methodOverride());
    },
    _setupBodyParsing: function() {
        var e = this.app;
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
        this.app.use(express.static(path.join(__dirname, '..', 'public')));
    },
    _setupLogging: function() {
        this.app.use(morgan('dev'));
    }
};

module.exports = new App().app; 
