const express = require('express'),
    cors = require('cors'),
    whiteList = [
        'http://localhost:5000',
        'https://www.freecodecamp.org'
    ];

let corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    if(whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);