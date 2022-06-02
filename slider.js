$(document).ready(function () {
  $('.owl-video').owlCarousel({
      loop: true,
      margin: 20,
      dots: false,
      nav: true,
      responsive: {
        0: {
          items: 2.5,
          nav: false,
        },
        768: {
          items: 3,
          nav: false,
        },
      },
    });
    handleActiveThumbnail(1);
    $('.owl-video').on('click', '.item', function (e) {
      const id = e.target.parentElement.dataset.id;
      handleActiveThumbnail(id);
      Video(id);
    });
});