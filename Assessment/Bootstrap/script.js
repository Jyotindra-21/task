var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

// Reveal javascript
// NAV
// HERO page

ScrollReveal({ origin: "right", distance: "80px", duration: 2000 }).reveal(
  ".typewrite"
);
ScrollReveal({ origin: "right", distance: "80px", duration: 2000 }).reveal(
  "#hero h5",
  { delay: 500 }
);
ScrollReveal({ origin: "right", distance: "80px", duration: 2000 }).reveal(
  ".search-btn ",
  { delay: 1000 }
);
// ABOUT

ScrollReveal({ origin: "left", distance: "80px", duration: 2000 }).reveal(
  "#about .card-body",
  { delay: 1500 }
);
ScrollReveal({ origin: "right", distance: "80px", duration: 2000 }).reveal(
  "#about .signal-icon",
  { delay: 2000 }
);

// SERVICE
ScrollReveal({ origin: "top", distance: "80px", duration: 2000 }).reveal(
  "#services .service",
  { delay: 500 }
);
ScrollReveal({ origin: "bottom", distance: "80px", duration: 2000 }).reveal(
  "#portfolio .mycard",
  { delay: 500 }
);
ScrollReveal({ origin: "top", distance: "80px", duration: 2000 }).reveal(
  "#portfolio .carousel-item",
  { delay: 500 }
);
ScrollReveal({ origin: "top", distance: "80px", duration: 2000 }).reveal(
  "#pricing .card",
  { delay: 500, interval: 500 }
);
ScrollReveal({ origin: "top", distance: "80px", duration: 2000 }).reveal(
  "#contact .card .card-header2 h6",
  { delay: 500, interval: 500 }
);
ScrollReveal({ origin: "right", distance: "80px", duration: 2000 }).reveal(
  "#contact .card .card-body .mycol",
  { delay: 500, interval: 1000 }
);
ScrollReveal({ origin: "bottom", distance: "80px", duration: 2000 }).reveal(
  "#map-location img",
  { delay: 500, interval: 1000,reset:true }
);
