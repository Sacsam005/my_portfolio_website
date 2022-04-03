// play music
var myMusic = document.getElementById("music");
var button = document.getElementById("click");

button.onclick = () => {
    if (myMusic.paused) {
        myMusic.play();
        button.src = "./img/pause.png";
    } else {
        myMusic.pause();
        button.src = "./img/play.png";
    }
};
