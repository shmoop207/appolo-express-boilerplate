"use strict";
var appolo = require('appolo-express'),
    Q = require('q'),
    _ = require('lodash');

module.exports = appolo.EventDispatcher.define({
    $config:{
        id:'dataManager',
        singleton:true,
        inject:['dataProvider','logger','env']
    },
    getData:function(){

        var deferred = Q.defer();

        this.dataProvider.getData()
            .then(this._onGetDataResult.bind(this,deferred))
            .fail(this._onGetDataFail.bind(this,deferred));

        return deferred.promise;
    },
    _onGetDataResult:function(deferred,data){
        // do something with data
        deferred.resolve(data);

    },
    _onGetDataFail:function(deferred,err){
        //handle error
        this.logger.error("failed to get data",{err:err})

        deferred.reject(err);
    }

});