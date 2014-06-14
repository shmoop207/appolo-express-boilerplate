"use strict";
var appolo = require('appolo-express'),
    Q = require('q'),
    _ = require('lodash');

module.exports = appolo.EventDispatcher.define({
    $config:{
        id:'dataProviderFactory',
        singleton:true,
        injectorAware:true,
        inject:['logger','env']
    },
    get:function(){

        if(this.env.name == "testing"){
            return this.$injector.getObject('mockDataProvider')
        } else {
            return this.$injector.getObject('remoteDataProvider')
        }
    }

});