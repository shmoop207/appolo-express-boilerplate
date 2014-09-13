var loggerModule= require('./logger/logger'),
    appolo = require('appolo-express');

appolo.use(loggerModule());