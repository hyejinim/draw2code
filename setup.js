// the video
let capture;
let w = window.innerWidth;
    h = (w*9/16)-150;

const playBtn = document.getElementById('play');

// for displaying the label
let label = "waiting...";

// for displaying the code scanned
let code = [];
let txt = "";

function setup(){
    // create canvas
    pixelDensity(1); // this makes the internal p5 canvas smaller
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    createCanvas(w, h+150);
    capture.size(w, h);
    capture.parent('container');
    cnv = createCanvas(w, h+150);
    cnv.parent('container');
    // capture.hide(); // tracking.js can't track the video when it's hidden

    img = loadImage('assets/duck.png'); // Load the image

    // detect the grid card and the drawn
    detectGrid();
    // start classifying for other coding cards
    classifyCapture();

    //   button = createButton('Show Outcome');
    //   button.position(600, 65);
    //   button.mousePressed(showImage);

}