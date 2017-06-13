var Park = function(){
  this.beasts = [];
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
    for (var beast of this.beasts)
      i++;
      if (beast.type === type){
        var index = this.beasts.indexOf(beast);
        this.beasts.splice(index, i);
      }
 
  }

}
module.exports = Park;