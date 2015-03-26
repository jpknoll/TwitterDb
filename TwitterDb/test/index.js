var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    assert = chai.assert,
    twitterdb = require('../index.js');

var config = require('./config.js');
console.log('using config: ');
console.log(config);

var TwitterDb = require('../index.js');
var db = new TwitterDb(config.twitter);

var create = db.create,
    getById = db.getById;

describe('#create', function() {
    it('creates new tweet', function(done) {
        create("user:'john',password:'password'", function (error, tweet, response) {
            console.log(error);
            assert.isNull(error, 'error was not null');
            assert(tweet);
            assert(response);

            done();
        });
    });

    it('gets existing tweet', function(done) {
        getById('581231288113238016', function(error, tweet, response) {
            console.log(error);
            assert.isNull(error, 'error was not null');
            assert(tweet);
            assert(response);

            done();
        });
    });
});