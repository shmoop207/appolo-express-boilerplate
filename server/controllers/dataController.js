"use strict";
var appolo = require('appolo-express');

module.exports = appolo.Controller.define({
    $config:{
        id:'dataController',
        inject:['dataManager'],
        routes:[{
            path: '/data/',
            method: 'get',
            controller: 'data',
            action: 'getData'
        }]
    },

    getData:function(req,res){

        this.dataManager.getData()
            .then(this.sendOk.bind(this))
            .fail(this.sendServerError.bind(this))
    }

})