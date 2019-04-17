var makeStormtrooper = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('stormtrooper');
  $(this.$node).append('<img src = "https://i.dlpng.com/static/png/1191411_thumb.png" class="stormtrooper">')
}

makeStormtrooper.prototype = Object.create(makeDancer.prototype);
makeStormtrooper.prototype.constructor = makeStormtrooper.prototype;

makeStormtrooper.prototype.step = function() {    
    var boundStep3 = makeDancer.prototype.step.bind(this);
    boundStep3();
    this.$node.toggle();
  };