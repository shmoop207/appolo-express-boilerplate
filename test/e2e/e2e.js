var chai = require('chai'),
    appolo = require('appolo-express'),
    request = require('supertest'),
   should = require('chai').should();


describe("data api", function () {

    beforeEach(function () {
        appolo.launch({
            port: 8182,
            environment: "testing"
        });
    });

    afterEach(function () {
        appolo.launcher.reset();
    });


    it("should get data", function (done) {
        request(appolo.launcher.app)
            .get('/data/')
            .expect('Content-Type', /json/)
            .end(function (err,res) {
                res.status.should.be.eq(200);


                should.exist(res.body)

                res.body.working.should.be.ok

                done();
            });
    });
});