// تحديد الصور وتحريكها
const imgSlider = document.getElementById('imgSlider');
const imgContainer = imgSlider.querySelector('.img-container');
const images = imgContainer.querySelectorAll('img');

let counter = 0;
const interval = 4000;

setInterval(() => {
    counter++;
    if (counter >= images.length) {
        counter = 0;
    }
    moveImages();
}, interval);

function moveImages() {
    const moveAmount = -220 * counter;
    imgContainer.style.transform = `translateX(${moveAmount}px)`;
}

// تحديد خلفية الصفحة وتحريكها
let backgroundCounter = 0;
const backgroundImages = [
    'images/castelmezzano.jpg',
    'images/mountains-862870.jpg',
    'images/iceland.jpg',
    'images/snow-3193865.jpg'
];

setInterval(() => {
    backgroundCounter++;
    if (backgroundCounter >= backgroundImages.length) {
        backgroundCounter = 0;
    }
    moveBackground();
}, interval * backgroundImages.length);

function moveBackground() {
    document.body.style.backgroundImage = `url(${backgroundImages[backgroundCounter]})`;
}

