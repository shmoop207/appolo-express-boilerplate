var chai = require('chai'),
   chaiHttp = require('chai-http'),
   should = require('chai').should();
chai.use(chaiHttp);

describe("data api", function () {
    it("should get data", function (done) {
        chai.request("http://localhost:6007")
            .get('/data/')
            .res(function (res) {
                res.should.to.have.status(200);
                res.should.to.be.json;

                should.exist(res.body)

                res.body.data.working.should.be.ok

                done();
            });
    });
});