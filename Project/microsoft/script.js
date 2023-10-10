$(function () {
  /* Initialize Carousel */
  var paused = 0;
  $("#microsoft_carousel").carousel({
    interval: 3000,
    pause: true,
  });

  /* Play trigger */
  $("#toggleCarousel").click(function () {
    var state = paused ? "cycle" : "pause";
    paused = paused ? false : true;
    $("#microsoft_carousel").carousel(state);
    $(this).find("i").toggleClass("fa-circle-play fa-circle-pause");
  });
});

$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(this).find("i").toggleClass("fa-bars fa-x");
  });

  
});

var btn = $("#back-to-top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }

    if ($(window).scrollTop() > 2400) {
      btn.css({  "position": "absolute"})
    }else{
      btn.css({  "position": "fixed"})
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
