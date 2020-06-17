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
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
