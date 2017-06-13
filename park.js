var Park = function(){
  this.beasts = [];
}
Park.prototype = {
  numberOfBeasts: function() {
    return this.beasts.length;
  }

}
module.exports = Park;