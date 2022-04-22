// Auto typing text effect
var typed = new Typed('.result', {
    strings: ['a Web-Designer @ CHRISTUS Health', 'a Front-end Developer', 'a Front-end Engineer', 'an Aspirant'],
    typeSpeed: 75,
    backSpeed: 60,
    loop: true,
});

// Trophy slider
var timeOnSlide = 3,
    // the time each image will remain static on the screen, measured in seconds
    timeBetweenSlides = 1,
    // the time taken to transition between images, measured in seconds

    // test if the browser supports animation, and if it needs a vendor prefix to do so
    animationstring = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '),
    // array of possible vendor prefixes
    pfx = '',
    slider = document.getElementById('slider');
if (slider.style.animationName !== undefined) {
    animation = true;
}
// browser supports keyframe animation w/o prefixes

if (animation === false) {
    for (var i = 0; i < domPrefixes.length; i++) {
        if (slider.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animation = true;
            break;
        }
    }
}

if (animation === false) {
    // animate in JavaScript fallback
} else {
    var images = slider.getElementsByTagName('img'),
        firstImg = images[0],
        // get the first image inside the "slider" element.
        imgWrap = firstImg.cloneNode(false); // copy it.
    slider.appendChild(imgWrap); // add the clone to the end of the images
    var imgCount = images.length, // count the number of images in the slide, including the new cloned element
        totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
        slideRatio = (timeOnSlide / totalTime) * 100, // determine the percentage of time an induvidual image is held static during the animation
        moveRatio = (timeBetweenSlides / totalTime) * 100, // determine the percentage of time for an individual movement
        basePercentage = 100 / imgCount, // work out how wide each image should be in the slider, as a percentage.
        position = 0, // set the initial position of the slider element
        css = document.createElement('style'); // start marking a new style sheet
    css.type = 'text/css';
    css.innerHTML +=
        '#slider { text-align: left; margin: 0; font-size: 0; position: relative; width: ' + imgCount * 100 + '%;  }\n'; // set the width for the slider container
    css.innerHTML += '#slider img { float: left; width: ' + basePercentage + '%; }\n';
    css.innerHTML += '@' + keyframeprefix + 'keyframes slider {\n';
    for (i = 0; i < imgCount - 1; i++) {
        //
        position += slideRatio; // make the keyframe the position of the image
        css.innerHTML += position + '% { left: -' + i * 100 + '%; }\n';
        position += moveRatio; // make the postion for the _next_ slide
        css.innerHTML += position + '% { left: -' + (i + 1) * 100 + '%; }\n';
    }
    css.innerHTML += '}\n';
    css.innerHTML +=
        '#slider { left: 0%; ' +
        keyframeprefix +
        'transform: translate3d(0,0,0); ' +
        keyframeprefix +
        'animation: ' +
        totalTime +
        's slider infinite; }\n'; // call on the completed keyframe animation sequence
    document.body.appendChild(css); // add the new stylesheet to the end of the document
}
