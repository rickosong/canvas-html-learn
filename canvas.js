let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var konteks = canvas.getContext('2d');

// // konteks.fillRect(x, y,width, height);
// konteks.fillStyle = 'blue'
// konteks.fillRect(100, 100, 100, 100);
// konteks.fillRect(100, 300, 100, 100);

// // line
// konteks.beginPath();
// konteks.moveTo(800, 600);
// konteks.lineTo(300, 600);
// konteks.strokeStyle = 'blue';
// konteks.stroke();

// //  Arc / Circle
// konteks.arc();

var x = 0;
var tambahX = 5;
var l = 50; 
var t = 50;
var y = 0;

function animateHorizontal() {

    requestAnimationFrame(animateHorizontal);

    konteks.clearRect(0, 0, innerWidth, innerHeight);
    konteks.fillStyle = 'blue'
    konteks.fillRect(x, 300, l, t);


    // pengkonndisian x
    if( x + l  > innerWidth || x + l < 0) {
        tambahX = - tambahX
    }

x += tambahX;
}

// function animateVertical() {

//     requestAnimationFrame(animateVertical);

//     konteks.clearRect(0, 0, innerWidth, innerHeight);
//     konteks.fillStyle = 'blue';
//     konteks.fillRect(600, y, 50, 50);

//     // pengkondisian y
//     if(y > innerHeight || y < 0) {
//         tambahY = -tambahY
//     }

// y += tambahY;
// }

animateHorizontal();
