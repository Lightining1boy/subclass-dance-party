var makeWookie = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('wookie');
  $(this.$node).append('<img src = "https://pbs.twimg.com/profile_images/418320056385560576/bk1P1jgs.jpeg" class="wookie">')
}

makeWookie.prototype = Object.create(makeDancer.prototype);
makeWookie.prototype.constructor = makeWookie.prototype;

makeWookie.prototype.step = function() {    
    var boundStep4 = makeDancer.prototype.step.bind(this);
    boundStep4();
    this.$node.toggle();
  };