let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var konteks = canvas.getContext('2d');

// konteks.fillRect(x, y,width, height);

konteks.fillRect(100, 100, 100, 100);
konteks.fillRect(100, 300, 100, 100);