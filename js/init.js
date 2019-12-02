/*
	Linear by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

skel.init({
	prefix: 'css/style',
	resetCSS: true,
	boxModel: 'border',
	grid: {
		gutters: 50
	},
	breakpoints: {
		'mobile': {
			range: '-480',
			lockViewport: true,
			containers: 'fluid',
			grid: {
				collapse: true,
				gutters: 10
			}
		},
		'desktop': {
			range: '481-',
			containers: 1200
		},
		'1000px': {
			range: '481-1200',
			containers: 960
		}
	}
}, {
	panels: {
		panels: {
			navPanel: {
				breakpoints: 'mobile',
				position: 'left',
				style: 'reveal',
				size: '80%',
				html: '<div data-action="navList" data-args="nav"></div>'
			}
		},
		overlays: {
			titleBar: {
				breakpoints: 'mobile',
				position: 'top-left',
				height: 44,
				width: '100%',
				html: '<span class="toggle" data-action="togglePanel" data-args="navPanel"></span>' +
 '<span class="title" data-action="copyHTML" data-args="logo"></span>'
			}
		}
	}
	
	
});




////////Try anime.js

var rolling_ball = document.querySelector(".rolling_ball");
var playing = false;
var mousePosition;
var offset = [0,0];
var isDown = false;

rolling_ball.addEventListener('click',function() {
  if(playing)
    return;
  playing = true;
  anime({
  targets: rolling_ball,
  //cale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],  
  //rotateY: {value: '+=180', delay: 200},
  translateX: '+=30',
  //borderRadius: 100,
  duration: 400,
  easing: 'easeInOutSine',
  //direction: 'alternate',
    complete: function(anim){
       playing = false;
    }
  //loop: true
  //autoplay: false
  //loop: true
});
});
//var rrr=document.getElementsByClassName('rolling_ball');
//var rr = rrr[0];
//document.body.appendChild(rolling_ball);
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
      
    }
}, true);

