const User = require("../models/user");
const app = require("../server.js");
const mongoose = require('mongoose');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const chaiHttp = require("chai-http");
// const should = chai.should();
chai.config.includeStack = true;
chai.use(chaiHttp);
// const assert = chai.assert;

const agent = chai.request.agent(app);

randomUser = {
    username: 'anything',
    password: 'anything_2'
}

describe("Authentication", function() {
    after(function () {
        User.findOneAndRemove({username: 'anything'}).then(() => done())
    })

  it("should not be able to login if user has not yet registered", function(done) {
      agent.post("/auth/login", { email: "wrong@wrong.com", password: "nope" }).end(function(err, res) {
          res.status.should.be.equal(401);
          done();
      });
  });

  // signup
  it("should be able to signup", function(done) {
      User.findOneAndRemove({ username: "test" }, function() {
          agent
          .post("/auth/sign-up")
          .send(randomUser)
          .end(function(err, res) {
              res.should.have.status(200);
              done();
          });
      });
  });

  // login
  it("should be able to log in", function(done) {
      agent
      .post("/auth/login")
      .send(randomUser)
      .end(function(err, res) {
          res.should.have.status(200);
          agent.should.have.cookie("nToken");
          done();
      });
  });

  // logout
  it("should be able to logout", function(done) {
      agent.get("/auth/logout").end(function(err, res) {
      res.should.have.status(200);
      agent.should.not.have.cookie("nToken");
      done();
      });
  });


  after(function () {
      agent.close()
  });

});