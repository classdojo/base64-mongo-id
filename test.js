var convertId = require("./index");
var expect = require("expect.js");

var data = [
  {long: "521fc843178a921652000007", short: "kx-8gNuaAxpi0007"},
  {long: "521fc843178a921652000060", short: "kx-8gNuaAxpi001w"},
  {long: "52336be5b74a7a0000000015", short: "kzdHVrtauw00000l"},
  {long: "53c5d28ca62be0a940000002", short: "kYnizaoHUaB00002"},
  {long: "521fc86d178a92165200001d", short: "kx-8rhuaAxpi000t"},
  {long: "52af5b7913d8e99f41136d4c", short: "kGZruhfoWpZ14SRc"},
  {long: "5397b40c7232ef916a000967", short: "kVuQ378OXV5G00BD"},
];

describe("base64-mongo-id", function() {

  it("throws on bad input for long to short", function() {
    expect(function() {
      convertId.longToShort(data[0].short);
    }).to.throwError();
  });

  it("throws on bad input for short to long", function() {
    expect(function() {
      convertId.shortToLong(data[0].long);
    }).to.throwError();
  });

  data.forEach(function(pair, i) {
    
    it("converts long to short properly - test " + (i + 1), function() {
      expect(convertId.longToShort(pair.long)).to.be(pair.short);
    });

    it("converts short to long properly - test " + (i + 1), function() {
      expect(convertId.shortToLong(pair.short)).to.be(pair.long);
    });

  });

});