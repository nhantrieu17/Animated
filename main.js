document.getElementById("bounceBtn").addEventListener("click", function(){
const square = document.getElementById("box");
square.style.animation = "bounce 2s infinite"; 
});

document.getElementById("flashBtn").addEventListener("click", function() {
const square = document.getElementById("box");
square.style.animation = "flash 2s infinite";
});

document.getElementById("pulseBtn").addEventListener("click", function() {
const square = document.getElementById("box");
square.style.animation = "pulse 2s infinite";
});