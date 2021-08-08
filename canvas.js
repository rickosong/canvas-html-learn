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