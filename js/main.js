
// carousel
var instance = $(".hs__wrapper");
$.each(instance, function (key, value) {
  var arrows = $(instance[key]).find(".arrow"),
    prevArrow = arrows.filter(".arrow-prev"),
    nextArrow = arrows.filter(".arrow-next"),
    box = $(instance[key]).find(".hs"),
    x = 0,
    mx = 0,
    maxScrollWidth =
      box[0].scrollWidth - box[0].clientWidth / 2 - box.width() / 2;

  $(arrows).on("click", function () {
    if ($(this).hasClass("arrow-next")) {
      x = box.width() / 2 + box.scrollLeft() - 10;
      box.animate({
        scrollLeft: x
      });
    } else {
      x = box.width() / 2 - box.scrollLeft() - 10;
      box.animate({
        scrollLeft: -x
      });
    }
  });

  $(box).on({
    mousemove: function (e) {
      var mx2 = e.pageX - this.offsetLeft;
      if (mx) this.scrollLeft = this.sx + mx - mx2;
    },
    mousedown: function (e) {
      this.sx = this.scrollLeft;
      mx = e.pageX - this.offsetLeft;
    },
    scroll: function () {
      toggleArrows();
    }
  });

  $(document).on("mouseup", function () {
    mx = 0;
  });

  function toggleArrows() {
    if (box.scrollLeft() > maxScrollWidth - 10) {
      // disable next button when right end has reached
      nextArrow.addClass("disabled");
    } else if (box.scrollLeft() < 10) {
      // disable prev button when left end has reached
      prevArrow.addClass("disabled");
    } else {
      // both are enabled
      nextArrow.removeClass("disabled");
      prevArrow.removeClass("disabled");
    }
  }
});



$(function() {
    $(".slick").slick({

    infinite: false,
    speed: 300,
    slidesToShow: 3.3,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: false,

    }
    },
    {
    breakpoint: 600,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    }
    },
    {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });

    })