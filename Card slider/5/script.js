var $num = $(".card-carousel .my-card").length;
var $even = $num / 2;
var $odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $(".card-carousel .my-card:nth-child(" + $even + ")").addClass("active");
  $(".card-carousel .my-card:nth-child(" + $even + ")")
    .prev()
    .addClass("prev");
  $(".card-carousel .my-card:nth-child(" + $even + ")")
    .next()
    .addClass("next");
} else {
  $(".card-carousel .my-card:nth-child(" + $odd + ")").addClass("active");
  $(".card-carousel .my-card:nth-child(" + $odd + ")")
    .prev()
    .addClass("prev");
  $(".card-carousel .my-card:nth-child(" + $odd + ")")
    .next()
    .addClass("next");
}

$(".card-carousel .my-card").on("click", function () {
  if ($(".card-carousel").is(":animated")) {
    return;
  }

  var $slide = $(".card-carousel .active").width();

  if ($(this).hasClass("next")) {
    $(".card-carousel").animate({ left: "-=" + $slide });
  } else if ($(this).hasClass("prev")) {
    $(".card-carousel").animate({ left: "+=" + $slide });
  }

  $(this).removeClass("prev next");
  $(this).siblings().removeClass("prev active next");

  $(this).addClass("active");
  $(this).prev().addClass("prev");
  $(this).next().addClass("next");
});

// Keyboard nav
$("html body").keydown(function (e) {
  if (e.keyCode == 37) {
    // left
    $(".card-carousel .active").prev().trigger("click");
  } else if (e.keyCode == 39) {
    // right
    $(".card-carousel .active").next().trigger("click");
  }
});
