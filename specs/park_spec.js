var assert = require('assert');
var Park = require('../park.js')
var Dinosaur = require('../dinosaur.js');

describe('Park',function(){

  var park1;
  var beast1;
  var beast2;
  var beast3;

  beforeEach(function(){
   park1 = new Park();
   beast1 = new Dinosaur("t-rex", 1)
   beast2 = new Dinosaur("stegasaurus", 1)
   beast3 = new Dinosaur("stegasaurus", 3)


 })

  it("enclosure is empty", function(){
    assert.strictEqual(0,park1.numberOfBeasts())
  })

  it("can add dinosaur to enclosure", function(){
    park1.addBeast(beast1);
    assert.strictEqual(1, park1.numberOfBeasts());
  })

  it("can remove specific type of dinosaur" , function(){
    park1.addBeast(beast1);
    park1.addBeast(beast2);
    park1.addBeast(beast2);
    park1.removeTypeOfBeast(beast2.type);
    assert.strictEqual(1,park1.numberOfBeasts())
  })

  it("can get dinosaurs with 2 offspring" , function(){
    park1.addBeast(beast1);
    park1.addBeast(beast3);
    park1.addBeast(beast3);
   
    park1.getBreederBeasts(beast1.numberOfOffspring);
    assert.strictEqual(2,park1.breeders.length);


  })



})