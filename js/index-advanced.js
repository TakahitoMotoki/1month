var imageSource = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
var imageNumber = 0;

function changeSlideImage(number) {
  imageNumber = imageNumber + 1;
  if(imageNumber > 2) {
    imageNumber = 0;
  }
  elem = document.getElementById("slide-image");
  elem.src = imageSource[number];
}
