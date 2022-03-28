// Auto typing text effect
var typed = new Typed(".result", {
  strings: [
    "Sachin Samal",
    "an Aspirant",
    "a Front-end Developer",
    "a Front-end Engineer",
    "a Web-Designer",
  ],
  typeSpeed: 75,
  backSpeed: 60,
  loop: true,
});

// Certificates slider
let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
}



