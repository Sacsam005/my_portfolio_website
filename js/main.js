// loader animation
const loader = document.getElementById('loader');
const transition = document.querySelector('.transition')

window.addEventListener("load", () => {
  loader.style.display = "none";

})
transition.classList.add('slide');
setTimeout(() => {
  transition.classList.remove('slide');
}, 1500);

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}))


// progress bar
window.onscroll = () => {
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  document.querySelector('#home .scroll-indicator').style.width = percentage + '%';
};






