
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  
  // We need to bind the makeBlinkyDancer object to the this keyword when setTimeout is invoked
  var boundStep = this.step.bind(this);
  
  setTimeout(boundStep, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
 
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.lineUp = function() {
  debugger;
}