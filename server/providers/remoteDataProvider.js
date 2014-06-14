"use strict";
var appolo = require('appolo-express'),
    Q = require('q'),
    _ = require('lodash');

module.exports = appolo.EventDispatcher.define({
    $config:{
        id:'remoteDataProvider',
        singleton:true,
        lazy:true,
        inject:['logger']
    },

    getData:function(){
        //get remote data
        return Q({working:true})
    }

});