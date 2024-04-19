var mySwiper = new Swiper("#mydiv .swiper-container", {
  loop: true,
  slidesPerView: "auto",
  loopedSlides: 0,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 30,
  pagination: "#mydiv .swiper-pagination",
  paginationClickable: true,
  nextButton: "#mydiv .swiper-button-next",
  prevButton: "#mydiv .swiper-button-prev",
});

$("#mydiv .card .video-icon").on("click", function () {
  if ($(this).parent(".card").attr("data-url")) {
    var yturl = $(this).parent(".card").attr("data-url");
    $.magnificPopup.open({
      items: {
        src: yturl,
      },
      type: "iframe",
      mainClass: "mfp-fade",
    });
  }
});
$("#mydiv .card[data-url^=http] .video-icon").css({
  display: "flex",
});
