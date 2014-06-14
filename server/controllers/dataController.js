"use strict";
var appolo = require('appolo-express');

module.exports = appolo.Controller.define({
    $config:{
        id:'dataController',
        inject:['dataManager']
    },

    getData:function(req,res){

        this.dataManager.getData()
            .then(this.jsonSuccess.bind(this))
            .fail(this.serverError.bind(this))
    }

})