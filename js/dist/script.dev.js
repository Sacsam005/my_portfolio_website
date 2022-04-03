"use strict";

// Loader Animation
var loader = document.getElementById('loader');
var transition = document.querySelector('.transition');
window.addEventListener("load", function () {
  loader.style.display = "none";
});
transition.classList.add('slide');
setTimeout(function () {
  transition.classList.remove('slide');
}, 1500); // Custom Cursor

var cursor = document.querySelector('.cursor');

window.onmousemove = function (e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
}; // Progress bar


window.onscroll = function () {
  var maxHeight = window.document.body.scrollHeight - window.innerHeight;
  var percentage = window.scrollY / maxHeight * 100;
  document.querySelector('#home .scroll-indicator').style.width = percentage + '%';
}; // Play music


var myMusic = document.getElementById("music");
var button = document.getElementById("click");

button.onclick = function playMusic() {
  if (myMusic.paused) {
    myMusic.play();
    button.src = "./img/pause.png";
  } else {
    myMusic.pause();
    button.src = "./img/play.png";
  }
}; // Certificates slider


var mainImg = document.getElementById('main-img');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};