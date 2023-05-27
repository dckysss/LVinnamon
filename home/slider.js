
var $slide = $(".slide");
var current = 0;

function cls() {
  $slide.slideUp();
}

function next() {
  cls();
  if (current === $slide.length - 1) current = -1;
  current++;

  $slide.eq(current).slideDown()
}

setInterval(function () {
  next();
}, 5000);

function start() {
  cls();
  $slide.eq(current).stop().slideDown();
}
start();
