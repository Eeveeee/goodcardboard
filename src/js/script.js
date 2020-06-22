$(document).ready(function () {
  $(".slider-big").slick({
    arrows: false,
    draggable: false,
    asNavFor: ".slider-small",
    fade: true,
  });
  $(".slider-small").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    asNavFor: ".slider-big",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
        },
      },
    ],
  });
  $(".feedback-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
        },
      },
    ],
  });
});
