const images = ['../image/BuyCar/CarImg/1/1.JPG',
  '../image/BuyCar/CarImg/1/2.JPG',
  '../image/BuyCar/CarImg/1/3.JPG',
  '../image/BuyCar/CarImg/1/4.JPG',
  '../image/BuyCar/CarImg/1/5.JPG'];
let currentIndex = 0;
function changeImage(imageUrl) {
    document.getElementById('main-image').src = imageUrl;
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('main-image').src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    document.getElementById('main-image').src = images[currentIndex];
}