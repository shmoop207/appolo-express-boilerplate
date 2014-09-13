var appolo = require('appolo-express'),
    chai = require('chai'),
    should = chai.should();


describe("data manager", function () {
    beforeEach(function () {
        appolo.launcher.launch({
            port: 8182,
            environment: "testing"
        });
    });

    afterEach(function () {
        appolo.launcher.reset();
    });


    it("should get data from dataManager", function (done) {
       var dataManager= appolo.inject.getObject('dataManager')

        dataManager.getData().then(function(data){
            data.working.should.be.ok
            done();
        }).fail(done)
    })
})