var Park = function(){
  this.beasts = [];
}
Park.prototype = {
  numberOfBeasts: function() {
    return this.beasts.length;
  },

  addBeast: function(beast) {
    return this.beasts.push(beast);
  }

}
module.exports = Park;