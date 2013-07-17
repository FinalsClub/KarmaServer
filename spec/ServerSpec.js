var handler = require("../web/main");
var stubs = require("./stubs");
var fs = require('fs');
var res;

// allows us to run tests async
function async(cb){
  waits(200);
  runs(cb);
}

beforeEach(function(){
  res = new stubs.Response();
});

describe("Node Server Request Listener Function", function() {

  it("Should answer GET requests", function() {
    var req = new stubs.Request("http://127.0.0.1:8080/", "GET");

    async(function(){
      expect(res._responseCode).toEqual(200);
      expect(res._ended).toEqual(true);
    });
  });

  it("Should accept post requests", function() {
    var req = new stubs.Request("http://127.0.0.1:8080/", "POST", {url: url});

    var fileContents = fs.readFileSync(handler.datadir, ['utf8']);
    expect(res._responseCode).toEqual(302);
    expect(res._ended).toEqual(true);
  });
