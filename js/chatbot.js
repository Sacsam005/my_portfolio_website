
// chatbot
(function (w, d) {
    w.CollectId = "61aa8a45ba60cc741a634e1e";
    var h = d.head || d.getElementsByTagName("head")[0];
    var s = d.createElement("script");
    s.setAttribute("type", "text/javascript");
    s.async = true;
    s.setAttribute("src", "https://collectcdn.com/launcher.js");
    h.appendChild(s);
})(window, document);

// Loader Animation
const loader = document.getElementById('loader');
const transition = document.querySelector('.transition')

window.addEventListener("load", () => {
    loader.style.display = "none";

})
transition.classList.add('slide');
setTimeout(() => {
    transition.classList.remove('slide');
}, 1500);

// Custom Cursor
let cursor = document.querySelector('.cursor');

window.onmousemove = (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
};

// Progress bar
window.onscroll = () => {
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('#home .scroll-indicator').style.width = percentage + '%';
};

// Play music
var myMusic = document.getElementById("music");
var button = document.getElementById("click");

button.onclick = function () {
    if (myMusic.paused) {
        myMusic.play();
        button.src = "./img/pause.png";
    } else {
        myMusic.pause();
        button.src = "./img/play.png";
    }
};






