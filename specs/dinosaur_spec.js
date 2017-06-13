var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('Dinosaur',function(){

  var dinosaur1;

  beforeEach(function(){
   dinosaur1 = new Dinosaur("t-rex",1);
 })

  it ("Dinosaur has type", function(){
    assert.strictEqual("t-rex",dinosaur1.type);
  })

  it ("Dinosaur has number of offspring", function(){
    assert.strictEqual(1,dinosaur1.numberOfOffspring);
  })

})