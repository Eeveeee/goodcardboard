$(document).ready(function () {
  $(".slider-small").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 800,
    asNavFor: ".slider-big",
  });
  $(".slider-big").slick({
    arrows: false,
    draggable: false,
    asNavFor: ".slider-small",
    fade: true,
  });
});
