"use strict";

var imgContainers = document.querySelectorAll('.split-image');

for (var i = 0; i < imgContainers.length; i++) {
  var imgContainer = imgContainers[i],
      img = imgContainer.querySelector('img'),
      ul = imgContainer.querySelector('ul'),
      li = '';

  for (var i = 0; i < 4; i++) {
    li += '<li><img src="' + img.src + '"></li>';
  }

  ul.innerHTML = li;
  var n = imgContainer.offsetWidth,
      items = imgContainer.querySelectorAll('li');

  for (var o = 0, r = 5, l = Math.floor(3 * Math.random()) + 0, s = 0; s < items.length; s++) {
    var c = items[s],
        img = c.querySelector('img'),
        w = 100 / items.length,
        p = 0,
        h = 0;
    c.style.width = w + '%', c.style.height = n - 50 + "px", img.style.width = n + 'px';
  }
}