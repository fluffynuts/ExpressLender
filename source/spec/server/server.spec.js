describe('server/app', function() {
    var sutPath = require('./helpers/sut-path'),
        rewire = require('rewire');
        app = require(sutPath('server/app.js')),
        request = require('supertest'),
        parseXml = require('xml2js').parseString;
    it('should serve the index page for /', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'text/html')
            .expect('Content-Type', /html/)
            .expect(200)
            .end(function(error, response) {
                parseXml(response.text, function(err, result) {
                    console.log(JSON.stringify(result));
                    expect(result.html.head.title).toEqual('Express Lender');
                    done();
                });
            });
    });
});

