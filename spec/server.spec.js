var request = require("request");
var base_url = "http://localhost:3000/"
var options = {
  url: base_url,
  headers: {
    'accept-language': 'en-US',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko)'
  }
}

describe("Header parser", function() {
  describe("/GET", function() {
    it("returns status code 200", function(done) {
      request.get(options, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it("returns the correct user agent", function(done) {
      request.get(options, function(error, response, body) {
        body = JSON.parse(body)
        expect(body['software']).toMatch("Macintosh; Intel Mac OS X 10_12_0");
        done();
      });
    });
    it("returns the correct language", function(done) {
      request.get(options, function(error, response, body) {
        body = JSON.parse(body)
        expect(body['language']).toMatch("en-US");
        done();
      });
    });
  });
});
