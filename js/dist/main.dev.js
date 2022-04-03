"use strict";

// loader animation
var loader = document.getElementById('loader');
var transition = document.querySelector('.transition');
window.addEventListener("load", function () {
  loader.style.display = "none";
});
transition.classList.add('slide');
setTimeout(function () {
  transition.classList.remove('slide');
}, 1500); // Hamburger menu

var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(function (link) {
  return link.addEventListener('click', function () {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
}); // progress bar

window.onscroll = function () {
  var maxHeight = window.document.body.scrollHeight - window.innerHeight;
  var percentage = window.scrollY / maxHeight * 100;
  document.querySelector('#home .scroll-indicator').style.width = percentage + '%';
}; // Custom Cursor


var cursor = document.querySelector('.cursor');

window.onmousemove = function (e) {
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
};