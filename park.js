var Park = function(){
  this.beasts = [];
  this.breeders = [];
}
Park.prototype = {
  numberOfBeasts: function() {
    return this.beasts.length;
  },

  addBeast: function(beast) {
    return this.beasts.push(beast)
  },

  removeTypeOfBeast: function(type) {
    var i = 0;
    for (var beast of this.beasts){
      i++;
      if (beast.type === type){
        var index = this.beasts.indexOf(beast);
        this.beasts.splice(index, i);
      }
    }
  },

  getBreederBeasts: function(numberOfOffspring) {
    for (var beast of this.beasts){
      if (beast.numberOfOffspring >=2){
        this.breeders.push(beast);
      }
    }
    return this.breeders;
  }
}
module.exports = Park;