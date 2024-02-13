document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "./background-images/2.jpg",
        "./background-images/4.jpg",
        "./background-images/5.jpg",
        "./background-images/6.JPG",
        "./background-images/7.jpg",
    ];
  var index = 0;
  var slides = document.getElementsByClassName('background-image');
//   var heartText = document.querySelector('.heart-text');

  function changeImage() {
    index = (index + 1) % images.length;
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.backgroundImage = 'url(' + images[index] + ')';
    }
  }

  changeImage();
  setInterval(changeImage, 3000);

  const backgroundAudio = document.getElementById('backgroundAudio');

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        backgroundAudio.play();
      } else {
        backgroundAudio.pause();
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial check if the page is visible or not
    handleVisibilityChange();

  // Custom message
//   heartText.innerText = "Your Custom Message Here";
});
