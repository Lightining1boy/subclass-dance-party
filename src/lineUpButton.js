$(document).ready(function() {
  
    $('.addLineUpButton').on('click', function(event) {
      
        for (var i = 0; i < dancers.length; i++) {
            var height = Math.random() * 1000;
            dancers[i].setPosition(50, height);
        }
    });
  });
  