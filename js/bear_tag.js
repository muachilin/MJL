

var rolling_ball = document.querySelector(".rolling_ball");
var playing = false;
var mousePosition;
var offset = [0,0];
var isDown = false;
var hh = false;
                        
                                
                                
                        rolling_ball.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        rolling_ball.offsetLeft - e.clientX,
        rolling_ball.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    
    event.preventDefault();
    if (isDown) {
        mousePosition = { 
            x : event.clientX,
            y : event.clientY
        };
      
        rolling_ball.style.left = (mousePosition.x + offset[0]) + 'px';
        rolling_ball.style.top  = (mousePosition.y + offset[1]) + 'px' ;

anime({
        targets:l_hand,
        //rotateZ: {value: '+=30', delay: 10},
        //rotateZ: [40, 10],
        //scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      });
      
      anime({
        targets:r_hand,
        //rotateZ: {value: '+=30', delay: 10},
        //rotateZ: [100, 150],
        //scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      });
      
        anime({
          targets: '#llegs',
           //rotateZ: [40, -40],
          rotateZ: {value: '+=500', delay: 10},
          });
      anime({
          targets: '#rlegs',
          //rotateZ: [40, -40],
          rotateZ: {value: '+=500', delay: 10},
          });
      
      
          anime({
  targets: rolling_ball,
  translateY: '+=20',
  duration: 400,
  easing: 'easeInOutSine',

});
      
        hh = true;
        
    }
}, true);




