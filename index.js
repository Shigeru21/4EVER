const video = document.querySelector('.section2__video');
const iconPlayS2 = document.querySelector('.section2__video-icon-play');

// ENDED VIDEO

video.addEventListener('ended', function () {
  iconPlayS2.classList.add('hiden');
});

// PAUSE VIDEO

video.addEventListener('pause', function() {
  iconPlayS2.classList.remove('hiden');
});

iconPlayS2.addEventListener('click', function() {
  this.classList.add('hiden');
  video.play();
});

video.addEventListener('play', function() {
  iconPlayS2.classList.add('hiden');
});

video.addEventListener('touchend', function() {
  this.pause();
});
const handleActiveThumbnail = id => {
  const sliderS2ListItem = document.querySelectorAll('.section2__item');
  sliderS2ListItem.forEach(item => {
    item.classList.remove('active');
  });
  sliderS2ListItem.forEach(i => {
    if (id == i.dataset.id) {
      i.classList.add('active');
    }
  });
};
// play video
function Video(id) {
  video.setAttribute('src',`./videos/video_${id}.mp4`);
  video.play();
}