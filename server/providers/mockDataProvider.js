"use strict";
var appolo = require('appolo-express'),
    Q = require('q'),
    _ = require('lodash');

module.exports = appolo.EventDispatcher.define({
    $config:{
        id:'mockDataProvider',
        singleton:true,
        lazy:true,
        inject:['logger']
    },
    getData:function(){
        return Q({working:true})

    }

});