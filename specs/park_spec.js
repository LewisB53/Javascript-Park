var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park',function(){

  var park1;
  var dinosaur1;

  beforeEach(function(){
   park1 = new Park();
   beast1 = new Dinosaur("t-rex", 1)
 })

  it("enclosure is empty", function(){
    assert.strictEqual(0,park1.numberOfBeasts())
  })

  it("can add dinosaur to enclosure", function(){
    park1.addBeast(beast1);
    assert.strictEqual(1, park1.numberOfBeasts());
  })



})